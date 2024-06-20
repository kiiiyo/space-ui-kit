import { cn } from '@/lib/utils';

export const containerStyle = cn('flex', 'flex-auto', 'flex-col', 'min-h-full');

export const headerStyle = cn('flex', 'w-full', 'items-center', 'top-0', 'left-0', 'lg:fixed');

export const headerInnerStyle = cn(
  'flex',
  'flex-col',
  'items-center',
  'md:items-start',
  'justify-center',
  'h-16',
  'w-full',
  'px-4',
  'lg:h-20',
);

export const mainStyle = cn('flex', 'h-full', 'flex-auto', 'flex-col', 'md:flex-row');

export const heroStyle = cn(
  'hidden',
  'h-svh',
  'w-full',
  'max-w-md',
  'lg:max-w-lg',
  'xl:max-w-2xl',
  'flex-col',
  'lg:flex',
);

export const heroInnerStyle = cn('flex', 'h-svh', 'flex-col', 'items-center', 'justify-center');

export const contentStyle = cn(
  'flex',
  'flex-auto',
  'flex-col',
  'items-center',
  'justify-center',
  'px-4',
  'py-24',
  'lg:px-0',
);
