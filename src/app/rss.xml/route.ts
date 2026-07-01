import { getConfig } from '@/content/config';
import { getBibtexContent, getTomlContent } from '@/content/files';
import { parseBibTeX } from '@/publications/bibtexParser';
import { absoluteUrl } from '@/site/urls';

export const dynamic = 'force-static';

interface NewsContent {
    news?: Array<{
        date: string;
        content: string;
    }>;
}

interface FeedItem {
    title: string;
    description: string;
    link: string;
    date?: string;
    guid: string;
}

function escapeXml(value: string): string {
    return value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');
}

function buildRss(items: FeedItem[]): string {
    const config = getConfig();
    const now = new Date().toUTCString();

    return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escapeXml(config.site.title)}</title>
    <link>${absoluteUrl('/')}</link>
    <description>${escapeXml(config.site.description)}</description>
    <language>en</language>
    <lastBuildDate>${now}</lastBuildDate>
    ${items.map((item) => `
    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${escapeXml(item.link)}</link>
      <guid>${escapeXml(item.guid)}</guid>
      ${item.date ? `<pubDate>${new Date(item.date).toUTCString()}</pubDate>` : ''}
      <description>${escapeXml(item.description)}</description>
    </item>`).join('')}
  </channel>
</rss>`;
}

export function GET() {
    const news = getTomlContent<NewsContent>('news.toml')?.news || [];
    const publications = parseBibTeX(getBibtexContent('publications.bib'));

    const newsItems: FeedItem[] = news.map((item) => ({
        title: item.content,
        description: item.content,
        link: absoluteUrl('/'),
        date: item.date,
        guid: `news-${item.date}-${item.content}`,
    }));

    const publicationItems: FeedItem[] = publications
        .filter((publication) => publication.selected)
        .slice(0, 10)
        .map((publication) => ({
            title: publication.title,
            description: publication.summary || publication.description || publication.abstract || `${publication.venue || publication.conference || publication.journal || 'Publication'} ${publication.year}`,
            link: publication.projectUrl || publication.url || (publication.doi ? `https://doi.org/${publication.doi}` : absoluteUrl('/publications/')),
            date: `${publication.year}-01-01`,
            guid: `publication-${publication.id}`,
        }));

    const body = buildRss([...newsItems, ...publicationItems].slice(0, 20));

    return new Response(body, {
        headers: {
            'Content-Type': 'application/rss+xml; charset=utf-8',
        },
    });
}
