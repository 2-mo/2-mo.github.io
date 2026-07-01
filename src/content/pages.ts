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

export type AboutSectionModel =
    | MarkdownSectionModel
    | PublicationsSectionModel
    | ListSectionModel;

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

function assertNever(value: never): never {
    throw new Error(`Unsupported page type: ${JSON.stringify(value)}`);
}

function loadPublications(source: string): Publication[] {
    return parseBibTeX(getBibtexContent(source));
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

export function getOnePageModels(config: SiteConfig = getConfig()): RenderablePageModel[] {
    validateNavigationPages(config, getPageConfig);

    return config.navigation
        .filter(item => item.type === 'page')
        .map(item => getRenderablePage(item.target))
        .filter((page): page is RenderablePageModel => page !== null);
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

export function getStaticPageSlugs(config: SiteConfig = getConfig()): StaticPageSlug[] {
    validateNavigationPages(config, getPageConfig);

    return config.navigation
        .filter(nav => nav.type === 'page' && nav.target !== 'about')
        .map(nav => ({
            slug: nav.target,
        }));
}
