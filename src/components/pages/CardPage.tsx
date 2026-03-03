'use client';

import { motion } from 'framer-motion';
import { ExternalLink, FolderOpen } from 'lucide-react';
import { CardItem, CardPageConfig } from '@/types/page';

export default function CardPage({ config, embedded = false }: { config: CardPageConfig; embedded?: boolean }) {
    const groupedMode = config.grouped === true || (config.groups?.length || 0) > 0;
    const portalMode = config.variant === 'portal';

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
            : `${embedded ? "bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800" : "bg-neutral-50/95 dark:bg-neutral-800/90 border-neutral-200 dark:border-neutral-500"} ${embedded ? "p-4" : "p-6"} rounded-xl shadow-sm border hover:shadow-lg transition-all duration-200 hover:scale-[1.01]`;

        const cardContent = (
            <>
                <div className="flex justify-between items-start gap-2 mb-1.5">
                    <div className="flex items-start gap-1.5 min-w-0">
                        <h3 className={`${embedded ? "text-sm" : portalMode ? "text-sm" : "text-xl"} font-semibold text-primary leading-snug break-words`}>{item.title}</h3>
                        {portalMode && item.link && (
                            <ExternalLink className="w-3 h-3 text-neutral-400 mt-0.5 shrink-0" aria-hidden="true" />
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
                <h1 className={`${embedded ? "text-2xl" : portalMode ? "text-2xl" : "text-4xl"} font-serif font-bold text-primary mb-2`}>{config.title}</h1>
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
                                {portalMode && <FolderOpen className="w-4 h-4 text-neutral-500" aria-hidden="true" />}
                                {groupName}
                            </h2>
                            <div className={`grid ${portalMode ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" : "grid-cols-1"} ${embedded ? "gap-4" : portalMode ? "gap-2" : "gap-6"}`}>
                                {items.map((item, index) => renderCard(item, index, groupName))}
                            </div>
                        </section>
                    ))}
                </div>
            ) : (
                <div className={`grid ${portalMode ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" : "grid-cols-1"} ${embedded ? "gap-4" : portalMode ? "gap-2" : "gap-6"}`}>
                    {(config.items || []).map((item, index) => renderCard(item, index))}
                </div>
            )}
        </motion.div>
    );
}
