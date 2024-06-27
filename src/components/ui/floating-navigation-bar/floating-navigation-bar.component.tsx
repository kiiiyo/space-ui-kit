import {
  HomeIcon,
  SunIcon,
  MoonIcon,
  ComputerDesktopIcon,
  UserIcon,
  ArrowRightEndOnRectangleIcon,
} from '@/components/ui/icon';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';

import { useFloatingNavigationBarPresenter } from './floating-navigation-bar.presenter';

import {
  containerStyle,
  innerStyle,
  navigationItemStyle,
} from './floating-navigation-bar.style';

export function FloatingNavigationBar() {
  /* prettier-ignore */
  const { onSelectThemeStyle, onClickSignIn } = useFloatingNavigationBarPresenter();
  return (
    <div className={containerStyle}>
      <div className={innerStyle}>
        <a href="/" className={navigationItemStyle}>
          <HomeIcon className="size-6" />
          <span className="sr-only">Home</span>
        </a>
        {/**
         * FIXME: Refactoring Theme DropdownMen
         */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button type="button" className={navigationItemStyle}>
              <SunIcon className="size-6" />
              <span className="sr-only">Theme</span>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent side="bottom" sideOffset={12}>
            <DropdownMenuItem
              className="gap-2"
              onSelect={() => {
                onSelectThemeStyle('light');
              }}
            >
              <SunIcon className="size-4" />
              <span>Light</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              className="gap-2"
              onSelect={() => {
                onSelectThemeStyle('dark');
              }}
            >
              <MoonIcon className="size-4" />
              <span>Dark</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              className="gap-2"
              onSelect={() => {
                onSelectThemeStyle('system');
              }}
            >
              <ComputerDesktopIcon className="size-4" />
              <span>System</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        {/**
         * FIXME: Refactoring User DropdownMen
         */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button type="button" className={navigationItemStyle}>
              <UserIcon className="size-6" />
              <span className="sr-only">User</span>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent side="bottom" sideOffset={12}>
            <DropdownMenuItem onSelect={onClickSignIn}>
              <ArrowRightEndOnRectangleIcon className="size-6" />
              <span>Sign In</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
