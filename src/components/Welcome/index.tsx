import { FC } from 'react'
import HeaderComponent from '../Header'
import { Container } from './index.styled'

const WelcomeComponent: FC<{}> = () => (
  <Container>
    <HeaderComponent />
  </Container>
)

export default WelcomeComponent
