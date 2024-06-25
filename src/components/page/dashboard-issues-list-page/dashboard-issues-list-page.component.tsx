import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { DashboardLayout } from '@/components/layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { generateMockIssues } from './issues-list.mock';
import { IssuesList } from './issues-list.component';

export function DashboardIssuesListPageComponent() {
  /* @todo: move to presenter */
  const navigate = useNavigate();
  const onClickNavigateToCreate = useCallback(() => {
    navigate('/dashboard/issues/new');
  }, [navigate]);

  const issues = generateMockIssues();

  return (
    <DashboardLayout>
      <div className="container pb-8 pt-6">
        {/* Page Header */}
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Issues List</h2>
            <p className="text-muted-foreground">Description Text</p>
          </div>
          <div>
            <Button type="button" onClick={onClickNavigateToCreate}>
              New Issue
            </Button>
          </div>
        </div>
        {/* Page Body */}
        <div className="mt-6">
          <div className="flex items-center justify-between">
            <div>
              <Input placeholder="Filter issues..." />
            </div>
          </div>
          <IssuesList issues={issues} />
        </div>
      </div>
    </DashboardLayout>
  );
}
