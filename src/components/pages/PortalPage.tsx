'use client';

import { useEffect, useMemo, useState } from 'react';
import {
    ArrowTopRightOnSquareIcon,
    ClockIcon,
    FolderOpenIcon,
    StarIcon as StarOutlineIcon,
} from '@heroicons/react/24/outline';
import { StarIcon as StarSolidIcon } from '@heroicons/react/20/solid';
import { CardGroup, CardItem, CardPageConfig } from '@/types/page';

const FAVORITES_STORAGE_KEY = 'prism:polaris:favorites:v1';
const RECENT_STORAGE_KEY = 'prism:polaris:recent:v1';
const RECENT_LIMIT = 8;
const CATEGORY_ORDER = [
    '论文与投稿',
    '教程与指南',
    'AI 与开发',
    '文档与效率',
    '绘图与设计',
    '数据与学术动态',
    '系统与软件',
    '其他',
] as const;

interface PortalCategory {
    id: string;
    name: string;
    groups: CardGroup[];
    itemCount: number;
}

interface PortalEntry {
    item: CardItem;
    groupTitle: string;
    category: string;
}

function readStoredLinks(key: string): string[] {
    try {
        const stored = window.localStorage.getItem(key);
        if (!stored) return [];

        const parsed: unknown = JSON.parse(stored);
        return Array.isArray(parsed)
            ? parsed.filter((value): value is string => typeof value === 'string')
            : [];
    } catch {
        return [];
    }
}

function writeStoredLinks(key: string, links: string[]) {
    try {
        window.localStorage.setItem(key, JSON.stringify(links));
    } catch {
        // Storage may be disabled or full. The in-memory interaction still works.
    }
}

function buildCategories(config: CardPageConfig): PortalCategory[] {
    const sourceGroups: CardGroup[] = [
        ...(config.groups || []),
        ...(config.items?.length
            ? [{ title: '其他资源', category: '其他资源', items: config.items }]
            : []),
    ];
    const grouped = new Map<string, CardGroup[]>();

    sourceGroups.forEach((group) => {
        const category = group.category || '其他资源';
        const groups = grouped.get(category) || [];
        groups.push(group);
        grouped.set(category, groups);
    });

    const orderedNames = [
        ...CATEGORY_ORDER.filter((category) => grouped.has(category)),
        ...Array.from(grouped.keys()).filter(
            (category) => !CATEGORY_ORDER.includes(category as (typeof CATEGORY_ORDER)[number])
        ),
    ];

    return orderedNames.map((name, index) => {
        const groups = grouped.get(name) || [];
        return {
            id: `portal-category-${index + 1}`,
            name,
            groups,
            itemCount: groups.reduce((total, group) => total + group.items.length, 0),
        };
    });
}

function PortalCard({
    entry,
    compact = false,
    isFavorite,
    onToggleFavorite,
    onVisit,
}: {
    entry: PortalEntry;
    compact?: boolean;
    isFavorite: boolean;
    onToggleFavorite: (link: string) => void;
    onVisit: (link: string) => void;
}) {
    const { item } = entry;
    const link = item.link;
    const body = (
        <>
            <div className="flex min-w-0 items-start gap-1.5 pr-7">
                <h4 className="line-clamp-2 text-sm font-semibold leading-snug text-primary">
                    {item.title}
                </h4>
                {link && (
                    <ArrowTopRightOnSquareIcon
                        className="mt-0.5 h-3.5 w-3.5 shrink-0 text-neutral-400 transition-colors group-hover:text-accent dark:text-neutral-600"
                        aria-hidden="true"
                    />
                )}
            </div>
            {item.subtitle && (
                <p className="mt-1 text-xs font-medium text-accent">{item.subtitle}</p>
            )}
            {item.content && (
                <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-neutral-600 sm:line-clamp-1 dark:text-neutral-600">
                    {item.content}
                </p>
            )}
            {compact && (
                <p className="mt-2 truncate text-[11px] text-neutral-500 dark:text-neutral-600">
                    {entry.groupTitle}
                </p>
            )}
        </>
    );

    return (
        <article
            className={`group relative rounded-xl border border-neutral-200 bg-neutral-50/95 p-3 transition-colors hover:border-accent/45 hover:shadow-sm focus-within:border-accent/50 focus-within:ring-2 focus-within:ring-accent/25 dark:border-neutral-500 dark:bg-neutral-800/90 ${compact ? 'min-h-28 w-[17rem] shrink-0 snap-start' : 'min-h-28'}`}
        >
            {link ? (
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => onVisit(link)}
                    className="block h-full rounded-lg focus-visible:outline-none"
                    aria-label={`打开 ${item.title}（新窗口）`}
                >
                    {body}
                </a>
            ) : (
                <div>{body}</div>
            )}
            {link && (
                <button
                    type="button"
                    onClick={() => onToggleFavorite(link)}
                    aria-label={isFavorite ? `取消收藏 ${item.title}` : `收藏 ${item.title}`}
                    aria-pressed={isFavorite}
                    title={isFavorite ? '取消收藏' : '收藏'}
                    className="absolute right-2 top-2 z-10 rounded-full p-1.5 text-neutral-400 transition-colors hover:bg-accent/10 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 dark:text-neutral-600"
                >
                    {isFavorite ? (
                        <StarSolidIcon className="h-4 w-4 text-amber-500" aria-hidden="true" />
                    ) : (
                        <StarOutlineIcon className="h-4 w-4" aria-hidden="true" />
                    )}
                </button>
            )}
        </article>
    );
}

