import { FC } from 'react'
import HeaderComponent from '../Header'
import { Container } from './index.styled'

const HomeComponent: FC<{}> = () => (
  <Container>
    <HeaderComponent />
  </Container>
)

export default HomeComponent
