import { Helmet } from 'react-helmet-async';
import { DashboardOverviewPageComponent } from '@/components/page';

export function DashboardOverviewPage() {
  return (
    <>
      <Helmet>
        <title>DashboardOverviewPage | Space UI Kit</title>
      </Helmet>
      <DashboardOverviewPageComponent />
    </>
  );
}
