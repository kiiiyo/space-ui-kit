import { createContext, useState, useEffect, useCallback, useMemo, useContext } from 'react';

type Theme = 'dark' | 'light' | 'system';

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme: Theme;
  storageKey: string;
};

type ThemeProviderState = {
  theme: Theme;
  onSetTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
  theme: 'system',
  onSetTheme: () => null,
};

export const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'space-ui-kit-theme',
}: ThemeProviderProps) {
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  const initialThemeState = (localStorage.getItem(storageKey) as Theme) || defaultTheme;
  const [theme, setTheme] = useState<Theme>(initialThemeState);

  const onSetTheme = useCallback(
    (newTheme: Theme) => {
      localStorage.setItem(storageKey, newTheme);
      setTheme(newTheme);
    },
    [setTheme, storageKey],
  );

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      root.classList.add(systemTheme);
    }

    root.classList.add(theme);
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      onSetTheme,
    }),
    [theme, onSetTheme],
  );

  return <ThemeProviderContext.Provider value={value}>{children}</ThemeProviderContext.Provider>;
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  return context;
};
