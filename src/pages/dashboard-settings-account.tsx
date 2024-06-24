import { Helmet } from 'react-helmet-async';
import { DashboardSettingsAccountPageComponent } from '@/components/page';

export function DashboardSettingsAccountPage() {
  return (
    <>
      <Helmet>
        <title>Account settings | Dashboard - Space UI Kit</title>
      </Helmet>
      <DashboardSettingsAccountPageComponent />
    </>
  );
}
