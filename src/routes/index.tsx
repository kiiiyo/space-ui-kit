import { useRoutes } from 'react-router-dom';

import { HomePage, SignInPage, DashboardOverviewPage } from '@/pages';

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
  ]);

  return routes;
}
