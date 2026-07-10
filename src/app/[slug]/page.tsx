import { notFound } from 'next/navigation';
import RenderablePage from '@/components/pages/RenderablePage';
import {
    getRenderablePageAsync,
    getRenderablePage,
    getStaticPageSlugs,
} from '@/content/pages';
import { absoluteUrl, getPagePath } from '@/site/urls';

import { Metadata } from 'next';

export function generateStaticParams() {
    return getStaticPageSlugs();
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const page = getRenderablePage(slug);

    if (!page) {
        return {};
    }

    return {
        title: page.config.title,
        description: page.config.description,
        alternates: {
            canonical: getPagePath(slug),
        },
        openGraph: {
            title: page.config.title,
            description: page.config.description,
            url: absoluteUrl(getPagePath(slug)),
            type: 'website',
        },
    };
}

export default async function DynamicPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const page = await getRenderablePageAsync(slug);

    if (!page) {
        notFound();
    }

    if (page.type === 'cv') {
        return (
            <div className="px-4 sm:px-6 lg:px-8 py-10">
                <RenderablePage page={page} />
            </div>
        );
    }

    if (page.type === 'embed') {
        return (
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <RenderablePage page={page} />
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <RenderablePage page={page} />
        </div>
    );
}
