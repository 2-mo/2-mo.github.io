import type { MetadataRoute } from 'next';
import { getConfig } from '@/content/config';
import { absoluteUrl, getPagePath } from '@/site/urls';
import { getNotes, getNotePath } from '@/content/notes';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
    const config = getConfig();
    const lastModified = config.site.last_updated
        ? new Date(config.site.last_updated)
        : new Date();

    const pages: MetadataRoute.Sitemap = config.navigation
        .filter((item) => item.type === 'page')
        .map((item) => ({
            url: absoluteUrl(getPagePath(item.target)),
            lastModified,
            changeFrequency: item.target === 'about' ? 'monthly' : 'weekly',
            priority: item.target === 'about' ? 1 : 0.8,
        }));

    const notes = getNotes();
    const latestNoteDate = notes.map((note) => note.updated).sort().at(-1);
    return [
        ...pages,
        {
            url: absoluteUrl('/notes/'),
            lastModified: latestNoteDate ? new Date(latestNoteDate) : lastModified,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        ...notes.map((note) => ({
            url: absoluteUrl(getNotePath(note.slug)),
            lastModified: new Date(note.updated),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        })),
    ];
}
