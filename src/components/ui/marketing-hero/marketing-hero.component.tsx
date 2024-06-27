import { GitHubIcon, ComputerDesktopIcon } from '@/components/ui/icon';
import styles from './marketing-hero.module.scss';

import {
  containerStyle,
  titleStyle,
  descriptionStyle,
  buttonGroupStyle,
  buttonStyle,
  availableContainerStyle,
  availableTitleStyle,
  availableGroupStyle,
} from './marketing-hero.style';

export function MarketingHero() {
  return (
    <div className={styles.containerStyle}>
      <div className={styles.smallStarStyle} />
      <div className={styles.mediumStarStyle} />
      <div className={styles.largeStarStyle} />
      <div className={containerStyle}>
        <h1 className={titleStyle}>
          <span className="block">The UI Component Kit</span>
          <span className="block">Boost your building application</span>
        </h1>
        <p className={descriptionStyle}>
          <span className="inline md:block">
            The starting point for your next project is based on Tailwind CSS.
          </span>
          <span className="inline md:block">
            Rapidly build modern web application.
          </span>
        </p>
        <div className={buttonGroupStyle}>
          <a href="/dashboard" className={buttonStyle}>
            <ComputerDesktopIcon className="mr-2 size-5" />
            <span>Preview</span>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/kiiiyo/space-ui-kit"
            className={buttonStyle}
          >
            <GitHubIcon className="mr-2 size-5" />
            <span>GitHub</span>
          </a>
        </div>
        <div className={availableContainerStyle}>
          <h2 className={availableTitleStyle}>AVAILABLE FOR</h2>
          <div className={availableGroupStyle}>
            <img src="/assets/icons/react.svg" alt="React" className="size-8" />
            <img
              src="/assets/icons/typescript.svg"
              alt="TypeScript"
              className="size-8"
            />
            <img src="/assets/icons/vite.svg" alt="Vite" className="size-8" />
          </div>
        </div>
      </div>
    </div>
  );
}
