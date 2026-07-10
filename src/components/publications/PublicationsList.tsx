'use client';

import { useId, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import {
    MagnifyingGlassIcon,
    FunnelIcon,
    CalendarIcon,
    BookOpenIcon,
    DocumentTextIcon,
    CheckIcon
} from '@heroicons/react/24/outline';
import { Publication } from '@/types/publication';
import { PublicationPageConfig } from '@/types/page';
import { cn, morandiGradient } from '@/lib/utils';
import { getPublicationResources, PublicationResourceBadge } from './PublicationResources';

// Citation count with a wistful easter egg: click flips to ∞ and pops "if only…".
function CitationBadge({ count }: { count: number }) {
    const [flipped, setFlipped] = useState(false);
    return (
        <span className="relative inline-flex">
            <button
                type="button"
                onClick={() => {
                    setFlipped(true);
                    setTimeout(() => setFlipped(false), 1600);
                }}
                className="inline-flex items-center px-3 py-1 rounded-md text-xs font-medium bg-accent/10 text-accent border border-accent/20 transition-transform hover:scale-105 cursor-pointer"
            >
                Cited by {flipped ? '∞' : count}
            </button>
            <AnimatePresence>
                {flipped && (
                    <motion.span
                        initial={{ opacity: 0, y: 6, scale: 0.85 }}
                        animate={{ opacity: 1, y: -8, scale: 1 }}
                        exit={{ opacity: 0, y: -14, scale: 0.85 }}
                        className="absolute bottom-full left-1/2 -translate-x-1/2 whitespace-nowrap bg-neutral-800 text-white text-xs font-medium px-2.5 py-1 rounded-md shadow-lg pointer-events-none"
                    >
                        if only…
                        <span className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-neutral-800" />
                    </motion.span>
                )}
            </AnimatePresence>
        </span>
    );
}

interface PublicationsListProps {
    config: PublicationPageConfig;
    publications: Publication[];
    embedded?: boolean;
}

export default function PublicationsList({ config, publications, embedded = false }: PublicationsListProps) {
    const searchInputId = useId();
    const filtersId = useId();
    const resultsId = useId();
    const resultsStatusId = useId();
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedYear, setSelectedYear] = useState<number | 'all'>('all');
    const [selectedType, setSelectedType] = useState<string | 'all'>('all');
    const [showFilters, setShowFilters] = useState(false);
    const [expandedBibtexId, setExpandedBibtexId] = useState<string | null>(null);
    const [expandedAbstractId, setExpandedAbstractId] = useState<string | null>(null);
    const [copiedId, setCopiedId] = useState<string | null>(null);

    const copyBibtex = async (pub: Publication) => {
        try {
            await navigator.clipboard.writeText(pub.bibtex || '');
            setCopiedId(pub.id);
            setTimeout(() => setCopiedId((id) => (id === pub.id ? null : id)), 2000);
        } catch {
            // Clipboard API unavailable (e.g. non-secure context) — fail silently.
        }
    };

    // Clicking BibTeX toggles the panel; opening it also copies to the clipboard.
    const handleBibtexClick = (pub: Publication) => {
        if (expandedBibtexId === pub.id) {
            setExpandedBibtexId(null);
            return;
        }
        setExpandedBibtexId(pub.id);
        copyBibtex(pub);
    };

    // Extract unique years and types for filters
    const years = useMemo(() => {
        const uniqueYears = Array.from(new Set(publications.map(p => p.year)));
        return uniqueYears.sort((a, b) => b - a);
    }, [publications]);

    const types = useMemo(() => {
        const uniqueTypes = Array.from(new Set(publications.map(p => p.type)));
        return uniqueTypes.sort();
    }, [publications]);

    // Filter publications
    const filteredPublications = useMemo(() => {
        return publications.filter(pub => {
            const matchesSearch =
                pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                pub.authors.some(author => author.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
                pub.journal?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                pub.conference?.toLowerCase().includes(searchQuery.toLowerCase());

            const matchesYear = selectedYear === 'all' || pub.year === selectedYear;
            const matchesType = selectedType === 'all' || pub.type === selectedType;

            return matchesSearch && matchesYear && matchesType;
        });
    }, [publications, searchQuery, selectedYear, selectedType]);

    return (
        <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
        >
            <div className="mb-8">
                <h1 className={`${embedded ? "text-2xl" : "text-4xl"} font-serif font-bold text-primary mb-4`}>{config.title}</h1>
                {config.description && (
                    <p className={`${embedded ? "text-base" : "text-lg"} text-neutral-600 dark:text-neutral-600 max-w-2xl`}>
                        {config.description}
                    </p>
                )}
            </div>

            {/* Search and Filter Controls */}
            <div className="mb-8 space-y-4">
                {/* ... (keep existing controls) ... */}
                <div className="flex flex-col sm:flex-row gap-4">
                    <div className="relative flex-grow">
                        <label htmlFor={searchInputId} className="sr-only">Search publications</label>
                        <MagnifyingGlassIcon aria-hidden="true" className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-neutral-400 dark:text-neutral-600" />
                        <input
                            id={searchInputId}
                            type="search"
                            placeholder="Search publications..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            aria-controls={resultsId}
                            aria-describedby={resultsStatusId}
                            className="w-full pl-10 pr-4 py-2 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200"
                        />
                    </div>
                    <button
                        type="button"
                        onClick={() => setShowFilters(!showFilters)}
                        aria-expanded={showFilters}
                        aria-controls={filtersId}
                        className={cn(
                            "flex items-center justify-center px-4 py-2 rounded-lg border transition-all duration-200",
                            showFilters
                                ? "bg-accent text-white border-accent"
                                : "bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 text-neutral-600 hover:border-accent hover:text-accent"
                        )}
                    >
                        <FunnelIcon aria-hidden="true" className="h-5 w-5 mr-2" />
                        Filters
                    </button>
                </div>

                <div id={filtersId} hidden={!showFilters}>
                    <AnimatePresence>
                        {showFilters && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="overflow-hidden"
                            >
                                <div className="p-4 bg-neutral-50 dark:bg-neutral-800/50 rounded-lg border border-neutral-200 dark:border-neutral-800 flex flex-wrap gap-6">
                                {/* Year Filter */}
                                <fieldset className="space-y-2">
                                    <legend className="text-sm font-medium text-neutral-700 dark:text-neutral-700">
                                        <span className="flex items-center">
                                            <CalendarIcon aria-hidden="true" className="h-4 w-4 mr-1" /> Year
                                        </span>
                                    </legend>
                                    <div className="flex flex-wrap gap-2">
                                        <button
                                            type="button"
                                            onClick={() => setSelectedYear('all')}
                                            aria-pressed={selectedYear === 'all'}
                                            className={cn(
                                                "px-3 py-1 text-xs rounded-full transition-colors",
                                                selectedYear === 'all'
                                                    ? "bg-accent text-white"
                                                    : "bg-white dark:bg-neutral-800 text-neutral-600 hover:bg-neutral-100 dark:hover:bg-white/10"
                                            )}
                                        >
                                            All
                                        </button>
                                        {years.map(year => (
                                            <button
                                                key={year}
                                                type="button"
                                                onClick={() => setSelectedYear(year)}
                                                aria-pressed={selectedYear === year}
                                                className={cn(
                                                    "px-3 py-1 text-xs rounded-full transition-colors",
                                                    selectedYear === year
                                                        ? "bg-accent text-white"
                                                        : "bg-white dark:bg-neutral-800 text-neutral-600 hover:bg-neutral-100 dark:hover:bg-white/10"
                                                )}
                                            >
                                                {year}
                                            </button>
                                        ))}
                                    </div>
                                </fieldset>

                                {/* Type Filter */}
                                <fieldset className="space-y-2">
                                    <legend className="text-sm font-medium text-neutral-700 dark:text-neutral-700">
                                        <span className="flex items-center">
                                            <BookOpenIcon aria-hidden="true" className="h-4 w-4 mr-1" /> Type
                                        </span>
                                    </legend>
                                    <div className="flex flex-wrap gap-2">
                                        <button
                                            type="button"
                                            onClick={() => setSelectedType('all')}
                                            aria-pressed={selectedType === 'all'}
                                            className={cn(
                                                "px-3 py-1 text-xs rounded-full transition-colors",
                                                selectedType === 'all'
                                                    ? "bg-accent text-white"
                                                    : "bg-white dark:bg-neutral-800 text-neutral-600 hover:bg-neutral-100 dark:hover:bg-white/10"
                                            )}
                                        >
                                            All
                                        </button>
                                        {types.map(type => (
                                            <button
                                                key={type}
                                                type="button"
                                                onClick={() => setSelectedType(type)}
                                                aria-pressed={selectedType === type}
                                                className={cn(
                                                    "px-3 py-1 text-xs rounded-full capitalize transition-colors",
                                                    selectedType === type
                                                        ? "bg-accent text-white"
                                                        : "bg-white dark:bg-neutral-800 text-neutral-600 hover:bg-neutral-100 dark:hover:bg-white/10"
                                                )}
                                            >
                                                {type.replace('-', ' ')}
                                            </button>
                                        ))}
                                    </div>
                                </fieldset>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* Publications Grid */}
            <p id={resultsStatusId} className="sr-only" role="status" aria-live="polite" aria-atomic="true">
                {filteredPublications.length} {filteredPublications.length === 1 ? 'publication' : 'publications'} shown.
            </p>
            <div
                id={resultsId}
                role={filteredPublications.length > 0 ? 'list' : undefined}
                aria-label={filteredPublications.length > 0 ? 'Publications' : undefined}
                className="space-y-6"
            >
                {filteredPublications.length === 0 ? (
                    <div className="text-center py-12 text-neutral-500 dark:text-neutral-600">
                        No publications found matching your criteria.
                    </div>
                ) : (
                    filteredPublications.map((pub, index) => (
                        <motion.div
                            key={pub.id}
                            role="listitem"
                            initial={false}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.4) }}
                            className={cn(
                                "p-6 rounded-xl shadow-sm border hover:shadow-md transition-all duration-200",
                                embedded
                                    ? "bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800"
                                    : "bg-neutral-50/95 dark:bg-neutral-800/90 border-neutral-200 dark:border-neutral-700"
                            )}
                        >
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="w-full md:w-72 flex-shrink-0">
                                    <div
                                        className="aspect-[4/3] relative rounded-lg overflow-hidden bg-neutral-100 dark:bg-neutral-800"
                                        style={pub.preview ? undefined : { backgroundImage: morandiGradient(pub.id) }}
                                    >
                                        {pub.preview && (
                                            <Image
                                                src={`/papers/${pub.preview}`}
                                                alt={pub.title}
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            />
                                        )}
                                    </div>
                                </div>
                                <div className="flex-grow">
                                    <h3 className={`${embedded ? "text-lg" : "text-xl"} font-semibold text-primary mb-2 leading-tight`}>
                                        {pub.title}
                                    </h3>
                                    <p className={`${embedded ? "text-sm" : "text-base"} text-neutral-700 dark:text-neutral-600 mb-2`}>
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
                                    {!pub.venue && (
                                        <p className="text-sm font-medium text-neutral-800 dark:text-neutral-600 mb-3">
                                            {pub.journal || pub.conference} {pub.year}
                                        </p>
                                    )}

                                    {pub.summary && (
                                        <p className="text-sm text-neutral-700 dark:text-neutral-600 mb-3 leading-relaxed">
                                            <span className="font-semibold text-accent">TL;DR:</span> {pub.summary}
                                        </p>
                                    )}

                                    {pub.description && !pub.summary && (
                                        <p className="text-sm text-neutral-600 dark:text-neutral-600 mb-4 line-clamp-3">
                                            {pub.description}
                                        </p>
                                    )}

                                    <div className="flex flex-wrap items-center gap-2 mt-auto">
                                        {pub.venue && (
                                            <span className="inline-flex items-center px-3 py-1 rounded-md text-xs font-semibold bg-slate-800 text-white">
                                                {pub.venue} {pub.year}
                                            </span>
                                        )}
                                        {typeof pub.citations === 'number' && pub.citations > 0 && (
                                            <CitationBadge count={pub.citations} />
                                        )}
                                        {pub.awards?.map((award) => (
                                            <span key={award} className="inline-flex items-center px-3 py-1 rounded-md text-xs font-semibold bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-200">
                                                {award}
                                            </span>
                                        ))}
                                        {getPublicationResources(pub).map((resource) => (
                                            <PublicationResourceBadge key={resource.label} {...resource} />
                                        ))}
                                        {pub.abstract && (
                                            <button
                                                onClick={() => setExpandedAbstractId(expandedAbstractId === pub.id ? null : pub.id)}
                                                className={cn(
                                                    "inline-flex items-center px-3 py-1 rounded-md text-xs font-medium transition-colors",
                                                    expandedAbstractId === pub.id
                                                        ? "bg-accent text-white"
                                                        : "bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-700 border border-neutral-200 dark:border-neutral-600 hover:bg-accent hover:text-white hover:border-accent"
                                                )}
                                            >
                                                <DocumentTextIcon className="h-3 w-3 mr-1.5" />
                                                Abstract
                                            </button>
                                        )}
                                        {pub.bibtex && (
                                            <button
                                                onClick={() => handleBibtexClick(pub)}
                                                className={cn(
                                                    "inline-flex items-center px-3 py-1 rounded-md text-xs font-medium transition-colors",
                                                    expandedBibtexId === pub.id
                                                        ? "bg-accent text-white"
                                                        : "bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-700 border border-neutral-200 dark:border-neutral-600 hover:bg-accent hover:text-white hover:border-accent"
                                                )}
                                                title="Show BibTeX and copy to clipboard"
                                            >
                                                {copiedId === pub.id ? (
                                                    <>
                                                        <CheckIcon className="h-3 w-3 mr-1.5" />
                                                        Copied!
                                                    </>
                                                ) : (
                                                    <>
                                                        <BookOpenIcon className="h-3 w-3 mr-1.5" />
                                                        BibTeX
                                                    </>
                                                )}
                                            </button>
                                        )}
                                    </div>

                                    <AnimatePresence>
                                        {expandedAbstractId === pub.id && pub.abstract ? (
                                            <motion.div
                                                key="abstract"
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                className="overflow-hidden mt-4"
                                            >
                                                <div className="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-4 border border-neutral-200 dark:border-neutral-700">
                                                    <p className="text-sm text-neutral-600 dark:text-neutral-600 leading-relaxed">
                                                        {pub.abstract}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        ) : null}
                                        {expandedBibtexId === pub.id && pub.bibtex ? (
                                            <motion.div
                                                key="bibtex"
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                className="overflow-hidden mt-4"
                                            >
                                                <div className="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-4 border border-neutral-200 dark:border-neutral-700">
                                                    <pre className="text-xs text-neutral-600 dark:text-neutral-600 overflow-x-auto whitespace-pre-wrap font-mono">
                                                        {pub.bibtex}
                                                    </pre>
                                                </div>
                                            </motion.div>
                                        ) : null}
                                    </AnimatePresence>
                                </div>
                            </div>
                        </motion.div>
                    ))
                )}
            </div>
        </motion.div>
    );
}
