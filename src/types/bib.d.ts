declare module '*.bib' {
  const content: string;
  export default content;
}

declare module '@orcid/bibtex-parse-js' {
  export interface BibtexEntry {
    citationKey: string;
    entryType: string;
    entryTags: Record<string, string>;
  }
  export function toJSON(bibtex: string): BibtexEntry[];
  export function toBibtex(entries: unknown, compact?: boolean): string;
}
