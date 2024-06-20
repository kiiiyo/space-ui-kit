import { Helmet } from 'react-helmet-async';
import { SignInPageComponent } from '@/components/page';

export function SignInPage() {
  return (
    <>
      <Helmet>
        <title>Sign in | Space UI Kit</title>
      </Helmet>
      <SignInPageComponent />
    </>
  );
}
