import { cn } from '@/lib/utils';

// export const containerStyle = cn('');

// w-full caption-bottom text-sm
export const containerStyle = cn('w-full', 'caption-bottom', 'text-sm');

export const headStyle = cn(
  'border-b',
  'transition-colors',
  'hover:bg-muted/50',
);

export const headTableRowStyle = cn(
  'border-b',
  'transition-colors',
  'hover:bg-muted/50',
);

export const headTableHeaderStyle = cn(
  'h-10',
  'px-2',
  'text-left',
  'align-middle',
  'font-medium',
  'text-muted-foreground',
);

export const bodyStyle = cn('[&_tr:last-child]:border-0');

export const bodyTableRowStyle = cn(
  'border-b',
  'transition-colors',
  'hover:bg-muted/50',
);

export const labelStyle = cn(
  'inline-flex',
  'items-center',
  'rounded-md',
  'border',
  'px-2.5',
  'py-0.5',
  'text-xs',
  'font-semibold',
  'text-foreground',
  'transition-colors',
  'focus:outline-none',
  'focus:ring-2',
  'focus:ring-ring',
  'focus:ring-offset-2',
);
