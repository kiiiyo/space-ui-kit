import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export function useIssuesListPresenter() {
  const navigate = useNavigate();

  const onClickNavigateToDetail = useCallback(() => {
    navigate('/dashboard/issues/detail');
  }, [navigate]);

  const onClickNavigateToEdit = useCallback(() => {
    navigate('/dashboard/issues/edit');
  }, [navigate]);

  return { onClickNavigateToDetail, onClickNavigateToEdit } as const;
}
