import clsx from 'clsx';

export const containerStyle = clsx('relative', 'flex', 'flex-col', 'min-h-screen', 'bg-background');

export const headerContainerStyle = clsx(
  'sticky',
  'top-0',
  'z-50',
  'w-full',
  'border-b',
  'border-border/40',
  'bg-background/95',
  'backdrop-blur',
  'supports-[backdrop-filter]:bg-background/60',
);
