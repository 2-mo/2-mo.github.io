import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getNote, getNotes, getNotePath } from '@/content/notes';
import { getNoteHeadings } from '@/lib/markdown';
import { absoluteUrl } from '@/site/urls';
import NoteBody from '@/components/pages/NoteBody';
import 'katex/dist/katex.min.css';

export const dynamicParams = false;

export function generateStaticParams() {
    return getNotes().map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const note = getNote(slug);
    if (!note) return {};
    return {
        title: note.title,
        description: note.summary,
        alternates: { canonical: getNotePath(slug) },
        openGraph: {
            type: 'article', title: note.title, description: note.summary,
            url: absoluteUrl(getNotePath(slug)), locale: 'zh_CN',
            publishedTime: `${note.published}T00:00:00+08:00`,
            modifiedTime: `${note.updated}T00:00:00+08:00`,
        },
    };
}

export default async function NotePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const note = getNote(slug);
    if (!note) notFound();
    const headings = getNoteHeadings(note.content);
    const related = getNotes().filter((entry) => entry.slug !== slug);

    return (
        <div lang="zh-CN" className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
            <Link href="/notes/" className="text-sm text-accent hover:underline focus-visible:outline-2 focus-visible:outline-accent">← 全部笔记</Link>
            <div className="mt-8 grid min-w-0 gap-12 lg:grid-cols-[minmax(0,1fr)_13rem]">
                <article className="min-w-0 max-w-3xl">
                    <header className="mb-8">
                        <p className="mb-4 text-xs font-semibold tracking-widest text-accent">{note.category}</p>
                        <h1 className="text-3xl font-bold leading-snug tracking-tight text-primary sm:text-4xl">{note.title}</h1>
                        <p className="mt-5 text-base leading-8 text-neutral-600 sm:text-lg">{note.summary}</p>
                        <p className="mt-5 text-xs leading-6 text-neutral-500">原始笔记 {note.period} <span aria-hidden="true">·</span> 修订于 <time dateTime={note.updated}>{note.updated}</time></p>
                    </header>
                    <details className="mb-8 rounded-lg border border-neutral-200 px-4 py-3 dark:border-neutral-800 lg:hidden">
                        <summary className="cursor-pointer text-sm font-medium text-primary">文章目录</summary>
                        <nav aria-label="文章目录" className="mt-3 flex flex-col gap-3 text-sm text-neutral-600">
                            {headings.map(({ id, title }) => <a key={id} href={`#${id}`} className="hover:text-accent">{title}</a>)}
                        </nav>
                    </details>
                    <NoteBody content={note.content} />
                    <footer className="mt-12 border-t border-neutral-200 pt-8 dark:border-neutral-800">
                        <h2 className="mb-4 text-sm font-semibold text-primary">继续阅读</h2>
                        <div className="flex flex-col gap-4 text-sm">
                            {related.map((entry) => <Link key={entry.slug} href={getNotePath(entry.slug)} className="text-accent hover:underline">{entry.title} →</Link>)}
                        </div>
                    </footer>
                </article>
                <aside className="hidden lg:block">
                    <nav aria-label="文章目录" className="sticky top-28 max-h-[calc(100vh-8rem)] overflow-y-auto border-l border-neutral-200 pl-5 pr-2 dark:border-neutral-800">
                        <p className="mb-4 text-xs font-semibold tracking-widest text-neutral-500">本篇内容</p>
                        <ul className="space-y-3 text-sm leading-6 text-neutral-600">
                            {headings.map(({ id, title }) => <li key={id}><a href={`#${id}`} className="hover:text-accent focus-visible:outline-2 focus-visible:outline-accent">{title}</a></li>)}
                        </ul>
                    </nav>
                </aside>
            </div>
        </div>
    );
}
