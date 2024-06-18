import { cn } from '@/lib/utils';
import { DocumentIcon } from '@/components/ui/icon';

import {
  pageNavigationTitleStyle,
  pageNavigationTitleTextStyle,
  pageNavigationGroupStyle,
  pageNavigationListStyle,
  pageNavigationItemStyle,
  pageNavigationDefaultAnchorStyle,
  pageNavigationCurrentAnchorStyle,
  pageNavigationAnchorIconStyle,
  pageNavigationAnchorTextStyle,
} from './page-navigation.style';

type Navigation = {
  link: string;
  text: string;
  current: boolean;
};

type PageNavigationProps = {
  title?: string;
  pageNavigations: Navigation[];
};

export function PageNavigation({ title, pageNavigations }: PageNavigationProps) {
  return (
    <>
      {title && (
        <div className={pageNavigationTitleStyle}>
          <span className={pageNavigationTitleTextStyle}>{title}</span>
        </div>
      )}
      <div className={pageNavigationGroupStyle}>
        {pageNavigations.length > 0 && (
          <ul className={pageNavigationListStyle}>
            {pageNavigations.map(({ text, link, current }) => (
              <li key={text} className={pageNavigationItemStyle}>
                <a
                  className={cn(pageNavigationDefaultAnchorStyle, current ? pageNavigationCurrentAnchorStyle : '')}
                  href={link}
                >
                  <span className={pageNavigationAnchorIconStyle}>
                    <DocumentIcon className="size-5" />
                  </span>
                  <span className={pageNavigationAnchorTextStyle}>{text}</span>
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
