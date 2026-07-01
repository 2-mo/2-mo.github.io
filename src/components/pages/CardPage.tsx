'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowTopRightOnSquareIcon, CodeBracketIcon, FolderOpenIcon } from '@heroicons/react/24/outline';
import { CardItem, CardPageConfig } from '@/types/page';
import { morandiGradient } from '@/lib/utils';

export default function CardPage({ config, embedded = false }: { config: CardPageConfig; embedded?: boolean }) {
    const groupedMode = config.grouped === true || (config.groups?.length || 0) > 0;
    const portalMode = config.variant === 'portal';
    const showcaseMode = config.variant === 'showcase';

    const groupedItems = groupedMode
        ? (() => {
            const acc: Record<string, CardItem[]> = {};

            if (config.groups && config.groups.length > 0) {
                config.groups.forEach((group) => {
                    acc[group.title] = group.items || [];
                });
            }

            (config.items || []).forEach((item) => {
                const groupName = item.tags?.[0] || '其他';
                if (!acc[groupName]) {
                    acc[groupName] = [];
                }
                acc[groupName].push(item);
            });

            return acc;
        })()
        : null;

    const renderCard = (item: CardItem, index: number, groupName?: string) => {
        const subtitle = item.subtitle;
        const previewText = item.content?.trim();
        const tags = config.groups && groupName ? item.tags : (groupName ? item.tags?.filter(tag => tag !== groupName) : item.tags);
        const cardClassName = portalMode
            ? `group ${embedded ? "bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800" : "bg-neutral-50/95 dark:bg-neutral-800/90 border-neutral-200 dark:border-neutral-500"} ${embedded ? "p-2.5" : "p-3"} rounded-lg border hover:border-neutral-300 dark:hover:border-neutral-600 transition-all duration-200`
            : showcaseMode
                ? `group ${embedded ? "bg-white dark:bg-neutral-900" : "bg-neutral-50/95 dark:bg-neutral-800/90"} border border-neutral-200 dark:border-neutral-700 rounded-xl p-5 hover:border-accent/40 hover:shadow-md transition-all duration-200`
            : `${embedded ? "bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800" : "bg-neutral-50/95 dark:bg-neutral-800/90 border-neutral-200 dark:border-neutral-500"} ${embedded ? "p-4" : "p-6"} rounded-xl shadow-sm border hover:shadow-lg transition-all duration-200 hover:scale-[1.01]`;

        if (showcaseMode) {
            const projectLink = item.link || item.repo;
            const repoLink = item.repo || (item.link?.includes('github.com') ? item.link : undefined);
            const metrics = item.metrics || [];

            const inner = (
                <>
                    <div
                        className="mb-5 aspect-[16/9] relative overflow-hidden rounded-lg bg-neutral-100 dark:bg-neutral-800 border border-neutral-200/70 dark:border-neutral-700"
                        style={item.image ? undefined : { backgroundImage: morandiGradient(item.title) }}
                    >
                        {item.image ? (
                            <Image
                                src={item.image}
                                alt=""
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 420px"
                            />
                        ) : (
                            <div className="absolute inset-0 opacity-70 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.35),transparent_35%),linear-gradient(135deg,rgba(255,255,255,0.2),transparent)]" />
                        )}
                    </div>
                    <div className="flex items-start justify-between gap-4">
                        <div className="min-w-0">
                            <div className="flex flex-wrap items-center gap-2 mb-2">
                                {item.source && (
                                    <span className="text-[11px] font-semibold uppercase tracking-wide text-accent bg-accent/10 px-2 py-1 rounded">
                                        {item.source}
                                    </span>
                                )}
                                {item.status && (
                                    <span className="text-[11px] font-medium text-neutral-600 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded">
                                        {item.status}
                                    </span>
                                )}
                                {item.date && (
                                    <span className="text-[11px] font-medium text-neutral-500 bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded">
                                        {item.date}
                                    </span>
                                )}
                            </div>
                            <h3 className={`${embedded ? "text-lg" : "text-xl"} font-serif font-bold text-primary leading-snug`}>
                                {item.title}
                            </h3>
                            {subtitle && (
                                <p className="mt-1 text-sm font-medium text-accent">{subtitle}</p>
                            )}
                        </div>
                        {projectLink && (
                            <ArrowTopRightOnSquareIcon className="w-5 h-5 text-neutral-400 group-hover:text-accent transition-colors shrink-0" aria-hidden="true" />
                        )}
                    </div>
                    {item.content && (
                        <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-500 leading-relaxed">
                            {item.content}
                        </p>
                    )}
                    <div className="mt-5 flex flex-wrap items-center gap-2">
                        {tags?.map(tag => (
                            <span key={tag} className="text-xs text-neutral-600 dark:text-neutral-400 bg-white dark:bg-neutral-900 px-2 py-1 rounded-md border border-neutral-200 dark:border-neutral-700">
                                {tag}
                            </span>
                        ))}
                        {repoLink && (
                            <span className="inline-flex items-center gap-1 text-xs font-semibold text-neutral-700 dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-900 px-2 py-1 rounded-md border border-neutral-200 dark:border-neutral-700">
                                <CodeBracketIcon className="w-3.5 h-3.5" aria-hidden="true" />
                                GitHub
                            </span>
                        )}
                    </div>
                    {metrics.length > 0 && (
                        <div className="mt-5 grid grid-cols-3 gap-2 border-t border-neutral-200 dark:border-neutral-700 pt-4">
                            {metrics.slice(0, 3).map((metric) => (
                                <div key={`${metric.label}-${metric.value}`} className="min-w-0">
                                    <div className="text-[11px] uppercase tracking-wide text-neutral-500 dark:text-neutral-500 truncate">
                                        {metric.label}
                                    </div>
                                    <div className="mt-0.5 text-sm font-semibold text-primary truncate">
                                        {metric.value}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </>
            );

            return projectLink ? (
                <motion.a
                    key={`${groupName || 'default'}-${index}`}
                    href={projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={false}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.08 * index }}
                    className={`block ${cardClassName}`}
                >
                    {inner}
                </motion.a>
            ) : (
                <motion.div
                    key={`${groupName || 'default'}-${index}`}
                    initial={false}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.08 * index }}
                    className={cardClassName}
                >
                    {inner}
                </motion.div>
            );
        }

        const cardContent = (
            <>
                <div className="flex justify-between items-start gap-2 mb-1.5">
                    <div className="flex items-start gap-1.5 min-w-0">
                        <h3 className={`${embedded ? "text-sm" : portalMode ? "text-sm" : "text-xl"} font-semibold text-primary leading-snug break-words`}>{item.title}</h3>
                        {portalMode && item.link && (
                            <ArrowTopRightOnSquareIcon className="w-3 h-3 text-neutral-400 mt-0.5 shrink-0" aria-hidden="true" />
                        )}
                    </div>
                    {item.date && (
                        <span className="text-xs text-neutral-500 font-medium bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded shrink-0">
                            {item.date}
                        </span>
                    )}
                </div>
                {subtitle && (
                    <p className={`${embedded ? "text-xs" : portalMode ? "text-[11px]" : "text-base"} text-accent font-medium ${portalMode ? "mb-0" : "mb-3"}`}>{subtitle}</p>
                )}
                {portalMode && previewText && (
                    <div className="mt-0 max-h-0 opacity-0 overflow-hidden group-hover:mt-2 group-hover:max-h-20 group-hover:opacity-100 group-focus-within:mt-2 group-focus-within:max-h-20 group-focus-within:opacity-100 transition-all duration-200">
                        <p className="text-xs text-neutral-600 dark:text-neutral-600 leading-relaxed">{previewText}</p>
                    </div>
                )}
                {item.content && !portalMode && (
                    <p className={`${embedded ? "text-sm" : "text-base"} text-neutral-600 dark:text-neutral-600 leading-relaxed`}>
                        {item.content}
                    </p>
                )}
                {tags && tags.length > 0 && !portalMode && (
                    <div className="flex flex-wrap gap-2 mt-4">
                        {tags.map(tag => (
                            <span key={tag} className="text-xs text-neutral-500 bg-neutral-50 dark:bg-neutral-800/50 px-2 py-1 rounded border border-neutral-100 dark:border-neutral-800">
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
            </>
        );

        return item.link ? (
            <motion.a
                key={`${groupName || 'default'}-${index}`}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className={`block ${cardClassName}`}
            >
                {cardContent}
            </motion.a>
        ) : (
            <motion.div
                key={`${groupName || 'default'}-${index}`}
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className={cardClassName}
            >
                {cardContent}
            </motion.div>
        );
    };

    return (
        <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
        >
            <div className={embedded ? "mb-4" : portalMode ? "mb-4" : "mb-8"}>
                <h1 className={`${embedded ? "text-2xl" : portalMode ? "text-2xl" : showcaseMode ? "text-3xl" : "text-4xl"} font-serif font-bold text-primary mb-2`}>{config.title}</h1>
                {config.description && (
                    <p className={`${embedded ? "text-sm" : portalMode ? "text-sm" : "text-lg"} text-neutral-600 dark:text-neutral-600 max-w-2xl`}>
                        {config.description}
                    </p>
                )}
            </div>
            {groupedMode && groupedItems ? (
                <div className={portalMode ? "space-y-4" : "space-y-8"}>
                    {Object.entries(groupedItems).map(([groupName, items]) => (
                        <section key={groupName} className={portalMode ? "space-y-2" : "space-y-4"}>
                            <h2 className={`${embedded ? "text-base" : portalMode ? "text-base" : "text-2xl"} font-serif font-bold text-primary flex items-center gap-2`}>
                                {portalMode && <FolderOpenIcon className="w-4 h-4 text-neutral-500" aria-hidden="true" />}
                                {groupName}
                            </h2>
                            <div className={`grid ${portalMode ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" : showcaseMode ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"} ${embedded ? "gap-4" : portalMode ? "gap-2" : "gap-6"}`}>
                                {items.map((item, index) => renderCard(item, index, groupName))}
                            </div>
                        </section>
                    ))}
                </div>
            ) : (
                <div className={`grid ${portalMode ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" : showcaseMode ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"} ${embedded ? "gap-4" : portalMode ? "gap-2" : "gap-6"}`}>
                    {(config.items || []).map((item, index) => renderCard(item, index))}
                </div>
            )}
        </motion.div>
    );
}
