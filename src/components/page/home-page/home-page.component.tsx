import { FloatingNavigationBar } from '@/components/ui/floating-navigation-bar';
import { containerStyle, headerContainerStyle } from './home-page.style';

export function HomePageComponent() {
  return (
    <>
      <div className={containerStyle}>
        <header className={headerContainerStyle}>
          <div className="container flex h-14 max-w-screen-2xl items-center">
            <div className="mr-4">
              <a className="mr-6 flex items-center space-x-2" href="/">
                <span>🚀</span>
                <span className="font-bold sm:inline-block">Space UI Kit</span>
              </a>
            </div>
          </div>
        </header>
        <main className="flex-1">
          <div className="container flex-1">Home Page</div>
        </main>
        <footer className="border-t py-6">
          <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
              &copy; Copyright 2024. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
      {/** FIXME: */}
      <FloatingNavigationBar />
    </>
  );
}
