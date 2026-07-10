export interface BasePageConfig {
    type: 'about' | 'publication' | 'card' | 'text' | 'cv' | 'embed';
    title: string;
    description?: string;
}

interface BaseAboutPageSectionConfig {
    id: string;
    source?: string;
    title?: string;
}

export interface MarkdownAboutPageSectionConfig extends BaseAboutPageSectionConfig {
    type: 'markdown';
}

export interface PublicationsAboutPageSectionConfig extends BaseAboutPageSectionConfig {
    type: 'publications';
    filter?: string;
    limit?: number;
}

export interface ListAboutPageSectionConfig extends BaseAboutPageSectionConfig {
    type: 'list';
}

export interface CardsAboutPageSectionConfig extends BaseAboutPageSectionConfig {
    type: 'cards';
    variant?: CardPageConfig['variant'];
    limit?: number;
}

export interface TimelineAboutPageSectionConfig extends BaseAboutPageSectionConfig {
    type: 'timeline';
    limit?: number;
}

export type AboutPageSectionConfig =
    | MarkdownAboutPageSectionConfig
    | PublicationsAboutPageSectionConfig
    | ListAboutPageSectionConfig
    | CardsAboutPageSectionConfig
    | TimelineAboutPageSectionConfig;

export interface AboutPageConfig extends BasePageConfig {
    type: 'about';
    profile?: {
        research_interests?: string[];
        [key: string]: unknown;
    };
    sections: AboutPageSectionConfig[];
}

export interface EmbedPageConfig extends BasePageConfig {
    type: 'embed';
    src: string;
    height?: string;
}

export interface CvPageConfig extends BasePageConfig {
    type: 'cv';
    pdf?: string;
    profile: CvProfileConfig;
    education: CvEducationItem[];
    experience: CvExperienceItem[];
    publications: CvPublicationsConfig;
    projects: string[];
    awards: string[];
    service: string;
    hobbies: string;
}

export interface CvFieldConfig {
    label: string;
    value: string;
    href?: string;
}

export interface CvProfileConfig {
    name: string;
    name_cn: string;
    photo: string;
    left: CvFieldConfig[];
    right: CvFieldConfig[];
    interests: string;
}

export interface CvEducationItem {
    degree: string;
    field: string;
    from: string;
    to: string;
}

export interface CvExperienceItem {
    organization: string;
    role: string;
    year: string;
}

export interface CvPublicationTag {
    label: string;
    accent?: boolean;
}

export interface CvPublication {
    authors: string;
    title: string;
    venue: string;
    year?: string;
    note?: string;
    tags: CvPublicationTag[];
}

export interface CvPublicationsConfig {
    selected_subtitle?: string;
    primary: CvPublication[];
    additional: CvPublication[];
}

export interface PublicationPageConfig extends BasePageConfig {
    type: 'publication';
    source: string;
}

export interface TextPageConfig extends BasePageConfig {
    type: 'text';
    source?: string;
    content?: string;
}

export interface CardItem {
    title: string;
    subtitle?: string;
    date?: string;
    content?: string;
    tags?: string[];
    link?: string;
    image?: string;
    logo?: string;
    status?: string;
    source?: string;
    repo?: string;
    metrics?: Array<{
        label: string;
        value: string;
    }>;
}

export interface CardGroup {
    title: string;
    items: CardItem[];
}

export interface CardPageConfig extends BasePageConfig {
    type: 'card';
    grouped?: boolean;
    variant?: 'default' | 'portal' | 'projects' | 'experience';
    items?: CardItem[];
    groups?: CardGroup[];
}

export type PageConfig =
    | AboutPageConfig
    | PublicationPageConfig
    | TextPageConfig
    | CardPageConfig
    | CvPageConfig
    | EmbedPageConfig;
