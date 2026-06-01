'use client';

import { SunIcon, MoonIcon, ComputerDesktopIcon } from '@heroicons/react/24/outline';
import { useThemeStore, type Theme } from '@/lib/stores/themeStore';
import { cn } from '@/lib/utils';

const themes: { value: Theme; label: string }[] = [
  { value: 'system', label: 'System' },
  { value: 'light', label: 'Light' },
  { value: 'dark', label: 'Dark' },
];

export function ThemeToggle() {
  const { theme, setTheme } = useThemeStore();

  const currentTheme = themes.find(t => t.value === theme) || themes[0];

  const cycle = () => {
    const order: Theme[] = ['system', 'light', 'dark'];
    const index = order.indexOf(theme);
    setTheme(order[(index + 1) % order.length]);
  };

  return (
    <div className="relative">
      <button
        type="button"
        onMouseDown={(e) => e.preventDefault()}
        onClick={cycle}
        aria-label={`Current theme: ${currentTheme.label}. Click to cycle theme.`}
        title={`Current theme: ${currentTheme.label}. Click to cycle theme.`}
        className={cn(
          'flex items-center justify-center w-10 h-10 rounded-full',
          'border border-neutral-200 bg-background hover:bg-neutral-50',
          'dark:border-[rgba(148,163,184,0.24)] dark:bg-neutral-800 dark:hover:bg-neutral-700',
          'transition-transform duration-200 hover:scale-105 active:scale-95',
          'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50',
          'text-neutral-600 hover:text-primary dark:text-neutral-400 dark:hover:text-white'
        )}
      >
        <span key={theme} className="theme-icon-anim inline-flex">
          {theme === 'system' ? (
            <ComputerDesktopIcon className="h-4 w-4" />
          ) : theme === 'dark' ? (
            <MoonIcon className="h-4 w-4" />
          ) : (
            <SunIcon className="h-4 w-4" />
          )}
        </span>
      </button>
    </div>
  );
}
