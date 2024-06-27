import { createContext, useState, useCallback, useMemo } from 'react';

type AppProviderProps = {
  children: React.ReactNode;
};

type AppProviderValue = {
  isShowDashboardLayoutNavigationDisplay: boolean;
  onToggleDashboardLayoutNavigationDisplay: () => void;
  onSetDashboardLayoutNavigationDisplay: (isShow: boolean) => void;
};

const initialState: AppProviderValue = {
  isShowDashboardLayoutNavigationDisplay: false,
  onToggleDashboardLayoutNavigationDisplay: () => null,
  onSetDashboardLayoutNavigationDisplay: () => null,
};

export const AppProviderContext = createContext<AppProviderValue>(initialState);

export const useAppProvider = (): AppProviderValue => {
  const [
    isShowDashboardLayoutNavigationDisplay,
    setIsShowDashboardLayoutNavigationDisplay,
  ] = useState<boolean>(false);

  const onToggleDashboardLayoutNavigationDisplay = useCallback(() => {
    setIsShowDashboardLayoutNavigationDisplay((prev) => !prev);
  }, [setIsShowDashboardLayoutNavigationDisplay]);

  const onSetDashboardLayoutNavigationDisplay = useCallback(
    (isShow: boolean) => {
      setIsShowDashboardLayoutNavigationDisplay(isShow);
    },
    [setIsShowDashboardLayoutNavigationDisplay],
  );

  return {
    isShowDashboardLayoutNavigationDisplay,
    onToggleDashboardLayoutNavigationDisplay,
    onSetDashboardLayoutNavigationDisplay,
  };
};

export function AppProvider({ children }: AppProviderProps) {
  const {
    isShowDashboardLayoutNavigationDisplay,
    onToggleDashboardLayoutNavigationDisplay,
    onSetDashboardLayoutNavigationDisplay,
  } = useAppProvider();

  const value = useMemo(
    () => ({
      isShowDashboardLayoutNavigationDisplay,
      onToggleDashboardLayoutNavigationDisplay,
      onSetDashboardLayoutNavigationDisplay,
    }),
    [
      isShowDashboardLayoutNavigationDisplay,
      onToggleDashboardLayoutNavigationDisplay,
      onSetDashboardLayoutNavigationDisplay,
    ],
  );
  return (
    <AppProviderContext.Provider value={value}>
      {children}
    </AppProviderContext.Provider>
  );
}

export const { Consumer } = AppProviderContext;
