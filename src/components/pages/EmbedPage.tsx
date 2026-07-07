import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { EmbedPageConfig } from '@/types/page';

export default function EmbedPage({ config }: { config: EmbedPageConfig }) {
    let openLabel = 'Open in new tab';
    try {
        openLabel = `Open ${new URL(config.src).host}`;
    } catch {
        // relative/local src — keep the generic label
    }

    return (
        <section>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 mb-4">
                <div>
                    <h1 className="text-2xl font-serif font-bold text-primary">{config.title}</h1>
                    {config.description && (
                        <p className="text-sm text-neutral-600 dark:text-neutral-600 mt-1">{config.description}</p>
                    )}
                </div>
                <a
                    href={config.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-accent hover:text-accent-dark whitespace-nowrap"
                >
                    {openLabel}
                    <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                </a>
            </div>
            <div className="rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-700 shadow-sm bg-white dark:bg-neutral-900">
                <iframe
                    src={config.src}
                    title={config.title}
                    className="w-full"
                    style={{ height: config.height || '80vh' }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                />
            </div>
        </section>
    );
}
