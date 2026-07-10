'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  useSyncExternalStore,
} from 'react';

export type Theme = 'light' | 'dark' | 'system';

interface ThemeContextValue {
  theme: Theme;
  hydrated: boolean;
  setTheme: (theme: Theme) => void;
}

const STORAGE_KEY = 'theme-storage';
const ThemeContext = createContext<ThemeContextValue | null>(null);
const subscribeToHydration = () => () => {};
const getHydratedSnapshot = () => true;
const getServerSnapshot = () => false;

type MediaQueryListWithDeprecated = MediaQueryList & {
  addListener?: (listener: (this: MediaQueryList, ev: MediaQueryListEvent) => void) => void;
  removeListener?: (listener: (this: MediaQueryList, ev: MediaQueryListEvent) => void) => void;
};

function readStoredTheme(): Theme {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    const value = stored ? JSON.parse(stored)?.state?.theme : null;
    return value === 'light' || value === 'dark' || value === 'system' ? value : 'system';
  } catch {
    return 'system';
  }
}

function persistTheme(theme: Theme): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ state: { theme }, version: 0 }));
  } catch {
    return;
  }
}

function applyTheme(theme: Theme): void {
  const effective = resolveTheme(theme);
  const root = document.documentElement;
  root.classList.remove('light', 'dark');
  root.classList.add(effective);
  root.setAttribute('data-theme', effective);
}

export function resolveTheme(theme: Theme): 'light' | 'dark' {
  if (theme === 'system') {
    return typeof window !== 'undefined' && window.matchMedia?.('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }

  return theme;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(() => (
    typeof window === 'undefined' ? 'system' : readStoredTheme()
  ));
  const hydrated = useSyncExternalStore(
    subscribeToHydration,
    getHydratedSnapshot,
    getServerSnapshot
  );

  useEffect(() => {
    if (!hydrated) return;

    applyTheme(theme);
    if (theme !== 'system' || typeof window.matchMedia !== 'function') return;

    const media = window.matchMedia('(prefers-color-scheme: dark)') as MediaQueryListWithDeprecated;
    const onChange = () => applyTheme('system');

    try {
      media.addEventListener('change', onChange);
    } catch {
      media.addListener?.(onChange);
    }

    return () => {
      try {
        media.removeEventListener('change', onChange);
      } catch {
        media.removeListener?.(onChange);
      }
    };
  }, [hydrated, theme]);

  const setTheme = useCallback((nextTheme: Theme) => {
    persistTheme(nextTheme);
    setThemeState(nextTheme);
  }, []);

  const value = useMemo(
    () => ({ theme, hydrated, setTheme }),
    [hydrated, setTheme, theme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }

  return context;
}
