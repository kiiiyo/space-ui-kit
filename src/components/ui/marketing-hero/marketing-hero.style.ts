import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

export const containerStyle = cn(
  // Base styles
  'flex',
  'flex-col',
  'items-center',
  'py-10',
  'gap-y-6',
  // Small Mobile device style
  // Medium Mobile device style
  'md:py-12',
  // Desktop device style
  'lg:py-40',
);

export const titleStyle = cn(
  // Base styles
  'animate-slide-in-bottom',
  'text-center',
  'text-2xl',
  'font-extrabold',
  'tracking-tight',
  'text-white',
  'opacity-0',
  '[--slide-in-delay:300ms]',
  // Small Mobile device style
  // Medium Mobile device style
  'md:text-3xl',
  // Desktop device style
  'lg:text-5xl',
  'lg:leading-[1.1]',
);

export const descriptionStyle = cn(
  'animate-slide-in-bottom',
  'text-center',
  'text-sm',
  'text-white',
  'opacity-0',
  '[--slide-in-delay:500ms]',
  'px-6',
  'md:text-lg',
);

export const buttonGroupStyle = cn(
  'flex',
  'w-full',
  'flex-col',
  'items-center',
  'justify-center',
  'gap-y-6',
  'md:flex',
  'md:flex-row',
  'md:gap-x-4',
  'md:gap-y-0',
  'md:py-4',
);

export const buttonStyle = cn(
  buttonVariants(),
  'w-2/5',
  'bg-white',
  'hover:bg-white/80',
  'text-gray-800',
  'hover:text-gray-800/80',
  'sm:w-auto',
);

export const availableContainerStyle = cn('flex', 'flex-col', 'gap-y-4');

export const availableTitleStyle = cn(
  'text-center',
  'text-sm',
  'font-bold',
  'text-white',
);

export const availableGroupStyle = cn(
  'flex',
  'flex-row',
  'items-center',
  'gap-6',
);
