import type { MetadataRoute } from 'next';
import { getConfig } from '@/content/config';
import { absoluteUrl, getPagePath } from '@/site/urls';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
    const config = getConfig();
    const lastModified = config.site.last_updated
        ? new Date(config.site.last_updated)
        : new Date();

    return config.navigation
        .filter((item) => item.type === 'page')
        .map((item) => ({
            url: absoluteUrl(getPagePath(item.target)),
            lastModified,
            changeFrequency: item.target === 'about' ? 'monthly' : 'weekly',
            priority: item.target === 'about' ? 1 : 0.8,
        }));
}
