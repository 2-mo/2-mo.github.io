'use client';

import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import { CvPageConfig } from '@/types/page';

/* ----------------------------- CV content data ---------------------------- */

const PROFILE = {
    name: 'Mengjingcheng Mo',
    nameCn: '莫梦竟成',
    photo: '/cv-photo.webp',
    left: [
        { label: 'Date of Birth', value: 'October 1997' },
        {
            label: 'Google Scholar',
            value: 'm6wKAtcAAAAJ',
            href: 'https://scholar.google.com/citations?hl=en&user=m6wKAtcAAAAJ&view_op=list_works&sortby=pubdate',
        },
        { label: 'Current Focus', value: 'Agentic Anomaly Understanding' },
    ],
    right: [
        { label: 'Supervisor', value: 'Prof. Xinbo Gao (高新波)' },
        { label: '', value: 'A.P. Jiaxu Leng (冷佳旭)' },
        { label: 'Email', value: 'tiurgee@gmail.com', href: 'mailto:tiurgee@gmail.com' },
        { label: 'Phone / WeChat', value: '(+86) 151 2315 1342' },
    ],
    interests:
        'Video Anomaly Understanding, Active Visual Reasoning, Multimodal Large Language Models',
};

const EDUCATION = [
    { degree: 'Ph.D. Candidate (Expected June 2027)', field: 'Computer Science and Technology', from: 'Sep. 2023', to: 'Present' },
    { degree: 'Master of Engineering (M.Eng.)', field: 'Computer Science and Technology', from: 'Sep. 2020', to: 'Jun. 2023' },
    { degree: 'Bachelor of Laws (LL.B.)', field: 'Law', from: 'Sep. 2015', to: 'Jun. 2019' },
];

type Pub = {
    authors: string;
    title: string;
    venue: string;
    year: string;
    note?: string;
    tags: { label: string; accent?: boolean }[];
};

const PUBS_PRIMARY: Pub[] = [
    {
        authors: 'Mengjingcheng Mo, Jiaxu Leng, and Xinbo Gao*,',
        title: 'Learning to Watch: Active Video Anomaly Understanding via Interleaved Policy Optimization,',
        venue: 'International Conference on Machine Learning (ICML)',
        year: '2026',
        tags: [{ label: 'CCF-A' }, { label: 'Active Evidence Acquisition', accent: true }],
    },
    {
        authors: 'Mengjingcheng Mo, Xinyang Tong, Mingpi Tan, Jiaxu Leng*, Jiankang Zheng, Yiran Liu, Haosheng Chen, Ji Gan, Weisheng Li, and Xinbo Gao*,',
        title: 'A2Seek: Towards Reasoning-Centric Benchmark for Aerial Anomaly Understanding,',
        venue: 'Advances in Neural Information Processing Systems, Datasets and Benchmarks Track (NeurIPS D&B)',
        year: '2025',
        tags: [{ label: 'CCF-A' }, { label: 'Reasoning-Centric Benchmark', accent: true }],
    },
    {
        authors: 'Mengjingcheng Mo, Jiankang Zheng, Jiaxu Leng, and Xinbo Gao*,',
        title: 'Retrieval-Guided Contextual Inference for Training-Free Video Anomaly Detection in Low-Light Scenarios,',
        venue: 'ACM International Conference on Multimedia Retrieval (ICMR)',
        year: '2026',
        tags: [{ label: 'CCF-B' }, { label: 'In-Context Learning', accent: true }],
    },
    {
        authors: 'Jiaxu Leng, Jiankang Zheng, Mengjingcheng Mo (project lead), Zhanjie Wu, Haosheng Chen, Ji Gan, and Xinbo Gao*,',
        title: 'Linguistic Relative Policy Optimization for Video Anomaly Reasoning,',
        venue: 'International Conference on Machine Learning (ICML)',
        year: '2026',
        tags: [{ label: 'CCF-A' }],
    },
    {
        authors: 'Jiankang Zheng, Mengjingcheng Mo* (corresponding author, project lead), Jiaxu Leng, Mingpi Tan, Zhanjie Wu, Ji Gan, Haosheng Chen, and Xinbo Gao,',
        title: 'Training-Free Video Anomaly Detection via Uncertainty-Guided Hierarchical Retrieval with Vision-Language Models,',
        venue: 'IEEE Transactions on Multimedia (TMM)',
        year: '',
        note: 'Under revision',
        tags: [{ label: 'CCF-A' }, { label: 'CAS Q1 Top Journal' }, { label: 'Hierarchical Retrieval', accent: true }],
    },
];

