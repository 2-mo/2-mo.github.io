import type {
    AboutPageSectionConfig,
    CardGroup,
    CardItem,
    CvEducationItem,
    CvExperienceItem,
    CvFieldConfig,
    CvPublication,
    CvPublicationTag,
    PageConfig,
} from '@/types/page';

type UnknownRecord = Record<string, unknown>;

export type PageConfigResolver = (slug: string) => unknown | null | undefined;

export interface ContentValidationOptions {
    file?: string;
}

export interface NavigationPagesValidationOptions {
    configFile?: string;
    pageFile?: (slug: string) => string;
}

export class ContentValidationError extends Error {
    readonly errors: string[];

    constructor(errors: string[]) {
        super(`Content validation failed:\n${errors.map((error) => `- ${error}`).join('\n')}`);
        this.name = 'ContentValidationError';
        this.errors = errors;
    }
}

const PAGE_TYPES = ['about', 'publication', 'card', 'text', 'cv', 'embed'] as const;
const NAV_TYPES = ['section', 'page', 'link'] as const;
const SITE_SECTION_TYPES = ['markdown', 'publications', 'list', 'cards', 'timeline'] as const;
const ABOUT_SECTION_TYPES = ['markdown', 'publications', 'list', 'cards', 'timeline'] as const;
const CARD_VARIANTS = ['default', 'portal', 'projects', 'experience'] as const;

const DEFAULT_CONFIG_FILE = 'content/config.toml';

function defaultPageFile(slug: string): string {
    return `content/${slug}.toml`;
}

