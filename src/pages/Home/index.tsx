import { Container } from '../../components/Container';
import { CountDown } from '../../components/CountDown';
import { MainForm } from '../../components/MainForm';
import { Main } from '../../templates/Main';

export function Home() {
  return (
    <Main>
      <Container>
        <CountDown />
      </Container>
      <Container>
        <MainForm />
      </Container>
    </Main>
  );
}
