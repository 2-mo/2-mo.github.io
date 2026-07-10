'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    AcademicCapIcon,
    BookOpenIcon,
    DocumentTextIcon,
    EnvelopeIcon,
    HeartIcon,
    MapPinIcon,
} from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';
import { SiteConfig } from '@/content/config';

const OrcidIcon = ({ className }: { className?: string }) => (
    <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
    >
        <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.025-5.325 5.025h-3.919V7.416zm1.444 1.303v7.444h2.297c3.272 0 4.022-2.484 4.022-3.722 0-2.016-1.284-3.722-4.097-3.722h-2.222z" />
    </svg>
);

const GithubIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
    </svg>
);

interface ScholarStats {
    totalCitations: number;
    hIndex: number;
    updated?: string;
}

interface GithubStats {
    stars: number;
    url: string;
}

interface ProfileProps {
    author: SiteConfig['author'];
    social: SiteConfig['social'];
    features: SiteConfig['features'];
    headline?: string;
    researchInterests?: string[];
    scholarStats?: ScholarStats;
    githubStats?: GithubStats;
}

type ContactLink = {
    name: string;
    href: string;
    icon: React.ComponentType<{ className?: string }>;
    external?: boolean;
};

const iconLinkClass = 'inline-flex h-11 w-11 items-center justify-center rounded-md bg-neutral-100/80 text-neutral-600 transition-colors hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 dark:bg-neutral-800/80 dark:text-neutral-600';

