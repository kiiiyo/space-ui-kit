import { Helmet } from 'react-helmet-async';
import { DashboardUsersEditPageComponent } from '@/components/page';

export function DashboardUsersEditPage() {
  return (
    <>
      <Helmet>
        <title>Users edit | Dashboard - Space UI Kit</title>
      </Helmet>
      <DashboardUsersEditPageComponent />
    </>
  );
}
