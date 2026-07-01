// Build-time GitHub stats. Fetched when the site builds (and so refreshed on the
// daily deploy). Falls back to null on any error/offline, so the build never breaks.

let cachedStars: number | null | undefined;

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

/** Sum stargazers across the user's own (non-fork) repositories. */
export async function getGithubStars(url?: string): Promise<number | null> {
    if (cachedStars !== undefined) return cachedStars;

    const user = extractGithubUsername(url);
    if (!user) {
        cachedStars = null;
        return null;
    }

    const headers: Record<string, string> = {
        Accept: 'application/vnd.github+json',
        'User-Agent': 'prism-site',
    };
    if (process.env.GITHUB_TOKEN) {
        headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

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
