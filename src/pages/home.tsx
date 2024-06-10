import { Helmet } from 'react-helmet-async';
import { HomePageComponent } from '@/components/page';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home | Space UI Kit</title>
      </Helmet>
      <HomePageComponent />
    </>
  );
}
