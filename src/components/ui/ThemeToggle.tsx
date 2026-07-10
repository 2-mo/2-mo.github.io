'use client';

import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { resolveTheme, useTheme, type Theme } from '@/components/ui/ThemeProvider';
import { cn } from '@/lib/utils';

const themes: { value: Theme; label: string }[] = [
  { value: 'system', label: 'System' },
  { value: 'light', label: 'Light' },
  { value: 'dark', label: 'Dark' },
];

export function ThemeToggle() {
  const { theme, hydrated, setTheme } = useTheme();
  const displayTheme = hydrated ? theme : 'system';
  const currentTheme = themes.find((item) => item.value === displayTheme) || themes[0];
  const effectiveTheme = hydrated ? resolveTheme(theme) : 'light';
  const nextTheme = effectiveTheme === 'dark' ? 'light' : 'dark';

  return (
    <div className="relative">
      <button
        type="button"
        onMouseDown={(event) => event.preventDefault()}
        onClick={() => setTheme(nextTheme)}
        aria-label={`Current theme: ${currentTheme.label}. Switch to ${nextTheme} theme.`}
        title={`Switch to ${nextTheme} theme`}
        className={cn(
          'flex h-9 w-9 items-center justify-center rounded-md',
          'bg-transparent hover:bg-accent/10 dark:hover:bg-neutral-800',
          'transition-colors duration-200',
          'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50',
          'text-foreground hover:text-primary'
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
