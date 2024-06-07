import { useRoutes } from 'react-router-dom';

import { HomePage } from '@/components/page';

export function Router() {
  const routes = useRoutes([
    {
      path: '/',
      index: true,
      element: <HomePage />,
    },
  ]);

  return routes;
}