function isRecord(value: unknown): value is UnknownRecord {
    return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function isNonEmptyString(value: unknown): value is string {
    return typeof value === 'string' && value.trim().length > 0;
}

function isStringArray(value: unknown): value is string[] {
    return Array.isArray(value) && value.every((item) => typeof item === 'string');
}

function isAllowedValue<T extends readonly string[]>(value: unknown, allowed: T): value is T[number] {
    return typeof value === 'string' && allowed.includes(value);
}

function addError(
    errors: string[],
    file: string,
    path: string,
    message: string,
    slug?: string
): void {
    const slugLabel = slug ? ` slug "${slug}"` : '';
    errors.push(`${file}${slugLabel} ${path}: ${message}`);
}

function requireObject(
    errors: string[],
    file: string,
    path: string,
    value: unknown,
    slug?: string
): value is UnknownRecord {
    if (isRecord(value)) return true;
    addError(errors, file, path, 'expected object.', slug);
    return false;
}

function requireArray(
    errors: string[],
    file: string,
    path: string,
    value: unknown,
    slug?: string
): value is unknown[] {
    if (Array.isArray(value)) return true;
    addError(errors, file, path, 'expected array.', slug);
    return false;
}

function requireNonEmptyString(
    errors: string[],
    file: string,
    path: string,
    value: unknown,
    slug?: string
): value is string {
    if (isNonEmptyString(value)) return true;
    addError(errors, file, path, 'expected non-empty string.', slug);
    return false;
}

function validateOptionalString(
    errors: string[],
    file: string,
    path: string,
    value: unknown,
    slug?: string
): void {
    if (value !== undefined && typeof value !== 'string') {
        addError(errors, file, path, 'expected string when provided.', slug);
    }
}

function validateOptionalBoolean(
    errors: string[],
    file: string,
    path: string,
    value: unknown
): void {
    if (value !== undefined && typeof value !== 'boolean') {
        addError(errors, file, path, 'expected boolean when provided.');
    }
}

function validateOptionalNumber(
    errors: string[],
    file: string,
    path: string,
    value: unknown,
    slug?: string
): void {
    if (value !== undefined && (typeof value !== 'number' || !Number.isFinite(value))) {
        addError(errors, file, path, 'expected finite number when provided.', slug);
    }
}

function validateStringArrayField(
    errors: string[],
    file: string,
    path: string,
    value: unknown,
    slug?: string
): void {
    if (!isStringArray(value)) {
        addError(errors, file, path, 'expected array of strings.', slug);
    }
}

function validatePublicPath(
    errors: string[],
    file: string,
    path: string,
    value: unknown,
    slug?: string
): void {
    if (value !== undefined && requireNonEmptyString(errors, file, path, value, slug) && !value.startsWith('/')) {
        addError(errors, file, path, 'expected a root-relative public path starting with "/".', slug);
    }
}

function validateEmbedSrc(
    errors: string[],
    file: string,
    path: string,
    value: unknown,
    slug?: string
): void {
    if (!requireNonEmptyString(errors, file, path, value, slug)) return;
    if (!(value.startsWith('/') || value.startsWith('http://') || value.startsWith('https://'))) {
        addError(errors, file, path, 'expected root-relative or http(s) URL.', slug);
    }
}

function validateContentSource(
    errors: string[],
    file: string,
    path: string,
    value: unknown,
    slug?: string
): void {
    if (value !== undefined) {
        requireNonEmptyString(errors, file, path, value, slug);
    }
}

function hasPathSeparators(value: string): boolean {
    return value.includes('/') || value.includes('\\') || value.includes('..');
}

function validatePageTargetSlug(
    errors: string[],
    file: string,
    path: string,
    value: string
): void {
    if (hasPathSeparators(value)) {
        addError(errors, file, path, 'expected page target slug, not a file path.');
    }
}

function expectedPageHref(target: string): string {
    return target === 'about' ? '/' : `/${target}`;
}

function validateNavigationItemConsistency(
    errors: string[],
    file: string,
    path: string,
    item: UnknownRecord
): void {
    const { type, target, href } = item;
    if (!isAllowedValue(type, NAV_TYPES) || !isNonEmptyString(target) || !isNonEmptyString(href)) {
        return;
    }

    if (type === 'page') {
        validatePageTargetSlug(errors, file, `${path}.target`, target);

        if (!href.startsWith('/')) {
            addError(errors, file, `${path}.href`, 'expected page href to start with "/".');
            return;
        }

        const expectedHref = expectedPageHref(target);
        if (href !== expectedHref) {
            addError(
                errors,
                file,
                `${path}.href`,
                `expected "${expectedHref}" for page target "${target}".`
            );
        }
    }

    if (type === 'section') {
        const allowedHrefs = [`#${target}`, `/#${target}`];
        if (!allowedHrefs.includes(href)) {
            addError(
                errors,
                file,
                `${path}.href`,
                `expected "#${target}" or "/#${target}" for section target "${target}".`
            );
        }
    }

    if (type === 'link' && !(href.startsWith('/') || href.startsWith('http://') || href.startsWith('https://') || href.startsWith('mailto:'))) {
        addError(errors, file, `${path}.href`, 'expected root-relative, http(s), or mailto href for link navigation item.');
    }
}

function validateNavigationItem(errors: string[], file: string, path: string, item: unknown): void {
    if (!requireObject(errors, file, path, item)) return;

    requireNonEmptyString(errors, file, `${path}.title`, item.title);
    if (!isAllowedValue(item.type, NAV_TYPES)) {
        addError(errors, file, `${path}.type`, `expected one of ${NAV_TYPES.map((type) => `"${type}"`).join(', ')}.`);
    }
    requireNonEmptyString(errors, file, `${path}.target`, item.target);
    requireNonEmptyString(errors, file, `${path}.href`, item.href);
    validateOptionalString(errors, file, `${path}.icon`, item.icon);
    validateNavigationItemConsistency(errors, file, path, item);
}

function validateSiteSection(errors: string[], file: string, path: string, section: unknown): void {
    if (!requireObject(errors, file, path, section)) return;

    requireNonEmptyString(errors, file, `${path}.id`, section.id);
    if (!isAllowedValue(section.type, SITE_SECTION_TYPES)) {
        addError(errors, file, `${path}.type`, `expected one of ${SITE_SECTION_TYPES.map((type) => `"${type}"`).join(', ')}.`);
    }
    validateOptionalString(errors, file, `${path}.title`, section.title);
    validateContentSource(errors, file, `${path}.source`, section.source);
    validateOptionalString(errors, file, `${path}.filter`, section.filter);
    if (section.variant !== undefined && !isAllowedValue(section.variant, CARD_VARIANTS)) {
        addError(errors, file, `${path}.variant`, `expected one of ${CARD_VARIANTS.map((variant) => `"${variant}"`).join(', ')}.`);
    }
    validateOptionalNumber(errors, file, `${path}.limit`, section.limit);
}

export function validateSiteConfig(config: unknown, file = DEFAULT_CONFIG_FILE): string[] {
    const errors: string[] = [];
    if (!requireObject(errors, file, '<root>', config)) return errors;

    if (requireObject(errors, file, 'site', config.site)) {
        requireNonEmptyString(errors, file, 'site.title', config.site.title);
        requireNonEmptyString(errors, file, 'site.description', config.site.description);
        validatePublicPath(errors, file, 'site.favicon', config.site.favicon);
        validateOptionalString(errors, file, 'site.last_updated', config.site.last_updated);
    }

    if (requireObject(errors, file, 'author', config.author)) {
        requireNonEmptyString(errors, file, 'author.name', config.author.name);
        requireNonEmptyString(errors, file, 'author.title', config.author.title);
        requireNonEmptyString(errors, file, 'author.institution', config.author.institution);
        validatePublicPath(errors, file, 'author.avatar', config.author.avatar);
    }

    if (requireObject(errors, file, 'social', config.social)) {
        for (const [key, value] of Object.entries(config.social)) {
            if (value !== undefined && typeof value !== 'string' && !isStringArray(value)) {
                addError(errors, file, `social.${key}`, 'expected string or array of strings when provided.');
            }
        }
    }

    if (requireObject(errors, file, 'features', config.features)) {
        if (typeof config.features.enable_likes !== 'boolean') {
            addError(errors, file, 'features.enable_likes', 'expected boolean.');
        }
        validateOptionalBoolean(errors, file, 'features.enable_one_page_mode', config.features.enable_one_page_mode);
        validateOptionalBoolean(errors, file, 'features.enable_scholar_citations', config.features.enable_scholar_citations);
    }

    if (requireArray(errors, file, 'navigation', config.navigation)) {
        config.navigation.forEach((item, index) => {
            validateNavigationItem(errors, file, `navigation[${index}]`, item);
        });
    }

    if (config.sections !== undefined) {
        if (requireArray(errors, file, 'sections', config.sections)) {
            config.sections.forEach((section, index) => {
                validateSiteSection(errors, file, `sections[${index}]`, section);
            });
        }
    }

    return errors;
}

export function assertValidSiteConfig(config: unknown, file = DEFAULT_CONFIG_FILE): void {
    const errors = validateSiteConfig(config, file);
    if (errors.length > 0) {
        throw new ContentValidationError(errors);
    }
}

function validateBasePageFields(errors: string[], file: string, slug: string, page: UnknownRecord): void {
    if (!isAllowedValue(page.type, PAGE_TYPES)) {
        addError(errors, file, 'type', `expected one of ${PAGE_TYPES.map((type) => `"${type}"`).join(', ')}.`, slug);
    }
    requireNonEmptyString(errors, file, 'title', page.title, slug);
    validateOptionalString(errors, file, 'description', page.description, slug);
}

function validateAboutSection(
    errors: string[],
    file: string,
    slug: string,
    path: string,
    section: unknown
): section is AboutPageSectionConfig {
    if (!requireObject(errors, file, path, section, slug)) return false;

    requireNonEmptyString(errors, file, `${path}.id`, section.id, slug);
    if (!isAllowedValue(section.type, ABOUT_SECTION_TYPES)) {
        addError(errors, file, `${path}.type`, `expected one of ${ABOUT_SECTION_TYPES.map((type) => `"${type}"`).join(', ')}.`, slug);
    }
    validateOptionalString(errors, file, `${path}.title`, section.title, slug);
    validateContentSource(errors, file, `${path}.source`, section.source, slug);
    validateOptionalString(errors, file, `${path}.filter`, section.filter, slug);
    if (section.variant !== undefined && !isAllowedValue(section.variant, CARD_VARIANTS)) {
        addError(errors, file, `${path}.variant`, `expected one of ${CARD_VARIANTS.map((variant) => `"${variant}"`).join(', ')}.`, slug);
    }
    validateOptionalNumber(errors, file, `${path}.limit`, section.limit, slug);

    if (section.type === 'markdown' || section.type === 'list' || section.type === 'cards' || section.type === 'timeline') {
        requireNonEmptyString(errors, file, `${path}.source`, section.source, slug);
    }

    return true;
}

function validateAboutPage(errors: string[], file: string, slug: string, page: UnknownRecord): void {
    if (page.profile !== undefined) {
        if (requireObject(errors, file, 'profile', page.profile, slug) && page.profile.research_interests !== undefined) {
            validateStringArrayField(errors, file, 'profile.research_interests', page.profile.research_interests, slug);
        }
    }

    if (requireArray(errors, file, 'sections', page.sections, slug)) {
        page.sections.forEach((section, index) => {
            validateAboutSection(errors, file, slug, `sections[${index}]`, section);
        });
    }
}

function validatePublicationPage(errors: string[], file: string, slug: string, page: UnknownRecord): void {
    requireNonEmptyString(errors, file, 'source', page.source, slug);
}

function validateTextPage(errors: string[], file: string, slug: string, page: UnknownRecord): void {
    validateContentSource(errors, file, 'source', page.source, slug);
    validateOptionalString(errors, file, 'content', page.content, slug);

    if (!isNonEmptyString(page.source) && !isNonEmptyString(page.content)) {
        addError(errors, file, 'source', 'expected non-empty source or content for text page.', slug);
    }
}

function validateCardItem(
    errors: string[],
    file: string,
    slug: string,
    path: string,
    item: unknown
): item is CardItem {
    if (!requireObject(errors, file, path, item, slug)) return false;

    requireNonEmptyString(errors, file, `${path}.title`, item.title, slug);
    validateOptionalString(errors, file, `${path}.subtitle`, item.subtitle, slug);
    validateOptionalString(errors, file, `${path}.date`, item.date, slug);
    validateOptionalString(errors, file, `${path}.content`, item.content, slug);
    validateOptionalString(errors, file, `${path}.link`, item.link, slug);
    validateOptionalString(errors, file, `${path}.image`, item.image, slug);
    validateOptionalString(errors, file, `${path}.logo`, item.logo, slug);
    validateOptionalString(errors, file, `${path}.status`, item.status, slug);
    validateOptionalString(errors, file, `${path}.source`, item.source, slug);
    validateOptionalString(errors, file, `${path}.repo`, item.repo, slug);
    if (item.metrics !== undefined) {
        if (requireArray(errors, file, `${path}.metrics`, item.metrics, slug)) {
            item.metrics.forEach((metric, index) => {
                if (!requireObject(errors, file, `${path}.metrics[${index}]`, metric, slug)) return;
                requireNonEmptyString(errors, file, `${path}.metrics[${index}].label`, metric.label, slug);
                requireNonEmptyString(errors, file, `${path}.metrics[${index}].value`, metric.value, slug);
            });
        }
    }
    if (item.tags !== undefined) {
        validateStringArrayField(errors, file, `${path}.tags`, item.tags, slug);
    }

    return true;
}

function validateCardGroup(
    errors: string[],
    file: string,
    slug: string,
    path: string,
    group: unknown
): group is CardGroup {
    if (!requireObject(errors, file, path, group, slug)) return false;

    requireNonEmptyString(errors, file, `${path}.title`, group.title, slug);
    if (requireArray(errors, file, `${path}.items`, group.items, slug)) {
        group.items.forEach((item, index) => {
            validateCardItem(errors, file, slug, `${path}.items[${index}]`, item);
        });
    }

    return true;
}

function validateCardPage(errors: string[], file: string, slug: string, page: UnknownRecord): void {
    if (page.grouped !== undefined && typeof page.grouped !== 'boolean') {
        addError(errors, file, 'grouped', 'expected boolean when provided.', slug);
    }

    if (page.variant !== undefined && !isAllowedValue(page.variant, CARD_VARIANTS)) {
        addError(errors, file, 'variant', `expected one of ${CARD_VARIANTS.map((variant) => `"${variant}"`).join(', ')}.`, slug);
    }

    if (page.items !== undefined) {
        if (requireArray(errors, file, 'items', page.items, slug)) {
            page.items.forEach((item, index) => {
                validateCardItem(errors, file, slug, `items[${index}]`, item);
            });
        }
    }

    if (page.groups !== undefined) {
        if (requireArray(errors, file, 'groups', page.groups, slug)) {
            page.groups.forEach((group, index) => {
                validateCardGroup(errors, file, slug, `groups[${index}]`, group);
            });
        }
    }

    if (page.items === undefined && page.groups === undefined) {
        addError(errors, file, 'items', 'expected items or groups for card page.', slug);
    }

    if (page.grouped === true && page.groups === undefined) {
        addError(errors, file, 'groups', 'expected groups when grouped is true.', slug);
    }
}

function validateCvPage(errors: string[], file: string, slug: string, page: UnknownRecord): void {
    validatePublicPath(errors, file, 'pdf', page.pdf, slug);

    if (requireObject(errors, file, 'profile', page.profile, slug)) {
        requireNonEmptyString(errors, file, 'profile.name', page.profile.name, slug);
        requireNonEmptyString(errors, file, 'profile.name_cn', page.profile.name_cn, slug);
        if (requireNonEmptyString(errors, file, 'profile.photo', page.profile.photo, slug)) {
            validatePublicPath(errors, file, 'profile.photo', page.profile.photo, slug);
        }
        validateCvFields(errors, file, slug, 'profile.left', page.profile.left);
        validateCvFields(errors, file, slug, 'profile.right', page.profile.right);
        requireNonEmptyString(errors, file, 'profile.interests', page.profile.interests, slug);
    }

    if (requireArray(errors, file, 'education', page.education, slug)) {
        page.education.forEach((item, index) => {
            validateCvEducationItem(errors, file, slug, `education[${index}]`, item);
        });
    }

    if (requireArray(errors, file, 'experience', page.experience, slug)) {
        page.experience.forEach((item, index) => {
            validateCvExperienceItem(errors, file, slug, `experience[${index}]`, item);
        });
    }

    if (requireObject(errors, file, 'publications', page.publications, slug)) {
        validateOptionalString(errors, file, 'publications.selected_subtitle', page.publications.selected_subtitle, slug);
        validateCvPublications(errors, file, slug, 'publications.primary', page.publications.primary);
        validateCvPublications(errors, file, slug, 'publications.additional', page.publications.additional);
    }

    validateStringArrayField(errors, file, 'projects', page.projects, slug);
    validateStringArrayField(errors, file, 'awards', page.awards, slug);
    requireNonEmptyString(errors, file, 'service', page.service, slug);
    requireNonEmptyString(errors, file, 'hobbies', page.hobbies, slug);
}

function validateCvField(
    errors: string[],
    file: string,
    slug: string,
    path: string,
    field: unknown
): field is CvFieldConfig {
    if (!requireObject(errors, file, path, field, slug)) return false;

    validateOptionalString(errors, file, `${path}.label`, field.label, slug);
    requireNonEmptyString(errors, file, `${path}.value`, field.value, slug);
    validateOptionalString(errors, file, `${path}.href`, field.href, slug);

    return true;
}

function validateCvFields(
    errors: string[],
    file: string,
    slug: string,
    path: string,
    fields: unknown
): void {
    if (requireArray(errors, file, path, fields, slug)) {
        fields.forEach((field, index) => {
            validateCvField(errors, file, slug, `${path}[${index}]`, field);
        });
    }
}

function validateCvEducationItem(
    errors: string[],
    file: string,
    slug: string,
    path: string,
    item: unknown
): item is CvEducationItem {
    if (!requireObject(errors, file, path, item, slug)) return false;

    requireNonEmptyString(errors, file, `${path}.degree`, item.degree, slug);
    requireNonEmptyString(errors, file, `${path}.field`, item.field, slug);
    requireNonEmptyString(errors, file, `${path}.from`, item.from, slug);
    requireNonEmptyString(errors, file, `${path}.to`, item.to, slug);

    return true;
}

function validateCvExperienceItem(
    errors: string[],
    file: string,
    slug: string,
    path: string,
    item: unknown
): item is CvExperienceItem {
    if (!requireObject(errors, file, path, item, slug)) return false;

    requireNonEmptyString(errors, file, `${path}.organization`, item.organization, slug);
    requireNonEmptyString(errors, file, `${path}.role`, item.role, slug);
    requireNonEmptyString(errors, file, `${path}.year`, item.year, slug);

    return true;
}

function validateCvPublicationTag(
    errors: string[],
    file: string,
    slug: string,
    path: string,
    tag: unknown
): tag is CvPublicationTag {
    if (!requireObject(errors, file, path, tag, slug)) return false;

    requireNonEmptyString(errors, file, `${path}.label`, tag.label, slug);
    if (tag.accent !== undefined && typeof tag.accent !== 'boolean') {
        addError(errors, file, `${path}.accent`, 'expected boolean when provided.', slug);
    }

    return true;
}

function validateCvPublication(
    errors: string[],
    file: string,
    slug: string,
    path: string,
    publication: unknown
): publication is CvPublication {
    if (!requireObject(errors, file, path, publication, slug)) return false;

    requireNonEmptyString(errors, file, `${path}.authors`, publication.authors, slug);
    requireNonEmptyString(errors, file, `${path}.title`, publication.title, slug);
    requireNonEmptyString(errors, file, `${path}.venue`, publication.venue, slug);
    validateOptionalString(errors, file, `${path}.year`, publication.year, slug);
    validateOptionalString(errors, file, `${path}.note`, publication.note, slug);

    if (requireArray(errors, file, `${path}.tags`, publication.tags, slug)) {
        publication.tags.forEach((tag, index) => {
            validateCvPublicationTag(errors, file, slug, `${path}.tags[${index}]`, tag);
        });
    }

    return true;
}

function validateCvPublications(
    errors: string[],
    file: string,
    slug: string,
    path: string,
    publications: unknown
): void {
    if (requireArray(errors, file, path, publications, slug)) {
        publications.forEach((publication, index) => {
            validateCvPublication(errors, file, slug, `${path}[${index}]`, publication);
        });
    }
}

function validateEmbedPage(errors: string[], file: string, slug: string, page: UnknownRecord): void {
    validateEmbedSrc(errors, file, 'src', page.src, slug);
    validateOptionalString(errors, file, 'height', page.height, slug);
}

export function validatePageConfigErrors(
    slug: string,
    raw: unknown,
    file = defaultPageFile(slug)
): string[] {
    const errors: string[] = [];
    if (!requireObject(errors, file, '<root>', raw, slug)) return errors;

    validateBasePageFields(errors, file, slug, raw);

    switch (raw.type) {
        case 'about':
            validateAboutPage(errors, file, slug, raw);
            break;
        case 'publication':
            validatePublicationPage(errors, file, slug, raw);
            break;
        case 'text':
            validateTextPage(errors, file, slug, raw);
            break;
        case 'card':
            validateCardPage(errors, file, slug, raw);
            break;
        case 'cv':
            validateCvPage(errors, file, slug, raw);
            break;
        case 'embed':
            validateEmbedPage(errors, file, slug, raw);
            break;
        default:
            break;
    }

    return errors;
}

export function validatePageConfig(
    slug: string,
    raw: unknown,
    options: ContentValidationOptions = {}
): PageConfig | null {
    const errors = validatePageConfigErrors(slug, raw, options.file ?? defaultPageFile(slug));
    if (errors.length > 0) return null;
    return raw as PageConfig;
}

export function assertValidPageConfig(
    slug: string,
    raw: unknown,
    options: ContentValidationOptions = {}
): asserts raw is PageConfig {
    const errors = validatePageConfigErrors(slug, raw, options.file ?? defaultPageFile(slug));
    if (errors.length > 0) {
        throw new ContentValidationError(errors);
    }
}

export function validateNavigationPages(
    config: unknown,
    getPageConfig: PageConfigResolver,
    options: NavigationPagesValidationOptions = {}
): void {
    const configFile = options.configFile ?? DEFAULT_CONFIG_FILE;
    const pageFile = options.pageFile ?? defaultPageFile;
    const errors = validateSiteConfig(config, configFile);

    if (isRecord(config) && Array.isArray(config.navigation)) {
        config.navigation.forEach((item, index) => {
            if (!isRecord(item) || item.type !== 'page' || !isNonEmptyString(item.target)) return;

            const slug = item.target;
            const rawPageConfig = getPageConfig(slug);
            if (rawPageConfig == null) {
                addError(
                    errors,
                    configFile,
                    `navigation[${index}].target`,
                    `missing page config for slug "${slug}" at ${pageFile(slug)}.`
                );
                return;
            }

            errors.push(...validatePageConfigErrors(slug, rawPageConfig, pageFile(slug)));
        });
    }

    if (errors.length > 0) {
        throw new ContentValidationError(errors);
    }
}
