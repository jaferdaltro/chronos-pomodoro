import style from './styles.module.css';

export function Footer() {
  return (
    <footer className={style.footer}>
      <a href=''>Entendea como funciona a técnica pomodoro</a>
      <a href=''>
        Chronos Pomodoro &copy; {new Date().getFullYear()} - Feito com 💚
      </a>
    </footer>
  );
}
