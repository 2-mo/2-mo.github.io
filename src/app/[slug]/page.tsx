import { notFound } from 'next/navigation';
import { getPageConfig, getBibtexContent, getTextPageContent } from '@/lib/content';
import { getConfig } from '@/lib/config';
import { parseBibTeX } from '@/lib/bibtexParser';
import PublicationsList from '@/components/publications/PublicationsList';
import TextPage from '@/components/pages/TextPage';
import CardPage from '@/components/pages/CardPage';
import CvSheet from '@/components/pages/CvSheet';
import EmbedPage from '@/components/pages/EmbedPage';
import {
    BasePageConfig,
    PublicationPageConfig,
    TextPageConfig,
    CardPageConfig,
    CvPageConfig,
    EmbedPageConfig
} from '@/types/page';

import { Metadata } from 'next';

export function generateStaticParams() {
    const config = getConfig();
    return config.navigation
        .filter(nav => nav.type === 'page' && nav.target !== 'about') // 'about' is handled by root page
        .map(nav => ({
            slug: nav.target,
        }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const pageConfig = getPageConfig(slug) as BasePageConfig | null;

    if (!pageConfig) {
        return {};
    }

    return {
        title: pageConfig.title,
        description: pageConfig.description,
    };
}

export default async function DynamicPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const pageConfig = getPageConfig(slug) as BasePageConfig | null;

    if (!pageConfig) {
        notFound();
    }

    if (pageConfig.type === 'cv') {
        return (
            <div className="px-4 sm:px-6 lg:px-8 py-10">
                <CvSheet config={pageConfig as CvPageConfig} />
            </div>
        );
    }

    if (pageConfig.type === 'embed') {
        return (
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <EmbedPage config={pageConfig as EmbedPageConfig} />
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {pageConfig.type === 'publication' && (
                <PublicationPage config={pageConfig as PublicationPageConfig} />
            )}
            {pageConfig.type === 'text' && (
                <TextPageWrapper config={pageConfig as TextPageConfig} />
            )}
            {pageConfig.type === 'card' && (
                <CardPage config={pageConfig as CardPageConfig} />
            )}
        </div>
    );
}

function PublicationPage({ config }: { config: PublicationPageConfig }) {
    const bibtex = getBibtexContent(config.source);
    const publications = parseBibTeX(bibtex);
    return <PublicationsList config={config} publications={publications} />;
}

function TextPageWrapper({ config }: { config: TextPageConfig }) {
    const content = getTextPageContent(config);
    return <TextPage config={config} content={content} />;
}
