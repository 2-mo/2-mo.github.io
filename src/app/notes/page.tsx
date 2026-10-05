import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { getNotes, getNotePath } from '@/content/notes';
import { absoluteUrl } from '@/site/urls';

export const metadata: Metadata = {
    title: 'Notes · 分享',
    description: '与论文、文档、代码、绘图重修旧好，以及论文分享和视频异常研究的笔记。',
    alternates: { canonical: '/notes/' },
    openGraph: { title: 'Notes · 分享', description: '与论文、文档、代码、绘图重修旧好，以及论文分享和视频异常研究的笔记。', url: absoluteUrl('/notes/'), locale: 'zh_CN' },
};

export default function NotesPage() {
    const notes = getNotes();
    return (
        <div lang="zh-CN" className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
            <header className="mb-12">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">Reading & Research</p>
                <h1 className="font-serif text-4xl font-bold text-primary">Notes <span className="ml-2 text-2xl font-normal text-neutral-500">/ 分享</span></h1>
                <p className="mt-5 max-w-2xl leading-8 text-neutral-600">读论文、写文档、跑代码、画图，以及研究中留下的一些想法和资料。</p>
            </header>
            <div className="divide-y divide-neutral-200 border-y border-neutral-200 dark:divide-neutral-800 dark:border-neutral-800">
                {notes.map((note, index) => (
                    <article key={note.slug} className="group relative py-8 sm:py-10">
                        <div className="flex gap-5 sm:gap-8">
                            <span aria-hidden="true" className="pt-1 font-serif text-2xl text-neutral-400">{String(index + 1).padStart(2, '0')}</span>
                            <div className="min-w-0 flex-1">
                                <p className="mb-3 text-xs font-medium tracking-wide text-accent">{note.category}</p>
                                <h2 className="text-xl font-semibold leading-relaxed text-primary sm:text-2xl">
                                    <Link href={getNotePath(note.slug)} className="after:absolute after:inset-0 after:rounded-md hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">{note.title}</Link>
                                </h2>
                                <p className="mt-3 max-w-2xl text-sm leading-7 text-neutral-600 sm:text-base">{note.summary}</p>
                                <p className="mt-5 text-xs text-neutral-500">原始笔记 {note.period} <span aria-hidden="true">·</span> 修订于 <time dateTime={note.updated}>{note.updated}</time></p>
                            </div>
                            <ArrowRightIcon aria-hidden="true" className="mt-10 h-5 w-5 shrink-0 text-neutral-400 transition-transform group-hover:translate-x-1 group-hover:text-accent" />
                        </div>
                    </article>
                ))}
            </div>
            <p className="mt-8 text-sm leading-7 text-neutral-500">持续整理的论文与资源清单见 <Link href="/projects/" className="text-accent underline underline-offset-4">Projects</Link>；常用科研工具见 <Link href="/research-links/" className="text-accent underline underline-offset-4">Polaris</Link>。</p>
        </div>
    );
}
