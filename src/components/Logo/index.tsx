import { TimerIcon } from 'lucide-react';
import styles from './styles.module.css';

export function Logo() {
  return (
    <div className={styles.logo}>
      <TimerIcon />
      <span className={styles.logoLink}>Chonos</span>
    </div>
  )
}
