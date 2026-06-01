export interface BasePageConfig {
    type: 'about' | 'publication' | 'card' | 'text' | 'cv' | 'embed';
    title: string;
    description?: string;
}

export interface EmbedPageConfig extends BasePageConfig {
    type: 'embed';
    src: string;
    height?: string;
}

export interface CvPageConfig extends BasePageConfig {
    type: 'cv';
    pdf?: string;
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
}

export interface CardGroup {
    title: string;
    items: CardItem[];
}

export interface CardPageConfig extends BasePageConfig {
    type: 'card';
    grouped?: boolean;
    variant?: 'default' | 'portal';
    items?: CardItem[];
    groups?: CardGroup[];
}
