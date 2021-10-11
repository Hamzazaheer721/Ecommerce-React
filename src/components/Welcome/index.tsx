import { FC } from 'react'
import HeaderComponent from '../Header'
import { Container, WelcomeText } from './index.styled'

const WelcomeComponent: FC<{}> = () => (
  <Container>
    <HeaderComponent />
    <WelcomeText>Hey</WelcomeText>
  </Container>
)

export default WelcomeComponent
