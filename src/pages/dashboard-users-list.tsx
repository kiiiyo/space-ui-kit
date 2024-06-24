import { Helmet } from 'react-helmet-async';
import { DashboardUsersListPageComponent } from '@/components/page';

export function DashboardUsersListPage() {
  return (
    <>
      <Helmet>
        <title>Users list | Dashboard - Space UI Kit</title>
      </Helmet>
      <DashboardUsersListPageComponent />
    </>
  );
}
