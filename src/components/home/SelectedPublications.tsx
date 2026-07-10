import Image from 'next/image';
import Link from 'next/link';
import { Publication } from '@/types/publication';
import { morandiGradient } from '@/lib/utils';
import { getPublicationResources, PublicationResourceBadge } from '@/components/publications/PublicationResources';

interface SelectedPublicationsProps {
    publications: Publication[];
    title?: string;
    enableOnePageMode?: boolean;
}

export default function SelectedPublications({ publications, title = 'Selected Publications', enableOnePageMode = false }: SelectedPublicationsProps) {
    return (
        <section>
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-serif font-bold text-primary">{title}</h2>
                <Link
                    href={enableOnePageMode ? "/#publications" : "/publications"}
                    prefetch={true}
                    className="text-accent hover:text-accent-dark text-sm font-medium transition-all duration-200 rounded hover:bg-accent/10 hover:shadow-sm"
                >
                    View All →
                </Link>
            </div>
            <div className="space-y-4">
                {publications.map((pub) => {
                    const resourceLinks = getPublicationResources(pub).slice(0, 5);
                    const shortDescription = pub.summary || pub.description;

                    return (
                        <div
                            key={pub.id}
                            className="bg-neutral-50 dark:bg-neutral-800 p-4 rounded-lg shadow-sm border border-neutral-200 dark:border-[rgba(148,163,184,0.24)] hover:shadow-lg transition-all duration-200 hover:scale-[1.02]"
                        >
                            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                                <div className="w-full md:w-72 flex-shrink-0">
                                    <div
                                        className="aspect-video relative rounded-md overflow-hidden bg-neutral-100 dark:bg-neutral-700"
                                        style={pub.preview ? undefined : { backgroundImage: morandiGradient(pub.id) }}
                                    >
                                        {pub.preview && (
                                            <Image
                                                src={`/papers/${pub.preview}`}
                                                alt={pub.title}
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 768px) 100vw, 288px"
                                            />
                                        )}
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-semibold text-primary mb-2 leading-tight">
                                        {pub.title}
                                    </h3>
                                    <p className="text-sm text-neutral-700 dark:text-neutral-600 mb-1">
                                        {pub.authors.map((author, idx) => (
                                            <span key={idx}>
                                                <span className={`${author.isHighlighted ? 'font-semibold text-accent' : 'text-neutral-700 dark:text-neutral-600'}`}>
                                                    {author.name}
                                                </span>
                                                {author.isCoAuthor && (
                                                    <sup className={`ml-0 ${author.isHighlighted ? 'text-accent' : 'text-neutral-700 dark:text-neutral-600'}`}>†</sup>
                                                )}
                                                {author.isCorresponding && (
                                                    <sup className={`ml-0 ${author.isHighlighted ? 'text-accent' : 'text-neutral-700 dark:text-neutral-600'}`}>*</sup>
                                                )}
                                                {idx < pub.authors.length - 1 && ', '}
                                            </span>
                                        ))}
                                    </p>
                                    <div className="flex flex-wrap items-center gap-2 mb-2">
                                        {pub.venue ? (
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-semibold bg-slate-800 text-white">
                                                {pub.venue} {pub.year}
                                            </span>
                                        ) : (
                                            <span className="text-sm text-neutral-600 dark:text-neutral-600">{pub.journal || pub.conference}</span>
                                        )}
                                        {typeof pub.citations === 'number' && pub.citations > 0 && (
                                            <span className="text-xs text-accent">Cited by {pub.citations}</span>
                                        )}
                                        {pub.awards?.map((award) => (
                                            <span key={award} className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-semibold bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-200">
                                                {award}
                                            </span>
                                        ))}
                                        {resourceLinks.map((resource) => (
                                            <PublicationResourceBadge key={resource.label} {...resource} />
                                        ))}
                                    </div>
                                    {shortDescription && (
                                        <p className="text-sm text-neutral-500 dark:text-neutral-600 line-clamp-2">
                                            {pub.summary ? `TL;DR: ${shortDescription}` : shortDescription}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
