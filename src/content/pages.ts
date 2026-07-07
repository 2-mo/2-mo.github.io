import { parseBibTeX } from '@/publications/bibtexParser';
import { getConfig, SiteConfig } from '@/content/config';
import {
    getBibtexContent,
    getMarkdownContent,
    getPageConfig,
    getTextPageContent,
    getTomlContent,
} from '@/content/files';
import {
    AboutPageConfig,
    AboutPageSectionConfig,
    CardPageConfig,
    CardItem,
    CvPageConfig,
    EmbedPageConfig,
    PageConfig,
    PublicationPageConfig,
    TextPageConfig,
} from '@/types/page';
import { Publication } from '@/types/publication';
import {
    assertValidPageConfig,
    validateNavigationPages,
} from './validation';
import { getGithubRepoStats } from '@/integrations/github';

export interface NewsItemModel {
    date: string;
    content: string;
}

export interface MarkdownSectionModel {
    id: string;
    type: 'markdown';
    title?: string;
    source?: string;
    content: string;
}

export interface PublicationsSectionModel {
    id: string;
    type: 'publications';
    title?: string;
    source?: string;
    filter?: string;
    limit?: number;
    publications: Publication[];
}

export interface ListSectionModel {
    id: string;
    type: 'list';
    title?: string;
    source?: string;
    items: NewsItemModel[];
}

export interface CardsSectionModel {
    id: string;
    type: 'cards';
    title?: string;
    source?: string;
    config: CardPageConfig;
}

export interface TimelineItemModel {
    date: string;
    title?: string;
    content: string;
    href?: string;
    source?: string;
    kind?: string;
}

export interface TimelineSectionModel {
    id: string;
    type: 'timeline';
    title?: string;
    source?: string;
    items: TimelineItemModel[];
}

export type AboutSectionModel =
    | MarkdownSectionModel
    | PublicationsSectionModel
    | ListSectionModel
    | CardsSectionModel
    | TimelineSectionModel;

export interface AboutPageModel {
    id: string;
    type: 'about';
    config: AboutPageConfig;
    sections: AboutSectionModel[];
}

export interface PublicationPageModel {
    id: string;
    type: 'publication';
    config: PublicationPageConfig;
    publications: Publication[];
}

export interface TextPageModel {
    id: string;
    type: 'text';
    config: TextPageConfig;
    content: string;
}

export interface CardPageModel {
    id: string;
    type: 'card';
    config: CardPageConfig;
}

export interface CvPageModel {
    id: string;
    type: 'cv';
    config: CvPageConfig;
}

export interface EmbedPageModel {
    id: string;
    type: 'embed';
    config: EmbedPageConfig;
}

export type RenderablePageModel =
    | AboutPageModel
    | PublicationPageModel
    | TextPageModel
    | CardPageModel
    | CvPageModel
    | EmbedPageModel;

export interface HomePageModel {
    onePageMode: boolean;
    aboutConfig: AboutPageConfig | null;
    researchInterests?: string[];
    pages: RenderablePageModel[];
}

export type StaticPageSlug = {
    slug: string;
};

interface NewsContent {
    news?: NewsItemModel[];
}

interface TimelineContent {
    items?: TimelineItemModel[];
}

function assertNever(value: never): never {
    throw new Error(`Unsupported page type: ${JSON.stringify(value)}`);
}

function loadPublications(source: string): Publication[] {
    return parseBibTeX(getBibtexContent(source));
}

function applyItemLimit<T extends { items?: CardItem[]; groups?: Array<{ title: string; items: CardItem[] }> }>(
    config: T,
    limit?: number
): T {
    if (!limit) return config;

    return {
        ...config,
        items: config.items?.slice(0, limit),
        groups: config.groups?.map(group => ({
            ...group,
            items: group.items.slice(0, limit),
        })),
    };
}

function loadSection(section: AboutPageSectionConfig): AboutSectionModel {
    switch (section.type) {
        case 'markdown':
            return {
                ...section,
                content: section.source ? getMarkdownContent(section.source) : '',
            };
        case 'publications': {
            const allPublications = loadPublications(section.source ?? 'publications.bib');
            const publications = section.filter === 'selected'
                ? allPublications.filter(publication => publication.selected)
                : allPublications;

            return {
                ...section,
                publications: publications.slice(0, section.limit || 5),
            };
        }
        case 'list': {
            const newsData = section.source ? getTomlContent<NewsContent>(section.source) : null;

            return {
                ...section,
                items: newsData?.news || [],
            };
        }
        case 'cards': {
            const cardConfig = section.source
                ? getTomlContent<CardPageConfig>(section.source)
                : null;
            const config = applyItemLimit({
                type: 'card' as const,
                title: section.title || cardConfig?.title || '',
                description: cardConfig?.description,
                grouped: cardConfig?.grouped,
                variant: section.variant || cardConfig?.variant,
                items: cardConfig?.items || [],
                groups: cardConfig?.groups,
            }, section.limit);

            return {
                ...section,
                config,
            };
        }
        case 'timeline': {
            const timelineData = section.source ? getTomlContent<TimelineContent>(section.source) : null;
            const items = timelineData?.items || [];

            return {
                ...section,
                items: section.limit ? items.slice(0, section.limit) : items,
            };
        }
        default:
            return assertNever(section);
    }
}

