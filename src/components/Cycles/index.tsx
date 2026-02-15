import style from './styles.module.css';

export function Cycles() {
  return (
    <div className={style.cycles}>
      <span>Cicles</span>
      <div className={style.cycleDots}>
        <span className={`${style.cycleDot} ${style.workTime}`}></span>
        <span className={`${style.cycleDot} ${style.restTime}`}></span>
        <span className={`${style.cycleDot} ${style.workTime}`}></span>
        <span className={`${style.cycleDot} ${style.restTime}`}></span>
        <span className={`${style.cycleDot} ${style.workTime}`}></span>
        <span className={`${style.cycleDot} ${style.restTime}`}></span>
        <span className={`${style.cycleDot} ${style.workTime}`}></span>
        <span className={`${style.cycleDot} ${style.longRestTime}`}></span>
      </div>
    </div>
  );
}
