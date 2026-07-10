import About from '@/components/home/About';
import News from '@/components/home/News';
import SelectedPublications from '@/components/home/SelectedPublications';
import Timeline from '@/components/home/Timeline';
import CardPage from '@/components/pages/CardPage';
import CvSheet from '@/components/pages/CvSheet';
import EmbedPage from '@/components/pages/EmbedPage';
import TextPage from '@/components/pages/TextPage';
import PublicationsList from '@/components/publications/PublicationsList';
import {
    AboutSectionModel,
    RenderablePageModel,
} from '@/content/pages';

function AboutSection({
    section,
    enableOnePageMode,
}: {
    section: AboutSectionModel;
    enableOnePageMode: boolean;
}) {
    switch (section.type) {
        case 'markdown':
            return (
                <About
                    content={section.content}
                    title={section.title}
                />
            );
        case 'publications':
            return (
                <SelectedPublications
                    publications={section.publications}
                    title={section.title}
                    enableOnePageMode={enableOnePageMode}
                />
            );
        case 'list':
            return (
                <News
                    items={section.items}
                    title={section.title}
                />
            );
        case 'cards':
            return (
                <CardPage
                    config={section.config}
                    embedded={true}
                />
            );
        case 'timeline':
            return (
                <Timeline
                    items={section.items}
                    title={section.title}
                />
            );
    }
}

export default function RenderablePage({
    page,
    embedded = false,
    enableOnePageMode = false,
}: {
    page: RenderablePageModel;
    embedded?: boolean;
    enableOnePageMode?: boolean;
}) {
    switch (page.type) {
        case 'about':
            return (
                <>
                    {page.sections.map((section) => (
                        <div key={section.id} id={section.id} className="scroll-mt-24">
                            <AboutSection
                                section={section}
                                enableOnePageMode={enableOnePageMode}
                            />
                        </div>
                    ))}
                </>
            );
        case 'publication':
            return (
                <PublicationsList
                    config={page.config}
                    publications={page.publications}
                    embedded={embedded}
                />
            );
        case 'text':
            return (
                <TextPage
                    config={page.config}
                    content={page.content}
                    embedded={embedded}
                />
            );
        case 'card':
            return (
                <CardPage
                    config={page.config}
                    embedded={embedded}
                />
            );
        case 'cv':
            return <CvSheet config={page.config} />;
        case 'embed':
            return <EmbedPage config={page.config} />;
    }
}
