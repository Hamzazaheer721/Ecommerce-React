import { FC } from 'react';
import { Container, WelcomeText } from './index.styled';

const WelcomeComponent: FC<{}> = () => (
  <Container>
    <WelcomeText>
      React Typscript
    </WelcomeText>
  </Container>
)

export default WelcomeComponent;
