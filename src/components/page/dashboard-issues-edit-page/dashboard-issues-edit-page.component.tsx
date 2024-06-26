import { useCallback } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CogIcon } from '@/components/ui/icon';

import { DashboardLayout } from '@/components/layout';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

import { generateMockEditIssue } from './dashboard-issues-edit-page.mock';

const formSchema = z.object({
  title: z.string(),
  description: z.string(),
  singleLabel: z.string(),
  multipleLabels: z.array(z.string()),
});

export type FormSchemaType = z.infer<typeof formSchema>;

export function DashboardIssuesEditPageComponent() {
  /* @todo  make presenter */
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    /* @todo Replace for Mock Service Worker */
    defaultValues: generateMockEditIssue(),
  });

  const { watch, setValue, handleSubmit } = form;

  const { multipleLabels, singleLabel } = watch();

  const onSubmit = useCallback((data: FormSchemaType) => {
    console.log('submit', data);
  }, []);

  return (
    <DashboardLayout>
      <div className="container px-0 pb-8 pt-6">
        {/* Page Header */}
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Edit issue</h2>
          </div>
        </div>
        <div className="mt-6">
          <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col justify-between gap-x-0 gap-y-6 lg:flex-row lg:gap-x-6 lg:gap-y-0">
                <div className="flex w-full flex-col gap-y-6">
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base font-bold">Add a title</FormLabel>
                        <FormControl>
                          <Input placeholder="Title" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base font-bold">Add a description</FormLabel>
                        <FormControl>
                          <Textarea className="min-h-64" placeholder="Description" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="hidden justify-end lg:flex">
                    <Button type="submit">Update Issue</Button>
                  </div>
                </div>
                <div className="w-full lg:max-w-64">
                  <aside>
                    <div className="border-b pb-4">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            className="mb-2 inline-flex w-full justify-between rounded-none px-0 transition-none hover:bg-inherit"
                            variant="ghost"
                          >
                            <span className="text-sm font-medium">Single Label</span>
                            <CogIcon className="ml-1 size-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-72" align="end">
                          {singleLabel !== '' && (
                            <DropdownMenuItem
                              onClick={() => {
                                setValue('singleLabel', '');
                              }}
                              className="cursor-pointer"
                            >
                              Reset to default
                            </DropdownMenuItem>
                          )}

                          <DropdownMenuItem
                            onClick={() => {
                              setValue('singleLabel', 'singleLabelA');
                            }}
                            className="cursor-pointer"
                          >
                            Single Label A
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            className="cursor-pointer"
                            onClick={() => {
                              setValue('singleLabel', 'singleLabelB');
                            }}
                          >
                            Single Label B
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            className="cursor-pointer"
                            onClick={() => {
                              setValue('singleLabel', 'singleLabelC');
                            }}
                          >
                            Single Label C
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
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
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            className="mb-2 inline-flex w-full justify-between rounded-none px-0 transition-none hover:bg-inherit"
                            variant="ghost"
                          >
                            <span className="text-sm font-medium">Multiple Label</span>
                            <CogIcon className="ml-1 size-4" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-72 p-1" align="end">
                          <ToggleGroup
                            type="multiple"
                            defaultValue={form.getValues('multipleLabels')}
                            className="flex-col"
                            onValueChange={(value) => {
                              form.setValue('multipleLabels', value);
                            }}
                          >
                            <ToggleGroupItem value="multipleLabelA" className="flex w-full justify-start">
                              Multiple Label A
                            </ToggleGroupItem>
                            <ToggleGroupItem value="multipleLabelB" className="flex w-full justify-start">
                              Multiple Label B
                            </ToggleGroupItem>
                            <ToggleGroupItem value="multipleLabelC" className="flex w-full justify-start">
                              Multiple Label C
                            </ToggleGroupItem>
                          </ToggleGroup>
                        </PopoverContent>
                      </Popover>
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
                <div className="lg:hidden">
                  <Button type="submit">Update Issue</Button>
                </div>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </DashboardLayout>
  );
}
