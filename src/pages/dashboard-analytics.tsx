import { Helmet } from 'react-helmet-async';
import { DashboardAnalyticsPageComponent } from '@/components/page';

export function DashboardAnalyticsPage() {
  return (
    <>
      <Helmet>
        <title>Analytics | Dashboard - Space UI Kit</title>
      </Helmet>
      <DashboardAnalyticsPageComponent />
    </>
  );
}
