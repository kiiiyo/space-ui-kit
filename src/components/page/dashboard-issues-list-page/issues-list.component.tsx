/* eslint-disable jsx-a11y/control-has-associated-label */
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import {
  DotsHorizontalIcon,
  ChevronSortIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  AngleLeftIcon,
  AngleRightIcon,
} from '@/components/ui/icon';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';

import {
  containerStyle,
  headStyle,
  headTableRowStyle,
  headTableHeaderStyle,
  bodyStyle,
  bodyTableRowStyle,
  labelStyle,
} from './issues-list.style';

import { issuesListMock } from './issues-list.mock';
import { useIssuesListPresenter } from './issues-list.presenter';

export function IssuesList() {
  const { onClickNavigateToDetail, onClickNavigateToEdit } = useIssuesListPresenter();
  return (
    <>
      <div className="mt-4 rounded-md border">
        <div className="relative w-full overflow-auto">
          <table className={containerStyle}>
            <thead className={headStyle}>
              <tr className={headTableRowStyle}>
                <th className={headTableHeaderStyle} colSpan={1}>
                  <label htmlFor="select-all">
                    <span className="sr-only">Select All</span>
                    <Checkbox id="select-all" />
                  </label>
                </th>
                <th className={headTableHeaderStyle} colSpan={1}>
                  <div className="w-[80px]">ID</div>
                </th>
                <th className={headTableHeaderStyle} colSpan={1}>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="ghost" type="button">
                        <span>Title</span>
                        <ChevronSortIcon className="size-4" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="flex w-[64] flex-col justify-start p-0">
                      <Button variant="ghost" className="inline-flex flex-row justify-start">
                        <ArrowUpIcon className="size-4" />
                        <span>Asc</span>
                      </Button>
                      <Button variant="ghost" className="inline-flex flex-row justify-start">
                        <ArrowDownIcon className="size-4" />
                        <span>Desc</span>
                      </Button>
                    </PopoverContent>
                  </Popover>
                </th>
                <th className={headTableHeaderStyle} colSpan={1}>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="ghost" type="button">
                        <span>Label</span>
                        <ChevronSortIcon className="size-5" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="flex w-24 flex-col justify-between p-0">
                      <Button variant="ghost" className="inline-flex flex-row justify-start px-2">
                        <ArrowUpIcon className="mr-1 size-5" />
                        <span>Asc</span>
                      </Button>
                      <Button variant="ghost" className="inline-flex flex-row justify-start px-2">
                        <ArrowDownIcon className="mr-1 size-5" />
                        <span>Desc</span>
                      </Button>
                    </PopoverContent>
                  </Popover>
                </th>
                <th className={headTableHeaderStyle} colSpan={1}>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="ghost" type="button">
                        <span>Date</span>
                        <ChevronSortIcon className="size-5" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="flex w-24 flex-col justify-between p-0">
                      <Button variant="ghost" className="inline-flex flex-row justify-start px-2">
                        <ArrowUpIcon className="mr-1 size-5" />
                        <span>Asc</span>
                      </Button>
                      <Button variant="ghost" className="inline-flex flex-row justify-start px-2">
                        <ArrowDownIcon className="mr-1 size-5" />
                        <span>Desc</span>
                      </Button>
                    </PopoverContent>
                  </Popover>
                </th>
                <th className={headTableHeaderStyle} colSpan={1}>
                  <span className="sr-only">Action Menu</span>
                </th>
              </tr>
            </thead>
            <tbody className={bodyStyle}>
              {issuesListMock.map(({ id, title, date }) => (
                <tr key={id} className={bodyTableRowStyle}>
                  <td className="p-2 align-middle">
                    <label htmlFor={`select-${id}`}>
                      <span className="sr-only">{`Select ${id}`}</span>
                      <Checkbox id={`select-${id}`} />
                    </label>
                  </td>
                  <td className="p-2 align-middle">
                    <div className="w-[80px]">{id}</div>
                  </td>
                  <td className="p-2 align-middle">
                    <div className="flex space-x-2">
                      <span className="max-w-[500px] truncate font-medium">{title}</span>
                    </div>
                  </td>
                  <td className="p-2 align-middle">
                    <div className={labelStyle}>Label Name</div>
                  </td>
                  <td className="p-2 align-middle">
                    <span>{date}</span>
                  </td>

                  <td className="p-2 align-middle">
                    <div className="flex items-center justify-center">
                      <span className="sr-only">Open menu</span>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button type="button" variant="ghost">
                            <DotsHorizontalIcon className="size-6" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem
                            onClick={() => {
                              onClickNavigateToDetail();
                            }}
                          >
                            <span>View</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() => {
                              onClickNavigateToEdit();
                            }}
                          >
                            <span>Edit</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <span>Delete</span>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* @todo setup style */}
      <div className="mt-4 flex items-center justify-end">
        <div className="flex-1 text-sm text-muted-foreground">
          <p>0 of 0 row(s) selected.</p>
        </div>
        <div className="flex items-center">
          <div className="flex items-center gap-x-4">
            <p className="text-sm font-medium">Rows per page</p>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" type="button">
                  <span className="mr-2">10</span>
                  <ChevronSortIcon className="size-4" />
                </Button>
              </PopoverTrigger>
              <PopoverContent side="top" className="flex w-32 flex-col justify-start p-0">
                <Button variant="ghost" className="inline-flex flex-row justify-start">
                  <span>10</span>
                </Button>
                <Button variant="ghost" className="inline-flex flex-row justify-start">
                  <span>20</span>
                </Button>
                <Button variant="ghost" className="inline-flex flex-row justify-start">
                  <span>30</span>
                </Button>
                <Button variant="ghost" className="inline-flex flex-row justify-start">
                  <span>40</span>
                </Button>
                <Button variant="ghost" className="inline-flex flex-row justify-start">
                  <span>50</span>
                </Button>
              </PopoverContent>
            </Popover>
          </div>
          <div className="flex w-[100px] items-center justify-center text-sm font-medium">Page 1 of 2</div>
          <div className="flex items-center gap-x-2">
            <Button variant="outline" type="button" disabled className="size-8 p-0">
              <AngleLeftIcon className="size-4" />
            </Button>
            <Button variant="outline" type="button" className="size-8 p-0">
              <AngleRightIcon className="size-4" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
