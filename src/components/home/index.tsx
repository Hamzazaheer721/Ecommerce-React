import { FC } from 'react';
import { Container, WelcomeText } from './index.styled';

const HomeComponent: FC<{}> = () => (
  <Container>
    <WelcomeText>
      Hey
    </WelcomeText>
  </Container>
)

export default HomeComponent;
