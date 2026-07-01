import { getConfig } from '@/content/config';
import { getHomePageModel } from '@/content/pages';
import { getScholarData } from '@/publications/scholar';
import { getGithubStars, githubProfileUrl } from '@/integrations/github';
import Profile from '@/components/home/Profile';
import RenderablePage from '@/components/pages/RenderablePage';

export default async function Home() {
  const config = getConfig();
  const home = getHomePageModel(config);
  const scholar = config.features.enable_scholar_citations ? getScholarData() : null;
  const scholarStats = scholar && scholar.totalCitations > 0
    ? { totalCitations: scholar.totalCitations, hIndex: scholar.hIndex, updated: scholar.updated }
    : undefined;

  const githubStars = await getGithubStars(config.social.github);
  const githubStats = githubStars != null
    ? { stars: githubStars, url: githubProfileUrl(config.social.github) || config.social.github || '#' }
    : undefined;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-background min-h-screen">
      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

        {/* Left Column - Profile */}
        <div className="lg:col-span-1">
          <Profile
            author={config.author}
            social={config.social}
            features={config.features}
            researchInterests={home.researchInterests}
            scholarStats={scholarStats}
            githubStats={githubStats}
          />
        </div>

        {/* Right Column - Content */}
        <div className="lg:col-span-2 space-y-8">
          {home.pages.map((page) => (
            <section key={page.id} id={page.id} className="scroll-mt-24 space-y-8">
              <RenderablePage
                page={page}
                embedded={true}
                enableOnePageMode={home.onePageMode}
              />
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
