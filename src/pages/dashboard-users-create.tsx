import { Helmet } from 'react-helmet-async';
import { DashboardUsersCreatePageComponent } from '@/components/page';

export function DashboardUsersCreatePage() {
  return (
    <>
      <Helmet>
        <title>Users create | Dashboard - Space UI Kit</title>
      </Helmet>
      <DashboardUsersCreatePageComponent />
    </>
  );
}
