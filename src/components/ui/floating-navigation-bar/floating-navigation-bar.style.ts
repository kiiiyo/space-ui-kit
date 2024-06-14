import { cn } from '@/lib/utils';

export const containerStyle = cn(
  'fixed',
  'max-w-[calc(100vw-32px)]',
  'overflow-auto',
  'bottom-12',
  'z-10',
  'left-1/2',
  '-translate-x-1/2',
  'shadow-lg',
  'rounded-full',
  'bg-card/70',
  'backdrop-blur',
  'border',
);

export const innerStyle = cn(
  'relative',
  'flex',
  'w-max',
  'items-center',
  'gap-1',
  'overflow-hidden',
  'p-1',
  'lg:gap-2',
  'lg:p-2',
);

export const navigationItemStyle = cn(
  'inline-flex',
  'items-center',
  'justify-center',
  'whitespace-nowrap',
  'text-sm',
  'font-medium',
  'ring-offset-background',
  'transition-colors',
  'focus-visible:outline-none',
  'focus-visible:ring-2',
  'focus-visible:ring-ring',
  'focus-visible:ring-offset-2',
  'disabled:pointer-events-none',
  'disabled:opacity-50',
  'h-10',
  'w-10',
  'shrink-0',
  'rounded-full',
  'text-muted-foreground',
  'hover:bg-accent',
  'hover:text-accent-foreground',
);
