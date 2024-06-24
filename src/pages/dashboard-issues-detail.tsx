import { Helmet } from 'react-helmet-async';
import { DashboardIssuesDetailPageComponent } from '@/components/page';

export function DashboardIssuesDetailPage() {
  return (
    <>
      <Helmet>
        <title>Issues detail | Dashboard - Space UI Kit</title>
      </Helmet>
      <DashboardIssuesDetailPageComponent />
    </>
  );
}
