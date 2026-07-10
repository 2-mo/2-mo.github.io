'use client';

import { useCallback, useEffect, useRef, useState, type CSSProperties } from 'react';

// Anthropic "clay" — Claude's signature warm accent.
const CLAY = '#D97757';

interface Spark {
    id: number;
    x: number;
    y: number;
    dx: number;
    dy: number;
    rot: number;
}

interface EasterEggsProps {
    repo?: string;
}

/**
 * A small bundle of Claude-flavored easter eggs:
 *  (1) a friendly console greeting for the curious who open DevTools,
 *  (2) a burst of ✱ sparks when clicking anything tagged `data-spark`.
 * Everything is purely decorative and degrades gracefully.
 */
export default function EasterEggs({ repo }: EasterEggsProps) {
    const [sparks, setSparks] = useState<Spark[]>([]);
    const idRef = useRef(0);

    const burst = useCallback((x: number, y: number) => {
        const count = 14;
        const next: Spark[] = [];
        for (let i = 0; i < count; i++) {
            const angle = (Math.PI * 2 * i) / count + Math.random() * 0.5;
            const dist = 40 + Math.random() * 70;
            next.push({
                id: idRef.current++,
                x,
                y,
                dx: Math.cos(angle) * dist,
                dy: Math.sin(angle) * dist,
                rot: (Math.random() - 0.5) * 360,
            });
        }
        setSparks((prev) => [...prev, ...next]);
        const ids = new Set(next.map((s) => s.id));
        window.setTimeout(() => {
            setSparks((prev) => prev.filter((s) => !ids.has(s.id)));
        }, 900);
    }, []);

    // (1) Console greeting.
    useEffect(() => {
        const accent = `color:${CLAY};font-weight:700`;
        const dim = 'color:#888';
        console.log(
            `%c✱ %cHi there, curious human.%c\n` +
            `Thanks for opening the console — that's exactly the kind of curiosity I like.\n` +
            `This site is built with Next.js + Tailwind, statically exported.\n` +
            (repo ? `⭐ Like it? A star would genuinely make my day: ${repo}\n` : '') +
            `%c— built with a little help from Claude ✱`,
            accent, accent, dim, accent
        );
    }, [repo]);

    // (2) Sparks when clicking anything tagged data-spark.
    useEffect(() => {
        const onClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement | null;
            if (target?.closest?.('[data-spark]')) burst(e.clientX, e.clientY);
        };
        document.addEventListener('click', onClick);
        return () => {
            document.removeEventListener('click', onClick);
        };
    }, [burst]);

    return (
        <>
            {/* ✱ spark overlay */}
            <div className="pointer-events-none fixed inset-0 z-[60] overflow-hidden">
                {sparks.map((spark) => (
                    <span
                        key={spark.id}
                        style={{
                            position: 'absolute',
                            left: spark.x,
                            top: spark.y,
                            color: CLAY,
                            '--spark-dx': `${spark.dx}px`,
                            '--spark-dy': `${spark.dy}px`,
                            '--spark-rotation': `${spark.rot}deg`,
                        } as CSSProperties}
                        className="easter-egg-spark text-lg font-bold select-none leading-none"
                    >
                        ✱
                    </span>
                ))}
            </div>
        </>
    );
}
