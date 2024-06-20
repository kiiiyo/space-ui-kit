import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export function useSignInPagePresenter() {
  const navigate = useNavigate();
  const form = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
  });

  /**
   * @todo Implement sign in logic
   */
  const onSubmitSignIn = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      navigate('/dashboard');
    },
    [navigate],
  );

  return { form, onSubmitSignIn } as const;
}
