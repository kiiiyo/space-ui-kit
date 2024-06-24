import { Helmet } from 'react-helmet-async';
import { DashboardIssuesListPageComponent } from '@/components/page';

export function DashboardIssuesListPage() {
  return (
    <>
      <Helmet>
        <title>Issues list | Dashboard - Space UI Kit</title>
      </Helmet>
      <DashboardIssuesListPageComponent />
    </>
  );
}
