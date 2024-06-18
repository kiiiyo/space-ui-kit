import { useEffect, useState } from 'react';
import { useAppProvider, useTheme } from '@/providers';

export function useDashboardLayoutPresenter() {
  const {
    isShowDashboardLayoutNavigationDisplay,
    onToggleDashboardLayoutNavigationDisplay,
    onSetDashboardLayoutNavigationDisplay,
  } = useAppProvider();

  const { onSetTheme } = useTheme();
  /**
   * FIXME: Refactoring make use media query hooks
   */
  const formattedQuery = '(width < 1024px)';
  const [match, setMatch] = useState(matchMedia(formattedQuery).matches);

  useEffect(() => {
    const mediaQueryList = matchMedia(formattedQuery);

    mediaQueryList.onchange = ({ matches }) => {
      setMatch(matches);
      if (matches) onSetDashboardLayoutNavigationDisplay(false);
    };

    return () => {
      mediaQueryList.onchange = null;
    };
  }, [formattedQuery, setMatch, onSetDashboardLayoutNavigationDisplay]);

  return {
    isMobileDevice: match,
    isShowDashboardLayoutNavigationDisplay,
    onToggleDashboardLayoutNavigationDisplay,
    onSetDashboardLayoutNavigationDisplay,
    onSetTheme,
  } as const;
}