export default function Profile({
    author,
    social,
    features,
    headline,
    researchInterests,
    scholarStats,
    githubStats,
}: ProfileProps) {
    const nameMatch = author.name.match(/^(.*?)\s*\(([^)]+)\)\s*$/);
    const nameLinePrimary = nameMatch?.[1] || author.name;
    const nameLineSecondary = nameMatch?.[2];
    const [hasLiked, setHasLiked] = useState(() => (
        features.enable_likes
        && typeof window !== 'undefined'
        && localStorage.getItem('jiale-website-user-liked') === 'true'
    ));
    const [showThanks, setShowThanks] = useState(false);

    const handleLike = () => {
        const nextLiked = !hasLiked;
        setHasLiked(nextLiked);

        if (nextLiked) {
            localStorage.setItem('jiale-website-user-liked', 'true');
            setShowThanks(true);
            window.setTimeout(() => setShowThanks(false), 1800);
        } else {
            localStorage.removeItem('jiale-website-user-liked');
            setShowThanks(false);
        }
    };

    const socialLinks: ContactLink[] = [
        ...(social.location_url ? [{ name: social.location || 'Location', href: social.location_url, icon: MapPinIcon, external: true }] : []),
        ...(social.google_scholar ? [{ name: 'Google Scholar', href: social.google_scholar, icon: AcademicCapIcon, external: true }] : []),
        ...(social.orcid ? [{ name: 'ORCID', href: social.orcid, icon: OrcidIcon, external: true }] : []),
        ...(social.github ? [{ name: 'GitHub', href: social.github, icon: GithubIcon, external: true }] : []),
        ...(social.linkedin ? [{ name: 'LinkedIn', href: social.linkedin, icon: LinkedinIcon, external: true }] : []),
    ];

    return (
        <div className="lg:sticky lg:top-24">
            <div data-spark className="mx-auto mb-3 h-32 w-32 overflow-hidden rounded-xl shadow-lg sm:mb-5 sm:h-44 sm:w-44 lg:h-64 lg:w-64 lg:rounded-2xl">
                <Image
                    src={author.avatar}
                    alt={author.name}
                    width={256}
                    height={256}
                    fetchPriority="high"
                    className="h-full w-full object-cover object-[32%_center]"
                    priority
                />
            </div>

            <div className="mb-4 text-center sm:mb-5">
                <h1 className="mb-2 select-none font-serif text-2xl font-bold leading-tight text-primary sm:text-3xl">
                    <span className="block">{nameLinePrimary}</span>
                    {nameLineSecondary && <span className="block">{nameLineSecondary}</span>}
                </h1>
                <p className="mb-1 text-base font-medium text-accent sm:text-lg">{author.title}</p>
                <p className="mx-auto max-w-sm text-sm leading-relaxed text-neutral-600 sm:text-base">{author.institution}</p>
                {headline && (
                    <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-neutral-700 dark:text-neutral-600">
                        {headline}
                    </p>
                )}
            </div>

            <div className="mb-4 grid grid-cols-3 gap-2 sm:mb-5">
                <a
                    href="#featured_publications"
                    className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-md bg-accent px-2 py-2 text-center text-xs font-semibold text-white transition-colors hover:bg-accent-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 dark:text-neutral-900 dark:hover:bg-accent-light"
                >
                    <BookOpenIcon className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <span>Selected Work</span>
                </a>
                <Link
                    href="/cv"
                    className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-md border border-neutral-200 bg-neutral-50 px-2 py-2 text-center text-xs font-semibold text-primary transition-colors hover:border-accent/50 hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 dark:border-neutral-700 dark:bg-neutral-800"
                >
                    <DocumentTextIcon className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <span>CV</span>
                </Link>
                <a
                    href={social.email ? `mailto:${social.email}` : '#'}
                    aria-disabled={!social.email}
                    className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-md border border-neutral-200 bg-neutral-50 px-2 py-2 text-center text-xs font-semibold text-primary transition-colors hover:border-accent/50 hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 dark:border-neutral-700 dark:bg-neutral-800"
                >
                    <EnvelopeIcon className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <span>Email</span>
                </a>
            </div>

            {(scholarStats || githubStats) && (
                <div className="mb-4 flex flex-wrap justify-center gap-2 sm:mb-5 sm:gap-3">
                    {scholarStats && (
                        <>
                            <a
                                href={social.google_scholar || '#'}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="min-w-[5rem] flex-1 rounded-md bg-neutral-100 py-2 text-center transition-shadow hover:shadow-md dark:bg-neutral-800"
                                aria-label="Google Scholar citations"
                            >
                                <div className="text-xl font-bold text-accent">{scholarStats.totalCitations.toLocaleString()}</div>
                                <div className="text-xs text-neutral-600 dark:text-neutral-600">Citations</div>
                            </a>
                            <a
                                href={social.google_scholar || '#'}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="min-w-[5rem] flex-1 rounded-md bg-neutral-100 py-2 text-center transition-shadow hover:shadow-md dark:bg-neutral-800"
                                aria-label="Google Scholar h-index"
                            >
                                <div className="text-xl font-bold text-accent">{scholarStats.hIndex}</div>
                                <div className="text-xs text-neutral-600 dark:text-neutral-600">h-index</div>
                            </a>
                        </>
                    )}
                    {githubStats && (
                        <a
                            href={githubStats.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="min-w-[5rem] flex-1 rounded-md bg-neutral-100 py-2 text-center transition-shadow hover:shadow-md dark:bg-neutral-800"
                            aria-label="GitHub stars"
                        >
                            <div className="text-xl font-bold text-accent">{githubStats.stars.toLocaleString()}</div>
                            <div className="text-xs text-neutral-600 dark:text-neutral-600">Stars</div>
                        </a>
                    )}
                </div>
            )}

            <div className="relative mb-4 flex flex-wrap justify-center gap-2 sm:mb-5">
                {socialLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                        <a
                            key={link.name}
                            href={link.href}
                            target={link.external ? '_blank' : undefined}
                            rel={link.external ? 'noopener noreferrer' : undefined}
                            className={iconLinkClass}
                            aria-label={link.name}
                            title={link.name}
                        >
                            <Icon className="h-5 w-5" />
                        </a>
                    );
                })}
            </div>

            {researchInterests && researchInterests.length > 0 && (
                <section className="mb-4 hidden rounded-md bg-neutral-100 p-4 lg:block dark:bg-neutral-800" aria-labelledby="research-interests-title">
                    <h2 id="research-interests-title" className="mb-3 font-semibold text-primary">Research Interests</h2>
                    <div className="space-y-2 text-sm text-neutral-700 dark:text-neutral-600">
                        {researchInterests.map((interest) => <div key={interest}>{interest}</div>)}
                    </div>
                </section>
            )}

            {features.enable_likes && (
                <div className="flex justify-center">
                    <div className="relative">
                        <button
                            type="button"
                            onClick={handleLike}
                            className={`flex min-h-11 items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors ${hasLiked
                                ? 'bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400'
                                : 'bg-neutral-100 text-neutral-700 hover:bg-red-50 hover:text-red-600 dark:bg-neutral-800 dark:text-neutral-600 dark:hover:bg-red-900/20 dark:hover:text-red-400'
                                }`}
                        >
                            {hasLiked ? <HeartSolidIcon className="h-4 w-4" /> : <HeartIcon className="h-4 w-4" />}
                            <span>{hasLiked ? 'Liked' : 'Like'}</span>
                        </button>
                        {showThanks && (
                            <div role="status" className="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-accent px-3 py-2 text-sm font-medium text-white shadow-lg">
                                Thanks
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
