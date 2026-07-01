import {
    BeakerIcon,
    BookOpenIcon,
    DocumentArrowDownIcon,
    DocumentTextIcon,
    FilmIcon,
    GlobeAltIcon,
    PresentationChartLineIcon,
} from '@heroicons/react/24/outline';
import { Publication } from '@/types/publication';
import { cn } from '@/lib/utils';

const GithubIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
);

export interface PublicationResource {
    href: string;
    label: string;
    className: string;
    icon?: React.ReactNode;
}

export function getPublicationResources(pub: Publication): PublicationResource[] {
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
            icon: <BookOpenIcon className="h-3 w-3" />,
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
        ...(pub.datasetUrl ? [{
            href: pub.datasetUrl,
            label: 'Data',
            className: 'bg-emerald-700 hover:bg-emerald-800',
            icon: <BeakerIcon className="h-3 w-3" />,
        }] : []),
        ...(pub.slidesUrl ? [{
            href: pub.slidesUrl,
            label: 'Slides',
            className: 'bg-violet-700 hover:bg-violet-800',
            icon: <PresentationChartLineIcon className="h-3 w-3" />,
        }] : []),
        ...(pub.videoUrl ? [{
            href: pub.videoUrl,
            label: 'Video',
            className: 'bg-amber-700 hover:bg-amber-800',
            icon: <FilmIcon className="h-3 w-3" />,
        }] : []),
        ...(pub.demoUrl ? [{
            href: pub.demoUrl,
            label: 'Demo',
            className: 'bg-orange-700 hover:bg-orange-800',
            icon: <GlobeAltIcon className="h-3 w-3" />,
        }] : []),
    ];
}

export function PublicationResourceBadge({ href, label, className, icon }: PublicationResource) {
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
