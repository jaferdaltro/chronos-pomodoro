import type { HomeProps } from '../../pages/Home';
import style from './styles.module.css';

export function CountDown({ state }: HomeProps) {
  return (
    <div className={style.container}>{state.formattedSecondsRemaining}</div>
  );
}
