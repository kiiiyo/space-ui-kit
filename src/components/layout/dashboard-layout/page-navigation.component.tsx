import { cn } from '@/lib/utils';

import {
  Accordion as PageNavigationAccordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import {
  pageNavigationTitleStyle,
  pageNavigationTitleTextStyle,
  pageNavigationListStyle,
  pageNavigationItemStyle,
  pageNavigationDefaultAnchorStyle,
  pageNavigationCurrentAnchorStyle,
  pageNavigationAnchorIconStyle,
  pageNavigationAnchorTextStyle,
  pageNavigationAccordionTriggerDefaultStyle,
} from './page-navigation.style';

type PageNavigationTitleProps = {
  children: React.ReactNode;
  className?: string;
};

function PageNavigationTitle({ children, className }: PageNavigationTitleProps) {
  return (
    <div className={cn(pageNavigationTitleStyle, className)}>
      <span className={pageNavigationTitleTextStyle}>{children}</span>
    </div>
  );
}

function PageNavigationList({ children }: { children: React.ReactNode }) {
  return <ul className={pageNavigationListStyle}>{children}</ul>;
}

function PageNavigationListItem({ children }: { children: React.ReactNode }) {
  return <li className={pageNavigationItemStyle}>{children}</li>;
}

type PageNavigationLinkProps = {
  children: React.ReactNode;
  link: string;
  current: boolean;
  className?: string;
  iconElement?: React.ReactNode;
};

function PageNavigationLink({ children, link, current, className, iconElement }: PageNavigationLinkProps) {
  return (
    <a
      className={cn(pageNavigationDefaultAnchorStyle, className, current ? pageNavigationCurrentAnchorStyle : '')}
      href={link}
    >
      {iconElement && <span className={pageNavigationAnchorIconStyle}>{iconElement}</span>}
      <span className={pageNavigationAnchorTextStyle}>{children}</span>
    </a>
  );
}

type PageNavigationAccordionItemProps = {
  value: string;
  className?: string;
  children: React.ReactNode;
};

function PageNavigationAccordionItem({ children, className, value }: PageNavigationAccordionItemProps) {
  return (
    <AccordionItem value={value} className={cn('border-0', className)}>
      {children}
    </AccordionItem>
  );
}

type PageNavigationAccordionTriggerProps = {
  iconElement?: React.ReactNode;
  className?: string;
  text: string;
};

function PageNavigationAccordionTrigger({ text, className, iconElement }: PageNavigationAccordionTriggerProps) {
  return (
    <AccordionTrigger className={cn(pageNavigationAccordionTriggerDefaultStyle, className)}>
      {iconElement && <span className="inline-flex size-6 items-center justify-center">{iconElement}</span>}
      <span className="ml-2 mr-auto">{text}</span>
    </AccordionTrigger>
  );
}

function PageNavigationAccordionContent({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <AccordionContent className={cn('ml-4 flex flex-col gap-y-2 border-l p-0 pl-4', className)}>
      {children}
    </AccordionContent>
  );
}

export {
  PageNavigationTitle,
  PageNavigationList,
  PageNavigationListItem,
  PageNavigationLink,
  PageNavigationAccordion,
  PageNavigationAccordionItem,
  PageNavigationAccordionTrigger,
  PageNavigationAccordionContent,
};
