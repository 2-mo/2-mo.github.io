import { type ClassValue, clsx } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatDate(date: string | Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(new Date(date));
}

export function formatYear(date: string | Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric'
  }).format(new Date(date));
}

/**
 * Deterministic Morandi-style (muted, low-saturation) gradient derived from a
 * seed string. Stable across builds, so it can stand in for a missing paper
 * thumbnail without causing hydration mismatches.
 */
export function morandiGradient(seed: string): string {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
  }
  const hue = hash % 360;
  const hue2 = (hue + 24) % 360;
  const sat = 24 + (hash % 10);      // 24–33% — muted
  const light = 72 + (hash % 7);     // 72–78% — soft
  const c1 = `hsl(${hue}, ${sat}%, ${light}%)`;
  const c2 = `hsl(${hue2}, ${sat}%, ${light - 9}%)`;
  return `linear-gradient(135deg, ${c1}, ${c2})`;
}

export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}