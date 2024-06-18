import { useRoutes } from 'react-router-dom';

import { HomePage, DashboardOverviewPage } from '@/pages';

export function Router() {
  const routes = useRoutes([
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/dashboard',
      element: <DashboardOverviewPage />,
    },
  ]);

  return routes;
}
