import fs from 'fs';
import path from 'path';
import { parse } from 'smol-toml';

export interface NoteMetadata {
    slug: string;
    title: string;
    summary: string;
    category: string;
    period: string;
    published: string;
    updated: string;
}

export interface Note extends NoteMetadata {
    content: string;
}

const contentDir = path.join(process.cwd(), 'content');

export function getNotes(): NoteMetadata[] {
    const { notes } = parse(fs.readFileSync(path.join(contentDir, 'notes.toml'), 'utf8'));
    if (!Array.isArray(notes)) throw new Error('content/notes.toml: expected [[notes]] entries.');
    const slugs = new Set<string>();

    return notes.map((entry, index) => {
        if (!entry || typeof entry !== 'object' || Array.isArray(entry)) {
            throw new Error(`content/notes.toml: invalid note at index ${index}.`);
        }
        const note = entry as Record<string, unknown>;
        const fields = ['slug', 'title', 'summary', 'category', 'period', 'published', 'updated'] as const;
        for (const field of fields) {
            if (typeof note[field] !== 'string' || !note[field].trim()) {
                throw new Error(`content/notes.toml: notes[${index}].${field} must be a non-empty string.`);
            }
        }
        const metadata = note as unknown as NoteMetadata;
        if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(metadata.slug) || slugs.has(metadata.slug)) {
            throw new Error(`content/notes.toml: invalid or duplicate slug "${metadata.slug}".`);
        }
        for (const field of ['published', 'updated'] as const) {
            const value = metadata[field];
            const date = new Date(`${value}T00:00:00Z`);
            if (!/^\d{4}-\d{2}-\d{2}$/.test(value) || Number.isNaN(date.valueOf()) || date.toISOString().slice(0, 10) !== value) {
                throw new Error(`content/notes.toml: invalid ${field} for "${metadata.slug}".`);
            }
        }
        if (metadata.updated < metadata.published) {
            throw new Error(`content/notes.toml: updated precedes published for "${metadata.slug}".`);
        }
        if (!fs.existsSync(path.join(contentDir, 'notes', `${metadata.slug}.md`))) {
            throw new Error(`Missing content/notes/${metadata.slug}.md.`);
        }
        slugs.add(metadata.slug);
        return metadata;
    });
}

export function getNote(slug: string): Note | null {
    const note = getNotes().find((entry) => entry.slug === slug);
    if (!note) return null;
    return {
        ...note,
        content: fs.readFileSync(path.join(contentDir, 'notes', `${note.slug}.md`), 'utf8'),
    };
}

export function getNotePath(slug: string): string {
    return `/notes/${slug}/`;
}
