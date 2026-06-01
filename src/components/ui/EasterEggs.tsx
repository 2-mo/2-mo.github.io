'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

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
 *  (2) a burst of ✱ sparks when clicking anything tagged `data-spark`,
 *  (5) a raccoon that occasionally peeks up from the bottom-right corner.
 * Everything is purely decorative and degrades gracefully.
 */
export default function EasterEggs({ repo }: EasterEggsProps) {
    const [sparks, setSparks] = useState<Spark[]>([]);
    const [peeking, setPeeking] = useState(false);
    const [celebrate, setCelebrate] = useState(false);
    const [nightToast, setNightToast] = useState(false);
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
    // (4) Five quick clicks on the avatar (data-avatar) "levels up" the raccoon.
    useEffect(() => {
        let count = 0;
        let resetTimer = 0;
        const onClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement | null;
            if (target?.closest?.('[data-spark]')) burst(e.clientX, e.clientY);
            if (target?.closest?.('[data-avatar]')) {
                count += 1;
                window.clearTimeout(resetTimer);
                resetTimer = window.setTimeout(() => { count = 0; }, 1200);
                if (count >= 5) {
                    count = 0;
                    setCelebrate(true);
                    window.setTimeout(() => setCelebrate(false), 2600);
                }
            }
        };
        document.addEventListener('click', onClick);
        return () => {
            document.removeEventListener('click', onClick);
            window.clearTimeout(resetTimer);
        };
    }, [burst]);

    // (7) Late-night greeting (local time 0:00–4:59).
    useEffect(() => {
        const hour = new Date().getHours();
        if (hour < 0 || hour >= 5) return;
        console.log(`%c🌙 Working late? The raccoon approves.`, `color:${CLAY};font-weight:700`);
        setNightToast(true);
        const t = window.setTimeout(() => setNightToast(false), 6000);
        return () => window.clearTimeout(t);
    }, []);

    // (5) Raccoon idle peek.
    useEffect(() => {
        const reduceMotion =
            typeof window !== 'undefined' &&
            window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
        if (reduceMotion) return;

        let peekTimer = 0;
        let hideTimer = 0;
        const schedule = (delay: number) => {
            peekTimer = window.setTimeout(() => {
                if (document.visibilityState === 'visible') {
                    setPeeking(true);
                    hideTimer = window.setTimeout(() => {
                        setPeeking(false);
                        schedule(90000);
                    }, 4500);
                } else {
                    schedule(15000);
                }
            }, delay);
        };
        schedule(25000);
        return () => {
            window.clearTimeout(peekTimer);
            window.clearTimeout(hideTimer);
        };
    }, []);

    return (
        <>
            {/* ✱ spark overlay */}
            <div className="pointer-events-none fixed inset-0 z-[60] overflow-hidden">
                <AnimatePresence>
                    {sparks.map((s) => (
                        <motion.span
                            key={s.id}
                            initial={{ x: s.x, y: s.y, opacity: 1, scale: 0.6, rotate: 0 }}
                            animate={{ x: s.x + s.dx, y: s.y + s.dy, opacity: 0, scale: 1.1, rotate: s.rot }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                            style={{ position: 'absolute', left: 0, top: 0, color: CLAY }}
                            className="text-lg font-bold select-none leading-none"
                        >
                            ✱
                        </motion.span>
                    ))}
                </AnimatePresence>
            </div>

            {/* 🦝 raccoon peek */}
            <AnimatePresence>
                {peeking && (
                    <motion.button
                        type="button"
                        aria-label="A curious raccoon waves hello"
                        data-spark
                        onClick={() => setPeeking(false)}
                        initial={{ y: 96, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 96, opacity: 0 }}
                        transition={{ type: 'spring', stiffness: 200, damping: 18 }}
                        className="fixed bottom-0 right-6 z-50 cursor-pointer"
                    >
                        <Image
                            src="/raccoon.webp"
                            alt=""
                            width={84}
                            height={84}
                            className="rounded-t-2xl shadow-lg"
                        />
                    </motion.button>
                )}
            </AnimatePresence>

            {/* (4) Raccoon "level up" celebration */}
            <AnimatePresence>
                {celebrate && (
                    <motion.div
                        className="pointer-events-none fixed inset-0 z-[70] flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            initial={{ scale: 0.3, rotate: -12 }}
                            animate={{ scale: 1, rotate: 0 }}
                            exit={{ scale: 0.3, opacity: 0 }}
                            transition={{ type: 'spring', stiffness: 240, damping: 14 }}
                            className="relative"
                        >
                            <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-2xl font-bold" style={{ color: CLAY }}>
                                ✱ ✱ ✱
                            </div>
                            <Image
                                src="/raccoon.webp"
                                alt=""
                                width={150}
                                height={150}
                                className="rounded-3xl shadow-2xl"
                            />
                            {['❤️', '✱', '🦝', '✱', '❤️'].map((c, i) => (
                                <motion.span
                                    key={i}
                                    className="absolute left-1/2 top-1/2 text-2xl select-none"
                                    initial={{ x: 0, y: 0, opacity: 0 }}
                                    animate={{
                                        x: (i - 2) * 55,
                                        y: -90 - (i % 2) * 30,
                                        opacity: [0, 1, 0],
                                    }}
                                    transition={{ duration: 1.8, delay: 0.1 * i, ease: 'easeOut' }}
                                >
                                    {c}
                                </motion.span>
                            ))}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* (7) Late-night toast */}
            <AnimatePresence>
                {nightToast && (
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 16 }}
                        className="fixed bottom-6 left-6 z-50 rounded-lg bg-neutral-800 text-white text-sm font-medium px-4 py-2 shadow-lg"
                    >
                        🌙 Working late? The raccoon approves.
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
