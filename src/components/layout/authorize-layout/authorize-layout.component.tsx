import type { ReactNode } from 'react';
import { SpaceCover } from '@/components/ui/space-cover';
import {
  containerStyle,
  headerStyle,
  headerInnerStyle,
  mainStyle,
  heroStyle,
  heroInnerStyle,
  contentStyle,
} from './authorize-layout.style';

type AuthorizeLayoutProps = {
  authorizeHeroElement?: ReactNode | Iterable<ReactNode>;
  children: React.ReactNode;
};

export function AuthorizeLayout({ authorizeHeroElement, children }: AuthorizeLayoutProps) {
  return (
    <div className={containerStyle}>
      <header className={headerStyle}>
        <div className={headerInnerStyle}>
          <a className="flex items-center" href="/">
            <span className="inline-flex size-8 items-center justify-center text-2xl">🚀</span>
            <span className="text-xl font-extrabold tracking-tighter text-gray-800 lg:text-white">Space UI Kit</span>
          </a>
        </div>
      </header>
      <main className={mainStyle}>
        <SpaceCover className={heroStyle}>
          <div className={heroInnerStyle}>{authorizeHeroElement ?? authorizeHeroElement}</div>
        </SpaceCover>
        <div className={contentStyle}>{children}</div>
      </main>
    </div>
  );
}
