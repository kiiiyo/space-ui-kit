import { FC } from 'react' //
//
import styles from './SpaceContainer.module.scss'

export const SpaceContainer: FC = ({ children }) => {
  return (
    <div className={styles.root}>
      <div className={styles.smallStars}></div>
      <div className={styles.mediumStars}></div>
      <div className={styles.bigStars}></div>
      {children}
    </div>
  )
}
