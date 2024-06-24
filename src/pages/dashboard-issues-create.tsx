import { Helmet } from 'react-helmet-async';
import { DashboardIssuesCreatePageComponent } from '@/components/page';

export function DashboardIssuesCreatePage() {
  return (
    <>
      <Helmet>
        <title>Issues create | Dashboard - Space UI Kit</title>
      </Helmet>
      <DashboardIssuesCreatePageComponent />
    </>
  );
}
