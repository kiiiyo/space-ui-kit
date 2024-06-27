import { AuthorizeLayout } from '@/components/layout';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import { useSignInPagePresenter } from './sign-in-page.presenter';

function Hero() {
  return (
    <>
      <h3 className="text-3xl font-bold text-white">Hi, Welcome</h3>
      <p className="mt-4 text-base text-white">DescriptionText</p>
      <p className="mt-12 text-8xl">👩‍🚀</p>
    </>
  );
}

export function SignInPageComponent() {
  const { form, onSubmitSignIn } = useSignInPagePresenter();

  return (
    <AuthorizeLayout authorizeHeroElement={<Hero />}>
      <div className="flex w-full max-w-md flex-col">
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-bold">Sign in your account</h1>
          <p>DescriptionText</p>
        </div>
      </div>
      <Form {...form}>
        <form
          onSubmit={onSubmitSignIn}
          autoComplete="off"
          className="mt-6 flex w-full max-w-md flex-col"
        >
          <div className="flex flex-col gap-y-6">
            <div>
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="Username" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div>
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit">Sign in</Button>
          </div>
        </form>
      </Form>
    </AuthorizeLayout>
  );
}
