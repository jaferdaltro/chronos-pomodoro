import { HistoryIcon, HomeIcon, SnailIcon, SunIcon, TimerIcon } from 'lucide-react';
import styles from './styles.module.css';

export function Menu() {
  return (

    <nav className={styles.menu}>
      <a className={styles.menuLink} href="#">
        <HomeIcon />
      </a>
      <a className={styles.menuLink} href="#">
        <HistoryIcon />
      </a>
      <a className={styles.menuLink} href="#">
        <SnailIcon />
      </a>
      <a className={styles.menuLink} href="#">
        <SunIcon />
      </a>
    </nav>


  )
}
