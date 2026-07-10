import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import { CvPageConfig, CvPublication } from '@/types/page';

/* ------------------------------- UI helpers ------------------------------- */

const SELF = 'Mengjingcheng Mo';

// Bold the author's own name within an author list.
function Authors({ text }: { text: string }) {
    const parts = text.split(SELF);
    return (
        <span className="cv-authors">
            {parts.map((p, i) => (
                <span key={i}>
                    {p}
                    {i < parts.length - 1 && <strong className="cv-self">{SELF}</strong>}
                </span>
            ))}
        </span>
    );
}

function Star() {
    return <span className="cv-star">✦</span>;
}

function circledNumber(index: number): string {
    const circled = ['①', '②', '③', '④', '⑤', '⑥', '⑦', '⑧', '⑨'];
    return circled[index] ?? String(index + 1);
}

function Field({ label, value, href }: { label: string; value: string; href?: string }) {
    return (
        <div className="cv-field">
            <Star />
            <span>
                {label && <span className="cv-field-label">{label}: </span>}
                {href ? (
                    <a href={href} target="_blank" rel="noopener noreferrer" className="cv-link">
                        {value}
                    </a>
                ) : (
                    value
                )}
            </span>
        </div>
    );
}

function SectionTitle({ children, subtitle }: { children: React.ReactNode; subtitle?: string }) {
    return (
        <div className="cv-section-head">
            <h2 className="cv-section-title">{children}</h2>
            {subtitle && <span className="cv-section-sub">{subtitle}</span>}
        </div>
    );
}

function Tags({ tags }: { tags: CvPublication['tags'] }) {
    return (
        <span className="cv-tags">
            {' ('}
            {tags.map((t, i) => (
                <span key={i} className={t.accent ? 'cv-tag-accent' : 'cv-tag'}>
                    {t.label}
                    {i < tags.length - 1 ? '; ' : ''}
                </span>
            ))}
            {')'}
        </span>
    );
}

function PubItem({ index, pub }: { index: number; pub: CvPublication }) {
    return (
        <li className="cv-pub">
            <span className="cv-pub-num">[{index}]</span>
            <span className="cv-pub-body">
                <Authors text={pub.authors} />{' '}
                <span className="cv-pub-title">&ldquo;{pub.title}&rdquo;</span>{' '}
                <span className="cv-pub-venue">{pub.venue}</span>
                {pub.year && <>, {pub.year}</>}
                {pub.note && <span className="cv-pub-note">, {pub.note}</span>}.
                <Tags tags={pub.tags} />
            </span>
        </li>
    );
}

/* -------------------------------- Component ------------------------------- */

export default function CvSheet({ config }: { config: CvPageConfig }) {
    const pdf = config.pdf || '/Mengjingcheng-Mo-CV.pdf';
    const { profile } = config;

    return (
        <div className="cv-wrap">
            <div className="cv-toolbar">
                <a href={pdf} download className="cv-download">
                    <ArrowDownTrayIcon className="h-4 w-4" />
                    Download PDF
                </a>
            </div>

            <article className="cv-sheet">
                {/* Header */}
                <header className="cv-header">
                    <div className="cv-header-cols">
                        <div className="cv-col">
                            <Field label="Name" value={`${profile.name} (${profile.name_cn})`} />
                            {profile.left.map((f, i) => (
                                <Field key={i} {...f} />
                            ))}
                        </div>
                        <div className="cv-col">
                            {profile.right.map((f, i) => (
                                <Field key={i} {...f} />
                            ))}
                        </div>
                    </div>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={profile.photo} alt={profile.name} className="cv-photo" />
                </header>
                <Field label="Interests" value={profile.interests} />
                <div className="cv-interests-fix" />

                {/* Education & Experience */}
                <SectionTitle>Education &amp; Experience</SectionTitle>
                <div className="cv-subhead">Education</div>
                <table className="cv-edu">
                    <tbody>
                        {config.education.map((e, i) => (
                            <tr key={i}>
                                <td className="cv-edu-degree">{e.degree}</td>
                                <td className="cv-edu-field">{e.field}</td>
                                <td className="cv-edu-from">{e.from}</td>
                                <td className="cv-edu-dash">–</td>
                                <td className="cv-edu-to">{e.to}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <p className="cv-exp">
                    <span className="cv-subhead-inline">Experience:</span>{' '}
                    {config.experience.map((experience, index) => (
                        <span key={index}>
                            <span className="cv-num-circle">{circledNumber(index)}</span> {experience.organization},{' '}
                            {experience.role}, {experience.year}
                            {index < config.experience.length - 1 ? '; ' : '.'}
                            {index < config.experience.length - 1 ? ' ' : ''}
                        </span>
                    ))}
                </p>

                {/* Selected Publications */}
                <SectionTitle subtitle={config.publications.selected_subtitle}>
                    Selected Publications
                </SectionTitle>
                <ol className="cv-publist">
                    {config.publications.primary.map((p, i) => (
                        <PubItem key={i} index={i + 1} pub={p} />
                    ))}
                </ol>

                <SectionTitle>Additional Selected Publications</SectionTitle>
                <ol className="cv-publist">
                    {config.publications.additional.map((p, i) => (
                        <PubItem key={i} index={i + 1} pub={p} />
                    ))}
                </ol>

                {/* Projects */}
                <SectionTitle>Selected Research Projects</SectionTitle>
                <ol className="cv-list">
                    {config.projects.map((p, i) => (
                        <li key={i}>{p}</li>
                    ))}
                </ol>

                {/* Awards */}
                <SectionTitle>Awards</SectionTitle>
                <ol className="cv-list">
                    {config.awards.map((p, i) => (
                        <li key={i}>{p}</li>
                    ))}
                </ol>

                {/* Service */}
                <SectionTitle>Academic Service</SectionTitle>
                <p className="cv-para">{config.service}</p>

                {/* Hobbies */}
                <SectionTitle>Hobbies</SectionTitle>
                <p className="cv-para">{config.hobbies}</p>

                <div className="cv-watermark">2-mo.github.io</div>
            </article>
        </div>
    );
}
