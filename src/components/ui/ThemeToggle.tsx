'use client';

import { useSyncExternalStore } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { resolveTheme, useThemeStore, type Theme } from '@/stores/themeStore';
import { cn } from '@/lib/utils';

const themes: { value: Theme; label: string }[] = [
  { value: 'system', label: 'System' },
  { value: 'light', label: 'Light' },
  { value: 'dark', label: 'Dark' },
];

const subscribeToHydration = () => () => { };
const getHydratedSnapshot = () => true;
const getServerSnapshot = () => false;

export function ThemeToggle() {
  const { theme, setTheme } = useThemeStore();
  const mounted = useSyncExternalStore(
    subscribeToHydration,
    getHydratedSnapshot,
    getServerSnapshot
  );

  const displayTheme = mounted ? theme : 'system';
  const currentTheme = themes.find(t => t.value === displayTheme) || themes[0];
  const effectiveTheme = mounted ? resolveTheme(theme) : 'light';
  const nextTheme = effectiveTheme === 'dark' ? 'light' : 'dark';

  const toggle = () => {
    setTheme(nextTheme);
  };

  return (
    <div className="relative">
      <button
        type="button"
        onMouseDown={(e) => e.preventDefault()}
        onClick={toggle}
        aria-label={`Current theme: ${currentTheme.label}. Switch to ${nextTheme} theme.`}
        title={`Switch to ${nextTheme} theme`}
        className={cn(
          'flex h-9 w-9 items-center justify-center rounded-md',
          'bg-transparent hover:bg-accent/10 dark:hover:bg-neutral-800',
          'transition-colors duration-200',
          'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50',
          'text-neutral-800 hover:text-primary dark:text-neutral-100 dark:hover:text-white'
        )}
      >
        <span key={theme} className="theme-icon-anim inline-flex">
          {effectiveTheme === 'dark' ? (
            <MoonIcon className="h-5 w-5 stroke-2" />
          ) : (
            <SunIcon className="h-5 w-5 stroke-2" />
          )}
        </span>
      </button>
    </div>
  );
}
