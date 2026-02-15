import { Container } from './components/Container';
import { Menu } from './components/Menu';
import { Logo } from './components/Logo';

import './styles/global.css';
import './styles/theme.css';
import { CountDown } from './components/CountDown';
import { DefaultInput } from './components/DefaultInput';

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Menu />
      </Container>
      <Container>
        <CountDown />
      </Container>
      <Container>
        <form action=''>
          <div className='formRow'>
            <DefaultInput
              id='label'
              type='text'
              labelText='qq coisa'
              placeholder='Digite algo'
            />
          </div>
          <div className='formRow'>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className='formRow'>
            <p>ciclos</p>
            <p>0 0 0 0 0</p>
          </div>
          <div className='formRow'>
            <button>Enviar</button>
          </div>
        </form>
      </Container>
    </>
  );
}
