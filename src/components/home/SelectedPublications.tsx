'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
    DocumentArrowDownIcon,
    DocumentTextIcon,
    GlobeAltIcon
} from '@heroicons/react/24/outline';
import { Publication } from '@/types/publication';
import { cn, morandiGradient } from '@/lib/utils';

const GithubIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
);

function ResourceBadge({ href, label, className, icon }: { href: string; label: string; className: string; icon?: React.ReactNode }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
                'inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold text-white shadow-sm transition-colors',
                className
            )}
        >
            {icon}
            {label}
        </a>
    );
}

function getResourceLinks(pub: Publication) {
    return [
        ...((pub.doi || pub.url) ? [{
            href: pub.doi ? `https://doi.org/${pub.doi}` : pub.url!,
            label: 'Paper',
            className: 'bg-slate-700 hover:bg-slate-800',
            icon: <DocumentTextIcon className="h-3 w-3" />,
        }] : []),
        ...(pub.arxivId ? [{
            href: `https://arxiv.org/abs/${pub.arxivId}`,
            label: 'arXiv',
            className: 'bg-[#b31b1b] hover:bg-[#911616]',
        }] : []),
        ...(pub.pdfUrl ? [{
            href: pub.pdfUrl,
            label: 'PDF',
            className: 'bg-rose-700 hover:bg-rose-800',
            icon: <DocumentArrowDownIcon className="h-3 w-3" />,
        }] : []),
        ...(pub.projectUrl ? [{
            href: pub.projectUrl,
            label: 'Project',
            className: 'bg-sky-700 hover:bg-sky-800',
            icon: <GlobeAltIcon className="h-3 w-3" />,
        }] : []),
        ...(pub.code ? [{
            href: pub.code,
            label: 'Code',
            className: 'bg-[#24292f] hover:bg-black',
            icon: <GithubIcon className="h-3 w-3" />,
        }] : []),
        ...(pub.demoUrl ? [{
            href: pub.demoUrl,
            label: 'Demo',
            className: 'bg-[#ff9d00] hover:bg-[#e88f00]',
        }] : []),
    ].slice(0, 4);
}

interface SelectedPublicationsProps {
    publications: Publication[];
    title?: string;
    enableOnePageMode?: boolean;
}

export default function SelectedPublications({ publications, title = 'Selected Publications', enableOnePageMode = false }: SelectedPublicationsProps) {
    return (
        <motion.section
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
        >
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
                {publications.map((pub, index) => {
                    const resourceLinks = getResourceLinks(pub);

                    return (
                        <motion.div
                            key={pub.id}
                            initial={false}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.4) }}
                            className="bg-neutral-50 dark:bg-neutral-800 p-4 rounded-lg shadow-sm border border-neutral-200 dark:border-[rgba(148,163,184,0.24)] hover:shadow-lg transition-all duration-200 hover:scale-[1.02]"
                        >
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="w-full md:w-52 flex-shrink-0">
                                    <div
                                        className="aspect-[4/3] relative rounded-md overflow-hidden bg-neutral-100 dark:bg-neutral-700"
                                        style={pub.preview ? undefined : { backgroundImage: morandiGradient(pub.id) }}
                                    >
                                        {pub.preview && (
                                            <Image
                                                src={`/papers/${pub.preview}`}
                                                alt={pub.title}
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 768px) 100vw, 208px"
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
                                            <span className="text-sm text-neutral-600 dark:text-neutral-500">{pub.journal || pub.conference}</span>
                                        )}
                                        {typeof pub.citations === 'number' && pub.citations > 0 && (
                                            <span className="text-xs text-accent">Cited by {pub.citations}</span>
                                        )}
                                        {resourceLinks.map((resource) => (
                                            <ResourceBadge key={resource.label} {...resource} />
                                        ))}
                                    </div>
                                    {pub.description && (
                                        <p className="text-sm text-neutral-500 dark:text-neutral-500 line-clamp-2">
                                            {pub.description}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </motion.section>
    );
}