function PersonalShelf({
    id,
    title,
    entries,
    icon,
    favoriteLinks,
    onToggleFavorite,
    onVisit,
}: {
    id: string;
    title: string;
    entries: PortalEntry[];
    icon: 'favorite' | 'recent';
    favoriteLinks: string[];
    onToggleFavorite: (link: string) => void;
    onVisit: (link: string) => void;
}) {
    if (entries.length === 0) return null;

    const HeadingIcon = icon === 'favorite' ? StarSolidIcon : ClockIcon;

    return (
        <section aria-labelledby={id} className="space-y-3">
            <div className="flex items-center gap-2">
                <HeadingIcon
                    className={`h-4 w-4 ${icon === 'favorite' ? 'text-amber-500' : 'text-neutral-500 dark:text-neutral-600'}`}
                    aria-hidden="true"
                />
                <h2 id={id} className="font-serif text-lg font-bold text-primary">{title}</h2>
                <span className="text-xs text-neutral-500 dark:text-neutral-600">{entries.length}</span>
            </div>
            <div className="flex snap-x gap-3 overflow-x-auto pb-2 [scrollbar-width:thin]">
                {entries.map((entry) => (
                    <PortalCard
                        key={`${id}-${entry.item.link || entry.item.title}`}
                        entry={entry}
                        compact
                        isFavorite={Boolean(entry.item.link && favoriteLinks.includes(entry.item.link))}
                        onToggleFavorite={onToggleFavorite}
                        onVisit={onVisit}
                    />
                ))}
            </div>
        </section>
    );
}

