import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@/providers/theme-provider';

import type { ThemeKind } from '@/providers/theme-provider';

export function useFloatingNavigationBarPresenter() {
  const navigate = useNavigate();
  const { onSetTheme } = useTheme();

  const onSelectThemeStyle = useCallback(
    (theme: ThemeKind) => {
      onSetTheme(theme);
    },
    [onSetTheme],
  );

  const onClickSignIn = useCallback(() => {
    navigate('/sign-in');
  }, [navigate]);

  return {
    onSelectThemeStyle,
    onClickSignIn,
  } as const;
}
