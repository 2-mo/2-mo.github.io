import { getConfig, SiteConfig } from '@/content/config';

export const SITE_URL = 'https://2-mo.github.io';

export function absoluteUrl(pathname = '/'): string {
    return new URL(pathname, SITE_URL).toString();
}

export function getPagePath(target: string): string {
    return target === 'about' ? '/' : `/${target}/`;
}

export function getNavigationPageUrls(config: SiteConfig = getConfig()): string[] {
    return config.navigation
        .filter((item) => item.type === 'page')
        .map((item) => absoluteUrl(getPagePath(item.target)));
}
