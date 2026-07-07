'use client';

import { motion } from 'framer-motion';
import type { TimelineItemModel } from '@/content/pages';

interface TimelineProps {
    items: TimelineItemModel[];
    title?: string;
}

export default function Timeline({ items, title = 'Highlights' }: TimelineProps) {
    if (items.length === 0) return null;

    return (
        <motion.section
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
        >
            <h2 className="text-2xl font-serif font-bold text-primary mb-4">{title}</h2>
            <div className="space-y-3">
                {items.map((item, index) => {
                    const content = (
                        <>
                            <span className="text-xs font-semibold text-accent bg-accent/10 px-2 py-1 rounded-md whitespace-nowrap">
                                {item.date}
                            </span>
                            <span className="min-w-0">
                                {item.title && (
                                    <span className="font-semibold text-primary">{item.title}: </span>
                                )}
                                <span>{item.content}</span>
                                {item.source && (
                                    <span className="ml-2 text-xs text-neutral-500 dark:text-neutral-600">{item.source}</span>
                                )}
                            </span>
                        </>
                    );

                    return item.href ? (
                        <a
                            key={`${item.date}-${index}`}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-start gap-3 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50/80 dark:bg-neutral-900/70 p-3 text-sm text-neutral-700 dark:text-neutral-600 transition-all duration-200 hover:border-accent/30 hover:shadow-sm"
                        >
                            {content}
                        </a>
                    ) : (
                        <div
                            key={`${item.date}-${index}`}
                            className="flex items-start gap-3 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50/80 dark:bg-neutral-900/70 p-3 text-sm text-neutral-700 dark:text-neutral-600"
                        >
                            {content}
                        </div>
                    );
                })}
            </div>
        </motion.section>
    );
}
