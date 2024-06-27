import { EditorContent } from '@tiptap/react';
import { Button } from '@/components/ui/button';

import { DashboardLayout } from '@/components/layout';
import { useDashboardIssuesDetailPagePresenter } from './dashboard-issues-detail-page.presenter';

export function DashboardIssuesDetailPageComponent() {
  /* prettier-ignore */
  const { title, singleLabel, multipleLabels, generatedDescriptionEditor, onClickNavigateToEdit } = useDashboardIssuesDetailPagePresenter();

  return (
    <DashboardLayout>
      <div className="container px-0 pb-8 pt-6">
        {/* Page Header */}
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
          </div>
          <div>
            <Button type="button" variant="secondary" onClick={onClickNavigateToEdit}>
              Edit
            </Button>
          </div>
        </div>
        <div className="mt-6">
          <div className="flex flex-col justify-between gap-x-0 gap-y-6 lg:flex-row lg:gap-x-6 lg:gap-y-0">
            <div className="flex w-full flex-col gap-y-6">
              <div>
                <EditorContent className="editor-view-body" editor={generatedDescriptionEditor} />
              </div>
            </div>
            <div className="w-full lg:max-w-64">
              <aside>
                <div className="border-b pb-4">
                  <div className="mb-2 inline-flex w-full justify-between rounded-none px-0 transition-none hover:bg-inherit">
                    <span className="text-sm font-medium">Single Label</span>
                  </div>

                  <div className="flex flex-row flex-wrap">
                    {singleLabel !== '' ? (
                      <span className="inline-flex items-center rounded-md bg-zinc-100 px-1.5 py-0.5 text-sm/5 font-medium group-data-[hover]:bg-zinc-200 sm:text-xs/5 forced-colors:outline">
                        {singleLabel}
                      </span>
                    ) : (
                      <span className="text-sm text-inherit">None yet</span>
                    )}
                  </div>
                </div>
                <div className="border-b pb-4 pt-2">
                  <div className="mb-2 inline-flex w-full justify-between rounded-none px-0 transition-none hover:bg-inherit">
                    <span className="text-sm font-medium">Multiple Label</span>
                  </div>
                  <div className="flex flex-row flex-wrap gap-2">
                    {multipleLabels.length > 0 ? (
                      multipleLabels.map((label) => (
                        <span
                          key={label}
                          className="inline-flex items-center rounded-md bg-zinc-100 px-1.5 py-0.5 text-sm/5 font-medium group-data-[hover]:bg-zinc-200 sm:text-xs/5 forced-colors:outline"
                        >
                          {label}
                        </span>
                      ))
                    ) : (
                      <span className="text-sm text-inherit">None yet</span>
                    )}
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
