import { useRoutes } from 'react-router-dom';

import { HomePage, SignInPage, DashboardOverviewPage, DashboardAnalyticsPage } from '@/pages';

export function Router() {
  const routes = useRoutes([
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/sign-in',
      element: <SignInPage />,
    },
    {
      path: '/dashboard',
      element: <DashboardOverviewPage />,
    },
    {
      path: '/dashboard/overview',
      element: <DashboardOverviewPage />,
    },
    {
      path: '/dashboard/analytics',
      element: <DashboardAnalyticsPage />,
    },
  ]);

  return routes;
}
