import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
    return (
        <div className="max-w-xl mx-auto px-6 py-24 text-center">
            <Image
                src="/raccoon.webp"
                alt=""
                width={120}
                height={120}
                className="mx-auto mb-6 rounded-2xl shadow-lg"
                priority
            />
            <p className="text-sm font-mono text-accent mb-2">✱ 404</p>
            <h1 className="text-3xl font-serif font-bold text-primary mb-4">
                This page wandered off.
            </h1>
            <p className="text-neutral-600 dark:text-neutral-500 mb-8 leading-relaxed">
                I looked, but there&apos;s nothing here — the raccoon may have made off
                with it. Let&apos;s get you back to somewhere real.
            </p>
            <Link
                href="/"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent text-white font-medium hover:bg-accent-dark transition-colors"
            >
                ← Take me home
            </Link>
        </div>
    );
}
