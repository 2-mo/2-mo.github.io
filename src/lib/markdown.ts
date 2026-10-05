export function headingId(text: string): string {
    return text.trim().toLowerCase().replace(/[^\p{L}\p{N}]+/gu, '-').replace(/^-|-$/g, '');
}

export function getNoteHeadings(content: string): Array<{ id: string; title: string }> {
    return Array.from(content.matchAll(/^## (.+)$/gm), ([, title]) => ({
        id: headingId(title),
        title,
    }));
}