const PUBS_ADDITIONAL: Pub[] = [
    {
        authors: 'Tianle Lyu†, Mengjingcheng Mo† (co-first authors), Ting Wen, Zhen Song, Zinan Xiong, and Yanjie Zhu*,',
        title: 'Breaking the Continuum: Discrete Distribution Learning for Structural MRI Reconstruction,',
        venue: 'Conference on Computer Vision and Pattern Recognition (CVPR)',
        year: '2026',
        tags: [{ label: 'CCF-A' }],
    },
    {
        authors: 'Jiaxu Leng†, Yongming Ye, Mengjingcheng Mo† (co-first authors, project leader), Chenqiang Gao, Ji Gan, Bin Xiao, and Xinbo Gao*,',
        title: 'Recent Advances for Aerial Object Detection: A Survey,',
        venue: 'ACM Computing Surveys (CSUR)',
        year: '2024',
        tags: [{ label: 'CAS Q1 Top Journal' }],
    },
    {
        authors: 'Jiaxu Leng, Mengjingcheng Mo (student first author), Yinghua Zhou, Chenqiang Gao, Weisheng Li, and Xinbo Gao*,',
        title: 'Pareto Refocusing for Drone-View Object Detection,',
        venue: 'IEEE Transactions on Circuits and Systems for Video Technology (TCSVT)',
        year: '2023',
        tags: [{ label: 'CCF-B' }, { label: 'CAS Q1 Top Journal' }],
    },
    {
        authors: 'Xinbo Gao, Mengjingcheng Mo (student first author), Haitao Wang, and Jiaxu Leng*,',
        title: 'Recent Advances in Small Object Detection,',
        venue: 'Journal of Data Acquisition and Processing',
        year: '2021',
        tags: [
            { label: 'Cover Article' },
            { label: 'Journal Outstanding Paper Award 2019–2021' },
            { label: '300+ citations', accent: true },
        ],
    },
];

const PROJECTS = [
    'Completed the 2024 Chongqing Graduate Research Innovation Project and secured the 2024 CQUPT Doctoral Research Innovation Project.',
    'Participated in the Chongqing Major Special Project on "Smart Urban Sanitation," contributing to GARDEN, the first domestic large model for smart urban sanitation.',
    "Participated in the development of the Chang'e Lunar Poem Generation Large Model, supporting edge-side multimodal intelligent applications for lunar exploration scenarios.",
];

const AWARDS = [
    "Outstanding Master's Thesis Award of Chongqing, 2024.",
    'Outstanding Student Presentation Award at the Frontier Forum on Multi-Granularity Cognitive Computing.',
    'Innovation Award in the "Driving with Language" track at the CVPR 2024 Autonomous Driving Challenge.',
    'Winner Solution Award in the "Corner Case Scene Understanding" track at the ECCV 2024 Autonomous Driving Challenge.',
];

const SERVICE =
    'Reviewer for TPAMI, TCSVT, KBS, ICML (Gold Reviewer Award), NeurIPS, AAAI, ICMR, and ICME.';

const HOBBIES = 'Photography and badminton.';

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

function Tags({ tags }: { tags: Pub['tags'] }) {
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

function PubItem({ index, pub }: { index: number; pub: Pub }) {
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
                            <Field label="Name" value={`${PROFILE.name} (${PROFILE.nameCn})`} />
                            {PROFILE.left.map((f, i) => (
                                <Field key={i} {...f} />
                            ))}
                        </div>
                        <div className="cv-col">
                            {PROFILE.right.map((f, i) => (
                                <Field key={i} {...f} />
                            ))}
                        </div>
                    </div>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={PROFILE.photo} alt={PROFILE.name} className="cv-photo" />
                </header>
                <Field label="Interests" value={PROFILE.interests} />
                <div className="cv-interests-fix" />

                {/* Education & Experience */}
                <SectionTitle>Education &amp; Experience</SectionTitle>
                <div className="cv-subhead">Education</div>
                <table className="cv-edu">
                    <tbody>
                        {EDUCATION.map((e, i) => (
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
                    <span className="cv-num-circle">①</span> Information Technology Office, CQUPT, Product
                    Designer, 2020;{' '}
                    <span className="cv-num-circle">②</span> Zhubajie Co., Ltd., User Interface Design Intern,
                    2019.
                </p>

                {/* Selected Publications */}
                <SectionTitle subtitle="Toward Active Anomaly Understanding Beyond Passive Perception">
                    Selected Publications
                </SectionTitle>
                <ol className="cv-publist">
                    {PUBS_PRIMARY.map((p, i) => (
                        <PubItem key={i} index={i + 1} pub={p} />
                    ))}
                </ol>

                <SectionTitle>Additional Selected Publications</SectionTitle>
                <ol className="cv-publist">
                    {PUBS_ADDITIONAL.map((p, i) => (
                        <PubItem key={i} index={i + 1} pub={p} />
                    ))}
                </ol>

                {/* Projects */}
                <SectionTitle>Selected Research Projects</SectionTitle>
                <ol className="cv-list">
                    {PROJECTS.map((p, i) => (
                        <li key={i}>{p}</li>
                    ))}
                </ol>

                {/* Awards */}
                <SectionTitle>Awards</SectionTitle>
                <ol className="cv-list">
                    {AWARDS.map((p, i) => (
                        <li key={i}>{p}</li>
                    ))}
                </ol>

                {/* Service */}
                <SectionTitle>Academic Service</SectionTitle>
                <p className="cv-para">{SERVICE}</p>

                {/* Hobbies */}
                <SectionTitle>Hobbies</SectionTitle>
                <p className="cv-para">{HOBBIES}</p>

                <div className="cv-watermark">2-mo.github.io</div>
            </article>
        </div>
    );
}
