'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, CalendarIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { SiteConfig } from '@/content/config';

// Compass (no Heroicons equivalent) — used for the "Polaris" navigation portal.
const CompassIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <path d="M14.8 9.2l-1.9 4.2-4.1 1.9 1.9-4.2z" />
  </svg>
);

const NAV_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  calendar: CalendarIcon,
  compass: CompassIcon,
  globe: GlobeAltIcon,
};

function NavIcon({ name, className }: { name?: string; className?: string }) {
  const Icon = (name && NAV_ICONS[name]) || GlobeAltIcon;
  return <Icon className={className} />;
}

// Shared icon-button, matching ThemeToggle for a consistent nav cluster.
const navIconBase = cn(
  'flex h-9 w-9 items-center justify-center rounded-md',
  'bg-transparent hover:bg-accent/10 dark:hover:bg-neutral-800',
  'transition-colors duration-200',
  'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50'
);

function NavIconLink({ href, title, name, isActive, onClick }: { href: string; title: string; name?: string; isActive: boolean; onClick?: () => void }) {
  const tooltipId = `nav-tooltip-${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;

  return (
    <span className="group relative flex">
      <Link
        href={href}
        aria-label={title}
        aria-describedby={tooltipId}
        prefetch={true}
        onClick={onClick}
        className={cn(
          navIconBase,
          isActive
            ? 'bg-accent/10 text-accent'
            : 'text-foreground hover:text-primary'
        )}
      >
        <NavIcon name={name} className="h-5 w-5 stroke-2" />
      </Link>
      <span
        id={tooltipId}
        role="tooltip"
        className="pointer-events-none absolute left-1/2 top-full z-50 mt-2 -translate-x-1/2 rounded-md bg-neutral-800 px-2.5 py-1.5 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity duration-150 group-hover:opacity-100 group-focus-within:opacity-100"
      >
        {title}
      </span>
    </span>
  );
}

interface NavigationProps {
  items: SiteConfig['navigation'];
  siteTitle: string;
  enableOnePageMode?: boolean;
}

export default function Navigation({ items, siteTitle, enableOnePageMode }: NavigationProps) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState('');

  // Items with an `icon` render as icon buttons in the right cluster; the rest stay text links.
  const textItems = items.filter((item) => !item.icon);
  const iconItems = items.filter((item) => item.icon);
  const isPageActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href));
  const isNavItemActive = (item: SiteConfig['navigation'][number]) => {
    if (enableOnePageMode) {
      return activeHash === `#${item.target}` || (!activeHash && item.target === 'about');
    }
    return isPageActive(item.href);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (enableOnePageMode) {
      const setCurrentHash = () => setActiveHash(window.location.hash);
      const initialHashTimer = window.setTimeout(setCurrentHash, 0);
      const handleHashChange = () => setActiveHash(window.location.hash);
      window.addEventListener('hashchange', handleHashChange);

      // Scroll Spy Logic
      const observerCallback = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Update active hash based on intersecting section
            const id = entry.target.id;
            // Only update if we are not currently scrolling to a target (optional refinement, 
            // but for now simple intersection is enough, we might want to debounce or check intersection ratio)
            // We use history.replaceState to update URL without jumping or window.location.hash which might jump
            // But for the nav highlighting, we just need to update local state if we want it to be responsive
            // However, the requirement says "nav bar did not change". 
            // Let's update the activeHash state.
            setActiveHash(id === 'about' ? '' : `#${id}`);
          }
        });
      };

      const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -60% 0px', // Adjust these margins to trigger when section is roughly in view
        threshold: 0
      };

      const observer = new IntersectionObserver(observerCallback, observerOptions);

      // Observe all sections
      items.forEach(item => {
        if (item.type === 'page') {
          const element = document.getElementById(item.target);
          if (element) observer.observe(element);
        }
      });

      return () => {
        window.clearTimeout(initialHashTimer);
        window.removeEventListener('hashchange', handleHashChange);
        observer.disconnect();
      };
    }
  }, [enableOnePageMode, items]);

  return (
    <Disclosure as="nav" className="fixed top-0 left-0 right-0 z-50">
      {({ open }) => (
        <>
          <motion.div
            initial={false}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
            className={cn(
              'transition-all duration-300 ease-out nav-scrolled backdrop-blur-xl',
              scrolled
                ? 'border-b border-neutral-200/50 shadow-lg dark:border-neutral-800/80 dark:shadow-black/30'
                : ''
            )}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16 lg:h-20">
                {/* Logo/Name */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-shrink-0"
                >
                  <Link
                    href="/"
                    className="text-xl lg:text-2xl font-serif font-semibold text-primary hover:text-accent transition-colors duration-200"
                  >
                    {siteTitle}
                  </Link>
                </motion.div>

                {/* Desktop Navigation */}
                <div className="hidden lg:block">
                  <div className="ml-10 flex items-center space-x-8">
                    <div className="flex items-baseline space-x-8">
                      {textItems.map((item) => {
                        const isActive = enableOnePageMode
                          ? activeHash === `#${item.target}` || (!activeHash && item.target === 'about')
                          : (item.href === '/'
                            ? pathname === '/'
                            : pathname.startsWith(item.href));

                        const href = enableOnePageMode
                          ? `/#${item.target}`
                          : item.href;

                        return (
                          <Link
                            key={item.title}
                            href={href}
                            prefetch={true}
                            onClick={() => enableOnePageMode && setActiveHash(`#${item.target}`)}
                            className={cn(
                              'relative px-3 py-2 text-sm font-medium transition-all duration-200 rounded hover:bg-accent/10 hover:shadow-sm',
                              isActive
                                ? 'text-primary'
                                : 'text-neutral-600 hover:text-primary'
                            )}
                          >
                            <span className="relative z-10">{item.title}</span>
                            {isActive && (
                              <motion.div
                                layoutId="activeTab"
                                className="absolute inset-0 bg-accent/10 rounded-lg"
                                initial={false}
                                transition={{
                                  type: 'spring',
                                  stiffness: 500,
                                  damping: 30
                                }}
                              />
                            )}
                          </Link>
                        );
                      })}
                    </div>
                    <div className="flex items-center space-x-2">
                      {iconItems.map((item) => (
                        <NavIconLink
                          key={item.title}
                          href={enableOnePageMode ? `/#${item.target}` : item.href}
                          title={item.title}
                          name={item.icon}
                          isActive={isNavItemActive(item)}
                          onClick={() => enableOnePageMode && setActiveHash(`#${item.target}`)}
                        />
                      ))}
                      <ThemeToggle />
                    </div>
                  </div>
                </div>

                {/* Mobile menu button and theme toggle */}
                <div className="lg:hidden flex items-center space-x-2">
                  <ThemeToggle />
                  <Disclosure.Button className="inline-flex h-9 w-9 items-center justify-center rounded-md text-foreground hover:bg-accent/10 hover:text-primary dark:hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent transition-colors duration-200">
                    <span className="sr-only">Open main menu</span>
                    <motion.div
                      animate={{ rotate: open ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {open ? (
                        <XMarkIcon className="block h-6 w-6 stroke-2" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6 stroke-2" aria-hidden="true" />
                      )}
                    </motion.div>
                  </Disclosure.Button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mobile Navigation Menu */}
          <AnimatePresence>
            {open && (
              <Disclosure.Panel static>
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-neutral-200/50 shadow-lg dark:border-neutral-800/80 dark:shadow-black/30"
                >
                  <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    {textItems.map((item, index) => {
                      const isActive = enableOnePageMode
                        ? (item.href === '/' ? pathname === '/' && !activeHash : activeHash === `#${item.target}`)
                        : (item.href === '/'
                          ? pathname === '/'
                          : pathname.startsWith(item.href));

                      const href = enableOnePageMode
                        ? (item.href === '/' ? '/' : `/#${item.target}`)
                        : item.href;

                      return (
                        <motion.div
                          key={item.title}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <Disclosure.Button
                            as={Link}
                            href={href}
                            prefetch={true}
                            onClick={() => enableOnePageMode && setActiveHash(item.href === '/' ? '' : `#${item.target}`)}
                            className={cn(
                              'block px-3 py-2 rounded-md text-base font-medium transition-all duration-200',
                              isActive
                                ? 'text-primary bg-accent/10 border-l-4 border-accent'
                                : 'text-neutral-600 hover:text-primary hover:bg-neutral-50 dark:text-neutral-100 dark:hover:text-white dark:hover:bg-neutral-800/80'
                            )}
                          >
                            {item.title}
                          </Disclosure.Button>
                        </motion.div>
                      );
                    })}
                    {iconItems.map((item, index) => {
                      const isActive = isNavItemActive(item);
                      const href = enableOnePageMode ? `/#${item.target}` : item.href;
                      return (
                        <motion.div
                          key={item.title}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: (textItems.length + index) * 0.1 }}
                        >
                          <Disclosure.Button
                            as={Link}
                            href={href}
                            prefetch={true}
                            onClick={() => enableOnePageMode && setActiveHash(`#${item.target}`)}
                            className={cn(
                              'flex items-center gap-3 px-3 py-2 rounded-md text-base font-medium transition-all duration-200',
                              isActive
                                ? 'text-primary bg-accent/10 border-l-4 border-accent'
                                : 'text-neutral-600 hover:text-primary hover:bg-neutral-50 dark:text-neutral-100 dark:hover:text-white dark:hover:bg-neutral-800/80'
                            )}
                          >
                            <NavIcon name={item.icon} className="h-5 w-5 stroke-2" />
                            {item.title}
                          </Disclosure.Button>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              </Disclosure.Panel>
            )}
          </AnimatePresence>
        </>
      )}
    </Disclosure>
  );
}
