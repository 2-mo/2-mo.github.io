// Build-time GitHub stats. Fetched when the site builds (and so refreshed on the
// daily deploy). Falls back to null on any error/offline, so the build never breaks.

let cachedStars: number | null | undefined;
const cachedRepoStats = new Map<string, GithubRepoStats | null>();

export interface GithubRepoStats {
    stars: number;
    forks: number;
    updatedAt: string;
}

/** Extract a GitHub username from either a github.com URL or a user.github.io URL. */
export function extractGithubUsername(url?: string): string | null {
    if (!url) return null;
    try {
        const u = new URL(url);
        if (u.hostname === 'github.com') {
            return u.pathname.split('/').filter(Boolean)[0] || null;
        }
        const m = u.hostname.match(/^([^.]+)\.github\.io$/);
        if (m) return m[1];
    } catch {
        // not a URL
    }
    return null;
}

export function githubProfileUrl(url?: string): string | null {
    const user = extractGithubUsername(url);
    return user ? `https://github.com/${user}` : null;
}

export function extractGithubRepo(url?: string): { owner: string; repo: string } | null {
    if (!url) return null;
    try {
        const u = new URL(url);
        if (u.hostname !== 'github.com') return null;
        const [owner, repo] = u.pathname.split('/').filter(Boolean);
        return owner && repo ? { owner, repo } : null;
    } catch {
        return null;
    }
}

function githubHeaders(): Record<string, string> {
    const headers: Record<string, string> = {
        Accept: 'application/vnd.github+json',
        'User-Agent': 'prism-site',
    };
    if (process.env.GITHUB_TOKEN) {
        headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    }
    return headers;
}

/** Sum stargazers across the user's own (non-fork) repositories. */
export async function getGithubStars(url?: string): Promise<number | null> {
    if (cachedStars !== undefined) return cachedStars;

    const user = extractGithubUsername(url);
    if (!user) {
        cachedStars = null;
        return null;
    }

    const headers = githubHeaders();

    try {
        let stars = 0;
        for (let page = 1; page <= 4; page++) {
            const res = await fetch(
                `https://api.github.com/users/${user}/repos?per_page=100&page=${page}&type=owner&sort=updated`,
                { headers }
            );
            if (!res.ok) {
                if (page === 1) {
                    cachedStars = null;
                    return null;
                }
                break;
            }
            const repos = await res.json();
            if (!Array.isArray(repos) || repos.length === 0) break;
            for (const r of repos) {
                if (!r.fork) stars += r.stargazers_count || 0;
            }
            if (repos.length < 100) break;
        }
        cachedStars = stars;
        return stars;
    } catch {
        cachedStars = null;
        return null;
    }
}

export async function getGithubRepoStats(url?: string): Promise<GithubRepoStats | null> {
    const repoRef = extractGithubRepo(url);
    if (!repoRef) return null;

    const cacheKey = `${repoRef.owner}/${repoRef.repo}`;
    if (cachedRepoStats.has(cacheKey)) {
        return cachedRepoStats.get(cacheKey) || null;
    }

    try {
        const response = await fetch(
            `https://api.github.com/repos/${repoRef.owner}/${repoRef.repo}`,
            { headers: githubHeaders(), cache: 'force-cache' }
        );
        if (!response.ok) {
            cachedRepoStats.set(cacheKey, null);
            return null;
        }

        const data = await response.json();
        const stats = {
            stars: Number(data.stargazers_count || 0),
            forks: Number(data.forks_count || 0),
            updatedAt: String(data.pushed_at || data.updated_at || ''),
        };
        cachedRepoStats.set(cacheKey, stats);
        return stats;
    } catch {
        cachedRepoStats.set(cacheKey, null);
        return null;
    }
}
