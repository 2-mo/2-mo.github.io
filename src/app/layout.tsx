import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import EasterEggs from "@/components/ui/EasterEggs";
import { getConfig } from "@/content/config";
import { SITE_URL } from "@/site/urls";

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
      types: {
        "application/rss+xml": "/rss.xml",
      },
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const config = getConfig();

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href={config.site.favicon} type="image/svg+xml" />
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
        <a
          href="#main-content"
          className="fixed left-4 top-3 z-[60] -translate-y-20 rounded-md bg-accent px-4 py-2 text-sm font-semibold text-white shadow-lg transition-transform focus:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-light"
        >
          Skip to main content
        </a>
        <ThemeProvider>
          <Navigation
            items={config.navigation}
            siteTitle={config.site.title}
            enableOnePageMode={config.features.enable_one_page_mode}
          />
          <main id="main-content" tabIndex={-1} className="min-h-screen pt-16 lg:pt-20">
            {children}
          </main>
          <Footer lastUpdated={config.site.last_updated} />
          <EasterEggs repo="https://github.com/2-mo/2-mo.github.io" />
        </ThemeProvider>
      </body>
    </html>
  );
}
