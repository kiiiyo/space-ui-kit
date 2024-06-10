import { useRoutes } from 'react-router-dom';

import { HomePage } from '@/pages';

export function Router() {
  const routes = useRoutes([
    {
      path: '/',
      element: <HomePage />,
    },
  ]);

  return routes;
}
