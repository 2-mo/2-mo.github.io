import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import EasterEggs from "@/components/ui/EasterEggs";
import { getConfig } from "@/lib/config";

const SITE_URL = "https://2-mo.github.io";

const BING_WALLPAPER_ENDPOINT =
  "https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=zh-CN";

interface BingWallpaperResponse {
  images?: Array<{
    url?: string;
  }>;
}

async function getBingWallpaperImage(): Promise<string | undefined> {
  try {
    const response = await fetch(BING_WALLPAPER_ENDPOINT, {
      headers: {
        Accept: "application/json",
      },
      cache: "force-cache",
    });

    if (!response.ok) return undefined;

    const data = (await response.json()) as BingWallpaperResponse;
    const imagePath = data.images?.[0]?.url;
    if (!imagePath) return undefined;

    return imagePath.startsWith("http")
      ? imagePath
      : `https://www.bing.com${imagePath}`;
  } catch {
    return undefined;
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const config = getConfig();
  const siteUrl = new URL(SITE_URL);
  const previewImage = new URL(config.author.avatar, siteUrl).toString();

  return {
    metadataBase: siteUrl,
    title: {
      default: config.site.title,
      template: `%s | ${config.site.title}`
    },
    description: config.site.description,
    keywords: [config.author.name, "PhD", "Research", config.author.institution],
    authors: [{ name: config.author.name }],
    creator: config.author.name,
    publisher: config.author.name,
    icons: {
      icon: config.site.favicon,
    },
    alternates: {
      canonical: "/",
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: "/",
      title: config.site.title,
      description: config.site.description,
      siteName: `${config.author.name}'s Academic Website`,
      images: [
        {
          url: previewImage,
          alt: config.site.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: config.site.title,
      description: config.site.description,
      images: [previewImage],
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const config = getConfig();
  const bingWallpaperImage = await getBingWallpaperImage();

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href={config.site.favicon} type="image/svg+xml" />
        {bingWallpaperImage && (
          <style
            dangerouslySetInnerHTML={{
              __html: `:root{--bing-wallpaper-image:url(${JSON.stringify(bingWallpaperImage)});}`,
            }}
          />
        )}
        {/* Speed up font connections */}
        <link rel="dns-prefetch" href="https://google-fonts.jialeliu.com" />
        <link rel="preconnect" href="https://google-fonts.jialeliu.com" crossOrigin="" />
        {/* Non-blocking Google Fonts: preload + print media swap to avoid render-blocking */}
        <link
          rel="preload"
          as="style"
          href="https://google-fonts.jialeliu.com/css2?family=Inter:wght@300;400;500;600;700&family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap"
        />
        <link
          rel="stylesheet"
          id="gfonts-css"
          href="https://google-fonts.jialeliu.com/css2?family=Inter:wght@300;400;500;600;700&family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap"
          media="print"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                var l = document.getElementById('gfonts-css');
                if (!l) return;
                if (l.media !== 'all') {
                  l.addEventListener('load', function(){ try { l.media = 'all'; } catch(e){} });
                }
              })();
            `,
          }}
        />
        <noscript>
          {/* Fallback for no-JS environments */}
          <link
            rel="stylesheet"
            href="https://google-fonts.jialeliu.com/css2?family=Inter:wght@300;400;500;600;700&family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap"
          />
        </noscript>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme-storage');
                const parsed = theme ? JSON.parse(theme) : null;
                const setting = parsed?.state?.theme || 'system';
                const prefersDark = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
                const effective = setting === 'dark' ? 'dark' : (setting === 'light' ? 'light' : (prefersDark ? 'dark' : 'light'));
                var root = document.documentElement;
                root.classList.add(effective);
                root.setAttribute('data-theme', effective);
              } catch (e) {
                var root = document.documentElement;
                root.classList.add('light');
                root.setAttribute('data-theme', 'light');
              }
            `,
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        <ThemeProvider>
          <Navigation
            items={config.navigation}
            siteTitle={config.site.title}
            enableOnePageMode={config.features.enable_one_page_mode}
          />
          <main className="min-h-screen pt-16 lg:pt-20">
            {children}
          </main>
          <Footer lastUpdated={config.site.last_updated} />
          <EasterEggs repo="https://github.com/2-mo/2-mo.github.io" />
        </ThemeProvider>
      </body>
    </html>
  );
}
