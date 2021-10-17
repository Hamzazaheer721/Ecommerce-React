import { FC } from 'react'
import HeaderComponent from '../header'
import { Container } from './index.styled'

const HomeComponent: FC<{}> = () => (
  <Container>
    <HeaderComponent />
  </Container>
)

export default HomeComponent