export default function PortalPage({
    config,
    embedded = false,
}: {
    config: CardPageConfig;
    embedded?: boolean;
}) {
    const categories = useMemo(() => buildCategories(config), [config]);
    const allEntries = useMemo(
        () => categories.flatMap((category) => category.groups.flatMap((group) =>
            group.items.map((item) => ({ item, groupTitle: group.title, category: category.name }))
        )),
        [categories]
    );
    const entryByLink = useMemo(() => {
        const entries = new Map<string, PortalEntry>();
        allEntries.forEach((entry) => {
            if (entry.item.link) entries.set(entry.item.link, entry);
        });
        return entries;
    }, [allEntries]);
    const [favoriteLinks, setFavoriteLinks] = useState<string[]>([]);
    const [recentLinks, setRecentLinks] = useState<string[]>([]);
    const [storageReady, setStorageReady] = useState(false);

    useEffect(() => {
        const frame = window.requestAnimationFrame(() => {
            const validLinks = new Set(entryByLink.keys());
            setFavoriteLinks(readStoredLinks(FAVORITES_STORAGE_KEY).filter((link) => validLinks.has(link)));
            setRecentLinks(
                readStoredLinks(RECENT_STORAGE_KEY)
                    .filter((link) => validLinks.has(link))
                    .slice(0, RECENT_LIMIT)
            );
            setStorageReady(true);
        });

        return () => window.cancelAnimationFrame(frame);
    }, [entryByLink]);

    useEffect(() => {
        if (storageReady) writeStoredLinks(FAVORITES_STORAGE_KEY, favoriteLinks);
    }, [favoriteLinks, storageReady]);

    useEffect(() => {
        if (storageReady) writeStoredLinks(RECENT_STORAGE_KEY, recentLinks);
    }, [recentLinks, storageReady]);

    const favoriteEntries = favoriteLinks
        .map((link) => entryByLink.get(link))
        .filter((entry): entry is PortalEntry => Boolean(entry));
    const recentEntries = recentLinks
        .map((link) => entryByLink.get(link))
        .filter((entry): entry is PortalEntry => Boolean(entry));

    const toggleFavorite = (link: string) => {
        setFavoriteLinks((current) => current.includes(link)
            ? current.filter((item) => item !== link)
            : [...current, link]);
    };

    const recordVisit = (link: string) => {
        setRecentLinks((current) => [link, ...current.filter((item) => item !== link)].slice(0, RECENT_LIMIT));
    };

    return (
        <div>
            <header className={embedded ? 'mb-4' : 'mb-5'}>
                <h1 className={`${embedded ? 'text-2xl' : 'text-3xl'} mb-2 font-serif font-bold text-primary`}>
                    {config.title}
                </h1>
                {config.description && (
                    <p className="max-w-2xl text-sm leading-relaxed text-neutral-600 dark:text-neutral-600">
                        {config.description}
                    </p>
                )}
            </header>

            <nav
                aria-label="Polaris 分类快捷导航"
                className="sticky top-16 z-20 -mx-2 mb-7 bg-background/95 px-2 py-3 backdrop-blur-xl lg:top-20"
            >
                <div className="flex gap-2 overflow-x-auto rounded-xl border border-neutral-200 bg-white/80 p-2 shadow-sm [scrollbar-width:thin] dark:border-neutral-500 dark:bg-neutral-900/85">
                    {categories.map((category) => (
                        <a
                            key={category.id}
                            href={`#${category.id}`}
                            className="inline-flex shrink-0 items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-neutral-600 transition-colors hover:bg-accent/10 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 dark:text-neutral-600"
                        >
                            {category.name}
                            <span className="rounded-full bg-neutral-100 px-1.5 py-0.5 text-[11px] text-neutral-500 dark:bg-neutral-800 dark:text-neutral-600">
                                {category.itemCount}
                            </span>
                        </a>
                    ))}
                </div>
            </nav>

            {(favoriteEntries.length > 0 || recentEntries.length > 0) && (
                <div className="mb-10 space-y-7">
                    <PersonalShelf
                        id="portal-favorites"
                        title="收藏"
                        entries={favoriteEntries}
                        icon="favorite"
                        favoriteLinks={favoriteLinks}
                        onToggleFavorite={toggleFavorite}
                        onVisit={recordVisit}
                    />
                    <PersonalShelf
                        id="portal-recent"
                        title="最近访问"
                        entries={recentEntries}
                        icon="recent"
                        favoriteLinks={favoriteLinks}
                        onToggleFavorite={toggleFavorite}
                        onVisit={recordVisit}
                    />
                </div>
            )}

            <div className="space-y-12">
                {categories.map((category) => (
                    <section
                        key={category.id}
                        id={category.id}
                        aria-labelledby={`${category.id}-heading`}
                        className="scroll-mt-36 space-y-6 [content-visibility:auto] [contain-intrinsic-size:auto_640px]"
                    >
                        <div className="flex items-baseline gap-2 border-b border-neutral-200 pb-3 dark:border-neutral-400">
                            <h2 id={`${category.id}-heading`} className="font-serif text-xl font-bold text-primary sm:text-2xl">
                                {category.name}
                            </h2>
                            <span className="text-xs text-neutral-500 dark:text-neutral-600">{category.itemCount}</span>
                        </div>

                        {category.groups.map((group) => (
                            <div key={group.title} className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <FolderOpenIcon className="h-4 w-4 text-neutral-500 dark:text-neutral-600" aria-hidden="true" />
                                    <h3 className="font-serif text-base font-bold text-primary">{group.title}</h3>
                                    <span className="text-[11px] text-neutral-500 dark:text-neutral-600">{group.items.length}</span>
                                </div>
                                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                    {group.items.map((item, index) => {
                                        const entry = { item, groupTitle: group.title, category: category.name };
                                        return (
                                            <PortalCard
                                                key={`${group.title}-${item.link || item.title}-${index}`}
                                                entry={entry}
                                                isFavorite={Boolean(item.link && favoriteLinks.includes(item.link))}
                                                onToggleFavorite={toggleFavorite}
                                                onVisit={recordVisit}
                                            />
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </section>
                ))}
            </div>
        </div>
    );
}
