import { useRoutes } from 'react-router-dom';

import {
  HomePage,
  SignInPage,
  DashboardOverviewPage,
  DashboardAnalyticsPage,
  DashboardUsersListPage,
  DashboardUsersDetailPage,
  DashboardUsersCreatePage,
  DashboardUsersEditPage,
  DashboardIssuesListPage,
  DashboardIssuesDetailPage,
  DashboardIssuesCreatePage,
  DashboardIssuesEditPage,
  DashboardSettingsAccountPage,
} from '@/pages';

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
    // Users
    {
      path: '/dashboard/users/list',
      element: <DashboardUsersListPage />,
    },
    {
      path: '/dashboard/users/detail',
      element: <DashboardUsersDetailPage />,
    },
    {
      path: '/dashboard/users/new',
      element: <DashboardUsersCreatePage />,
    },
    {
      path: '/dashboard/users/edit',
      element: <DashboardUsersEditPage />,
    },
    // Issues
    {
      path: '/dashboard/issues/list',
      element: <DashboardIssuesListPage />,
    },
    {
      path: '/dashboard/issues/detail',
      element: <DashboardIssuesDetailPage />,
    },
    {
      path: '/dashboard/issues/new',
      element: <DashboardIssuesCreatePage />,
    },
    {
      path: '/dashboard/issues/edit',
      element: <DashboardIssuesEditPage />,
    },
    // Settings
    {
      path: '/dashboard/settings',
      element: <DashboardSettingsAccountPage />,
    },
    {
      path: '/dashboard/settings/account',
      element: <DashboardSettingsAccountPage />,
    },
  ]);

  return routes;
}
