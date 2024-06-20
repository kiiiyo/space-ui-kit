import { cn } from '@/lib/utils';
import styles from './space-cover.module.scss';

type SpaceCoverProps = {
  className: string;
  children: React.ReactNode;
};

export function SpaceCover({ children, className }: SpaceCoverProps) {
  return (
    <div className={cn(className, styles.containerStyle)}>
      <div className={styles.smallStarStyle} />
      <div className={styles.mediumStarStyle} />
      <div className={styles.largeStarStyle} />
      {children}
    </div>
  );
}
