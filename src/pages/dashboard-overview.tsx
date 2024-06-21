import { Helmet } from 'react-helmet-async';
import { DashboardOverviewPageComponent } from '@/components/page';

export function DashboardOverviewPage() {
  return (
    <>
      <Helmet>
        <title>Overview | Dashboard - Space UI Kit</title>
      </Helmet>
      <DashboardOverviewPageComponent />
    </>
  );
}
