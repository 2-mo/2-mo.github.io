import { getJsonContent } from './content';

// Shape of the JSON produced by google_scholar_crawler/main.py (subset we use).
interface RawScholarPublication {
    num_citations?: number;
    bib?: { title?: string };
}

interface RawScholarData {
    citedby?: number;
    hindex?: number;
    updated?: string;
    publications?: Record<string, RawScholarPublication>;
}

export interface ScholarData {
    totalCitations: number;
    hIndex: number;
    updated?: string;
    /** Normalized publication title -> citation count, for per-paper matching. */
    byTitle: Map<string, number>;
}

/** Normalize a title for fuzzy matching: lowercase, strip punctuation/whitespace. */
export function normalizeTitle(title: string): string {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '');
}

let cached: ScholarData | null | undefined;

/**
 * Reads crawled Google Scholar data from a committed snapshot at
 * `content/gs_data.json`. Returns null when the file is absent or has no
 * citation data, so callers can render nothing rather than break the build.
 */
export function getScholarData(): ScholarData | null {
    if (cached !== undefined) return cached;

    const raw = getJsonContent<RawScholarData>('gs_data.json');
    if (!raw || typeof raw.citedby !== 'number') {
        cached = null;
        return cached;
    }

    const byTitle = new Map<string, number>();
    for (const pub of Object.values(raw.publications ?? {})) {
        const title = pub.bib?.title;
        if (title && typeof pub.num_citations === 'number') {
            byTitle.set(normalizeTitle(title), pub.num_citations);
        }
    }

    cached = {
        totalCitations: raw.citedby,
        hIndex: raw.hindex ?? 0,
        updated: raw.updated,
        byTitle,
    };
    return cached;
}
