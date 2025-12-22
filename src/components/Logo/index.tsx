import { TimerIcon } from 'lucide-react';
import styles from './styles.module.css';

export function Logo() {
  return (
    <div className={styles.logo}>
      <TimerIcon />
      <span>Chonos</span>
    </div>
  )
}
