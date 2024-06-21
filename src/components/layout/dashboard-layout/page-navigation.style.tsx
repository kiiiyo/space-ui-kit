import { cn } from '@/lib/utils';

export const pageNavigationTitleStyle = cn('pt-4', 'px-2', 'pb-2');

export const pageNavigationTitleTextStyle = cn('text-sm', 'font-bold', 'text-gray-400');

export const pageNavigationGroupStyle = cn('w-full');

export const pageNavigationListStyle = cn('flex', 'flex-col', 'gap-y-2');

export const pageNavigationItemStyle = cn('flex', 'flex-col');

export const pageNavigationDefaultAnchorStyle = cn(
  'inline-flex',
  'items-center',
  'justify-center',
  'gap-x-2',
  'py-2',
  'px-2',
  'rounded-md',
  'whitespace-nowrap',
  'font-medium',
  'text-zinc-500',
  'dark:hover:text-zinc-500',
  'transition-colors',
  'transition-all',
  'w-full',
  'hover:bg-zinc-100',
);

export const pageNavigationCurrentAnchorStyle = cn('inline-flex', 'font-bold', 'bg-zinc-100', 'hover:bg-zinc-200');

export const pageNavigationAnchorIconStyle = cn('size-6', 'inline-flex', 'shrink-0', 'items-center', 'justify-center');

export const pageNavigationAnchorTextStyle = cn('text-sm', 'flex-auto');

export const pageNavigationAccordionTriggerDefaultStyle = cn(
  'h-10',
  'p-0',
  'px-2',
  'text-sm',
  'font-medium',
  'text-zinc-500',
  'hover:no-underline',
  'hover:bg-zinc-100',
);

export const pageNavigationAccordionTriggerCurrentStyle = cn('p-0');
