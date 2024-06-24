import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';

import {
  SunIcon,
  UserIcon,
  BarsIcon,
  ArrowRightStartOnRectangleIcon,
  XMarkIcon,
  MoonIcon,
  ComputerDesktopIcon,
  DocumentIcon,
} from '@/components/ui/icon';
import {
  containerStyle,
  headerStyle,
  headerInnerStyle,
  headerSiteLogoStyle,
  headerSiteLogoIconStyle,
  headerSiteLogoTypographyStyle,
  navigationBarStyle,
  pageNavigationDesktopDeviceLayoutStyle,
  pageNavigationMobileDeviceLayoutStyle,
  buttonStyle,
  overlayStyle,
} from './dashboard-layout.style';

import {
  PageNavigationTitle,
  PageNavigationList,
  PageNavigationLink,
  PageNavigationListItem,
  PageNavigationAccordion,
  PageNavigationAccordionItem,
  PageNavigationAccordionTrigger,
  PageNavigationAccordionContent,
} from './page-navigation.component';

import { useDashboardLayoutPresenter } from './dashboard-layout.presenter';

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const {
    isShowDashboardLayoutNavigationDisplay,
    isMobileDevice,
    currentPageGroup,
    onToggleDashboardLayoutNavigationDisplay,
    onSetDashboardLayoutNavigationDisplay,
    onSetTheme,
    isCurrentPath,
  } = useDashboardLayoutPresenter();

  return (
    <>
      <div className={containerStyle}>
        <header className={headerStyle}>
          <div className={headerInnerStyle}>
            <a aria-label="Home" href="/dashboard" className={cn(headerSiteLogoStyle, 'hidden', 'lg:flex')}>
              <span className={headerSiteLogoIconStyle}>🚀</span>
              <span className={headerSiteLogoTypographyStyle}>Space UI Kit</span>
            </a>
            <div className={navigationBarStyle}>
              <div className="flex items-center gap-2 lg:hidden">
                <button
                  type="button"
                  className={buttonStyle}
                  aria-label="Toggle navigation"
                  onClick={onToggleDashboardLayoutNavigationDisplay}
                >
                  {isShowDashboardLayoutNavigationDisplay ? (
                    <XMarkIcon className="size-5" />
                  ) : (
                    <BarsIcon className="size-5" />
                  )}
                </button>
                <a aria-label="Home" href="/dashboard" className={cn(headerSiteLogoStyle, 'flex', 'lg:hidden')}>
                  <span className={headerSiteLogoIconStyle}>🚀</span>
                  <span className={headerSiteLogoTypographyStyle}>Space UI Kit</span>
                </a>
              </div>
              <div className="ml-auto flex items-center gap-2">
                {/**
                 * FIXME: Refactoring Theme DropdownMen
                 */}
                <div className="flex gap-4">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button type="button" className={buttonStyle} aria-label="Switch theme">
                        <SunIcon className="size-5" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" alignOffset={-16}>
                      <DropdownMenuItem
                        className="gap-2"
                        onClick={() => {
                          onSetTheme('light');
                        }}
                      >
                        <SunIcon className="size-4" />
                        <span>Light</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className="gap-2"
                        onClick={() => {
                          onSetTheme('dark');
                        }}
                      >
                        <MoonIcon className="size-4" />
                        <span>Dark</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className="gap-2"
                        onClick={() => {
                          onSetTheme('system');
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
                      <button type="button" className={buttonStyle} aria-label="User profile">
                        <UserIcon className="size-5" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" alignOffset={-16}>
                      <DropdownMenuItem className="gap-2">
                        <ArrowRightStartOnRectangleIcon className="size-5" />
                        <span>Sign Out</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>

            <div
              className={cn(
                isMobileDevice ? pageNavigationMobileDeviceLayoutStyle : pageNavigationDesktopDeviceLayoutStyle,
                isMobileDevice && isShowDashboardLayoutNavigationDisplay ? 'left-0' : 'left-[-24rem]',
              )}
            >
              <nav>
                <PageNavigationTitle>Overview</PageNavigationTitle>
                <PageNavigationList>
                  <PageNavigationListItem>
                    <PageNavigationLink
                      iconElement={<DocumentIcon className="size-5" />}
                      current={isCurrentPath('/dashboard/overview')}
                      link="/dashboard/overview"
                    >
                      Dashboard
                    </PageNavigationLink>
                  </PageNavigationListItem>
                  <PageNavigationListItem>
                    <PageNavigationLink
                      iconElement={<DocumentIcon className="size-5" />}
                      current={isCurrentPath('/dashboard/analytics')}
                      link="/dashboard/analytics"
                    >
                      Analytics
                    </PageNavigationLink>
                  </PageNavigationListItem>
                </PageNavigationList>

                <PageNavigationTitle>Management</PageNavigationTitle>
                <div className="flex flex-col gap-y-2">
                  <PageNavigationAccordion type="single" defaultValue={currentPageGroup} collapsible>
                    <PageNavigationAccordionItem value="users">
                      <PageNavigationAccordionTrigger iconElement={<DocumentIcon className="size-5" />} text="Users" />
                      <PageNavigationAccordionContent>
                        <PageNavigationLink
                          current={isCurrentPath('/dashboard/users/list')}
                          link="/dashboard/users/list"
                        >
                          List
                        </PageNavigationLink>
                        <PageNavigationLink
                          current={isCurrentPath('/dashboard/users/detail')}
                          link="/dashboard/users/detail"
                        >
                          Detail
                        </PageNavigationLink>
                        <PageNavigationLink
                          current={isCurrentPath('/dashboard/users/create')}
                          link="/dashboard/users/create"
                        >
                          Create
                        </PageNavigationLink>
                        <PageNavigationLink
                          current={isCurrentPath('/dashboard/users/edit')}
                          link="/dashboard/users/edit"
                        >
                          Edit
                        </PageNavigationLink>
                      </PageNavigationAccordionContent>
                    </PageNavigationAccordionItem>
                    <PageNavigationAccordionItem value="issues">
                      <PageNavigationAccordionTrigger iconElement={<DocumentIcon className="size-5" />} text="Issues" />
                      <PageNavigationAccordionContent>
                        <PageNavigationLink
                          current={isCurrentPath('/dashboard/issues/list')}
                          link="/dashboard/issues/list"
                        >
                          List
                        </PageNavigationLink>
                        <PageNavigationLink
                          current={isCurrentPath('/dashboard/issues/detail')}
                          link="/dashboard/issues/detail"
                        >
                          Detail
                        </PageNavigationLink>
                        <PageNavigationLink
                          current={isCurrentPath('/dashboard/issues/create')}
                          link="/dashboard/issues/create"
                        >
                          Create
                        </PageNavigationLink>
                        <PageNavigationLink
                          current={isCurrentPath('/dashboard/issues/edit')}
                          link="/dashboard/issues/edit"
                        >
                          Edit
                        </PageNavigationLink>
                      </PageNavigationAccordionContent>
                    </PageNavigationAccordionItem>
                  </PageNavigationAccordion>
                  <PageNavigationLink
                    current={isCurrentPath('/dashboard/settings')}
                    iconElement={<DocumentIcon className="size-5" />}
                    link="/dashboard/settings"
                  >
                    Settings
                  </PageNavigationLink>
                </div>
              </nav>
            </div>
          </div>
        </header>
        <div className="relative flex h-full flex-col px-4 pt-14 sm:px-6 lg:px-8">{children}</div>
      </div>
      {isShowDashboardLayoutNavigationDisplay && (
        <div
          aria-hidden
          onClick={() => {
            onSetDashboardLayoutNavigationDisplay(false);
          }}
          className={overlayStyle}
        />
      )}
    </>
  );
}
