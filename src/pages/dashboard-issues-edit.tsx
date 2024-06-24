import { Helmet } from 'react-helmet-async';
import { DashboardIssuesEditPageComponent } from '@/components/page';

export function DashboardIssuesEditPage() {
  return (
    <>
      <Helmet>
        <title>Issues edit | Dashboard - Space UI Kit</title>
      </Helmet>
      <DashboardIssuesEditPageComponent />
    </>
  );
}