export function getAboutSections(sections: AboutPageSectionConfig[] = []): AboutSectionModel[] {
    return sections.map(loadSection);
}

function getValidatedPageConfig(slug: string): PageConfig | null {
    const rawConfig = getPageConfig<unknown>(slug);
    if (!rawConfig) return null;

    assertValidPageConfig(slug, rawConfig);
    return rawConfig;
}

export function getRenderablePage(slug: string): RenderablePageModel | null {
    const pageConfig = getValidatedPageConfig(slug);

    if (!pageConfig) {
        return null;
    }

    switch (pageConfig.type) {
        case 'about':
            return {
                id: slug,
                type: 'about',
                config: pageConfig,
                sections: getAboutSections(pageConfig.sections || []),
            };
        case 'publication':
            return {
                id: slug,
                type: 'publication',
                config: pageConfig,
                publications: loadPublications(pageConfig.source),
            };
        case 'text':
            return {
                id: slug,
                type: 'text',
                config: pageConfig,
                content: getTextPageContent(pageConfig),
            };
        case 'card':
            return {
                id: slug,
                type: 'card',
                config: pageConfig,
            };
        case 'cv':
            return {
                id: slug,
                type: 'cv',
                config: pageConfig,
            };
        case 'embed':
            return {
                id: slug,
                type: 'embed',
                config: pageConfig,
            };
        default:
            return assertNever(pageConfig);
    }
}

async function enrichProjectsConfig(config: CardPageConfig): Promise<CardPageConfig> {
    if (config.variant !== 'projects') return config;

    const enrichItem = async (item: CardItem): Promise<CardItem> => {
        const stats = await getGithubRepoStats(item.repo);
        if (!stats) return item;

        const metrics = new Map((item.metrics || []).map((metric) => [metric.label, metric.value]));
        metrics.set('Stars', String(stats.stars));
        metrics.set('Forks', String(stats.forks));
        if (stats.updatedAt) metrics.set('Updated', stats.updatedAt.slice(0, 10));

        return {
            ...item,
            metrics: Array.from(metrics, ([label, value]) => ({ label, value })),
        };
    };

    const items = config.items
        ? await Promise.all(config.items.map(enrichItem))
        : config.items;
    const groups = config.groups
        ? await Promise.all(config.groups.map(async (group) => ({
            ...group,
            items: await Promise.all(group.items.map(enrichItem)),
        })))
        : config.groups;

    return { ...config, items, groups };
}

async function enrichAboutSections(sections: AboutSectionModel[]): Promise<AboutSectionModel[]> {
    return Promise.all(sections.map(async (section) => {
        if (section.type !== 'cards') return section;

        return {
            ...section,
            config: await enrichProjectsConfig(section.config),
        };
    }));
}

export async function getRenderablePageAsync(slug: string): Promise<RenderablePageModel | null> {
    const page = getRenderablePage(slug);
    if (!page) return null;

    if (page.type === 'about') {
        return {
            ...page,
            sections: await enrichAboutSections(page.sections),
        };
    }

    if (page.type === 'card') {
        return {
            ...page,
            config: await enrichProjectsConfig(page.config),
        };
    }

    return page;
}

export function getOnePageModels(config: SiteConfig = getConfig()): RenderablePageModel[] {
    validateNavigationPages(config, getPageConfig);

    return config.navigation
        .filter(item => item.type === 'page')
        .map(item => getRenderablePage(item.target))
        .filter((page): page is RenderablePageModel => page !== null);
}

export async function getOnePageModelsAsync(config: SiteConfig = getConfig()): Promise<RenderablePageModel[]> {
    validateNavigationPages(config, getPageConfig);

    const pages = await Promise.all(
        config.navigation
            .filter(item => item.type === 'page')
            .map(item => getRenderablePageAsync(item.target))
    );

    return pages.filter((page): page is RenderablePageModel => page !== null);
}

export function getHomePageModel(config: SiteConfig = getConfig()): HomePageModel {
    validateNavigationPages(config, getPageConfig);

    const onePageMode = config.features.enable_one_page_mode === true;
    const aboutPage = getRenderablePage('about');
    const aboutConfig = aboutPage?.type === 'about' ? aboutPage.config : null;

    return {
        onePageMode,
        aboutConfig,
        researchInterests: aboutConfig?.profile?.research_interests,
        pages: onePageMode
            ? getOnePageModels(config)
            : aboutPage
                ? [aboutPage]
                : [],
    };
}

export async function getHomePageModelAsync(config: SiteConfig = getConfig()): Promise<HomePageModel> {
    validateNavigationPages(config, getPageConfig);

    const onePageMode = config.features.enable_one_page_mode === true;
    const aboutPage = await getRenderablePageAsync('about');
    const aboutConfig = aboutPage?.type === 'about' ? aboutPage.config : null;

    return {
        onePageMode,
        aboutConfig,
        researchInterests: aboutConfig?.profile?.research_interests,
        pages: onePageMode
            ? await getOnePageModelsAsync(config)
            : aboutPage
                ? [aboutPage]
                : [],
    };
}

export function getStaticPageSlugs(config: SiteConfig = getConfig()): StaticPageSlug[] {
    validateNavigationPages(config, getPageConfig);

    return config.navigation
        .filter(nav => nav.type === 'page' && nav.target !== 'about')
        .map(nav => ({
            slug: nav.target,
        }));
}
