import { Children, isValidElement, type ReactNode } from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { headingId } from '@/lib/markdown';

function textContent(children: ReactNode): string {
    return Children.toArray(children).map((child) => {
        if (isValidElement<{ children?: ReactNode }>(child)) return textContent(child.props.children);
        return typeof child === 'string' || typeof child === 'number' ? String(child) : '';
    }).join('');
}

export default function NoteBody({ content }: { content: string }) {
    return (
        <div className="note-body min-w-0 text-neutral-700 leading-[1.9] dark:text-neutral-600">
            <Markdown
                remarkPlugins={[remarkGfm, remarkMath]}
                rehypePlugins={[rehypeKatex]}
                components={{
                    h2: ({ children }) => (
                        <h2 id={headingId(textContent(children))} className="scroll-mt-24 mt-12 mb-5 border-t border-neutral-200 pt-8 text-2xl font-bold tracking-tight text-primary dark:border-neutral-800">
                            {children}
                        </h2>
                    ),
                    h3: ({ children }) => <h3 className="mt-8 mb-3 text-lg font-semibold text-primary">{children}</h3>,
                    p: ({ children }) => <p className="my-4">{children}</p>,
                    ul: ({ children }) => <ul className="my-4 list-disc space-y-2 pl-6 marker:text-accent">{children}</ul>,
                    ol: ({ children, start }) => <ol start={start} className="my-4 list-decimal space-y-2 pl-6 marker:text-accent">{children}</ol>,
                    a: ({ children, href }) => (
                        <a href={href} target={/^https?:\/\//i.test(href || '') ? '_blank' : undefined} rel={/^https?:\/\//i.test(href || '') ? 'noopener noreferrer' : undefined} className="text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
                            {children}
                        </a>
                    ),
                    blockquote: ({ children }) => <blockquote className="my-6 rounded-r-lg border-l-2 border-accent bg-accent/5 px-5 py-1">{children}</blockquote>,
                    strong: ({ children }) => <strong className="font-semibold text-primary">{children}</strong>,
                    table: ({ children }) => (
                        <div className="my-6 overflow-x-auto rounded-lg border border-neutral-200 focus-visible:outline-2 focus-visible:outline-accent dark:border-neutral-700" role="region" aria-label="数据表格，可横向滚动" tabIndex={0}>
                            <table className="w-full min-w-[38rem] border-collapse text-left text-sm leading-7">{children}</table>
                        </div>
                    ),
                    th: ({ children }) => <th scope="col" className="border-b border-neutral-200 bg-neutral-100/70 px-4 py-3 font-semibold text-primary dark:border-neutral-700 dark:bg-neutral-800">{children}</th>,
                    td: ({ children }) => <td className="border-b border-neutral-200/70 px-4 py-3 align-top dark:border-neutral-800">{children}</td>,
                    pre: ({ children }) => <pre className="my-6 overflow-x-auto rounded-lg bg-neutral-100 p-5 text-sm dark:bg-neutral-800">{children}</pre>,
                    img: ({ src, alt }) => (
                        // Paper figures keep their original proportions and can be opened at full size.
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={src} alt={alt || ''} loading="lazy" className="my-6 h-auto max-w-full rounded-lg border border-neutral-200 bg-white p-2 dark:border-neutral-700" />
                    ),
                    hr: () => <hr className="my-8 border-neutral-200 dark:border-neutral-800" />,
                }}
            >
                {content}
            </Markdown>
        </div>
    );
}
