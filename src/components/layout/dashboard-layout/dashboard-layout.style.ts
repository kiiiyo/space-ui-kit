import { cn } from '@/lib/utils';

export const containerStyle = cn('h-full', 'lg:ml-72', 'xl:ml-80');

export const headerStyle = cn(
  'contents',
  'lg:pointer-events-none',
  'lg:fixed',
  'lg:inset-0',
  'lg:z-40',
  'lg:flex',
);

export const headerInnerStyle = cn(
  'contents',
  'lg:pointer-events-auto',
  'lg:block',
  'lg:w-72',
  'lg:overflow-y-auto',
  'lg:border-r',
  'lg:px-6',
  'lg:pb-8',
  'lg:pt-4',
  'xl:w-80',
  'lg:border-zinc-900/10',
  'lg:dark:border-white/20',
);

export const headerSiteLogoStyle = cn('gap-x-2', 'items-center');

export const headerSiteLogoIconStyle = cn(
  'flex',
  'size-6',
  'justify-center',
  'items-center',
  'text-lg',
);

export const headerSiteLogoTypographyStyle = cn(
  'self-center',
  'text-lg',
  'font-semibold',
  'whitespace-nowrap',
  'dark:text-white',
);

export const navigationBarStyle = cn(
  'fixed',
  'inset-x-0',
  'top-0',
  'z-50',
  'flex',
  'h-14',
  'items-center',
  'justify-between',
  'gap-12',
  'px-4',
  'transition',
  'sm:px-6',
  'lg:left-72',
  'lg:z-30',
  'lg:px-8',
  'xl:left-80',
  'border-b',
  'border-solid',
  'border-zinc-900/10',
  'backdrop-blur-sm',
  'lg:left-72',
  'xl:left-80',
  'bg-white',
  'dark:bg-black',
  'dark:border-white/20',
);

export const pageNavigationDesktopDeviceLayoutStyle = cn(
  'lg:transition-none',
  'lg:duration-0',
  'lg:px-0',
  'lg:pt-0',
  'lg:bottom-auto',
  'lg:left-auto',
  'lg:top-auto',
  'lg:relative',
  'lg:block',
  'lg:shadow-none',
);

export const pageNavigationMobileDeviceLayoutStyle = cn(
  'fixed',
  'bottom-0',
  'left-0',
  'top-14',
  'z-50',
  'bg-white',
  'w-full',
  'ease-in-out',
  'min-[416px]:max-w-sm',
  'px-4',
  'shadow-lg',
  'duration-300',
  'shadow-zinc-900/10',
);

export const buttonStyle = cn(
  'flex',
  'size-8',
  'items-center',
  'justify-center',
  'rounded-md',
  'text-muted-foreground',
  'transition',
  'hover:bg-accent',
  'hover:text-accent-foreground',
);

export const overlayStyle = cn(
  'fixed',
  'inset-0',
  'top-14',
  'cursor-pointer',
  'bg-zinc-400/20',
  'opacity-100',
  'backdrop-blur-sm',
  'dark:bg-black/40',
  'lg:hidden',
);
