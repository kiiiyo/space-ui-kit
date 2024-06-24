import { useEffect, useState, useCallback } from 'react';
import { useAppProvider, useTheme } from '@/providers';
import { useLocation } from 'react-router-dom';

export function useDashboardLayoutPresenter() {
  const {
    isShowDashboardLayoutNavigationDisplay,
    onToggleDashboardLayoutNavigationDisplay,
    onSetDashboardLayoutNavigationDisplay,
  } = useAppProvider();

  const { pathname } = useLocation();

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

  const isCurrentPath = useCallback((currentPath: string) => currentPath === pathname, [pathname]);

  return {
    isMobileDevice: match,
    isShowDashboardLayoutNavigationDisplay,
    currentPageGroup: pathname.split('/')[2],
    currentPathname: pathname,
    onToggleDashboardLayoutNavigationDisplay,
    onSetDashboardLayoutNavigationDisplay,
    onSetTheme,
    isCurrentPath,
  } as const;
}
