import { cn } from '@/lib/utils';

export const containerStyle = cn('flex', 'flex-auto', 'flex-col', 'min-h-full');

export const headerStyle = cn('flex', 'w-full', 'items-center', 'top-0', 'left-0', 'lg:fixed');

export const headerInnerStyle = cn('flex', 'flex-col', 'justify-center', 'h-16', 'w-full', 'px-4', 'lg:h-20');

export const mainStyle = cn('flex', 'h-full', 'flex-auto', 'flex-col', 'md:flex-row');
