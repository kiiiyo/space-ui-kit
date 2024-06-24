import { Helmet } from 'react-helmet-async';
import { DashboardUsersDetailPageComponent } from '@/components/page';

export function DashboardUsersDetailPage() {
  return (
    <>
      <Helmet>
        <title>Users detail | Dashboard - Space UI Kit</title>
      </Helmet>
      <DashboardUsersDetailPageComponent />
    </>
  );
}
