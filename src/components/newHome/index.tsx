import { FC } from 'react'
import HeaderComponent from '../newHeader'
import { Container } from './index.styled'

const HomeComponent: FC<{}> = () => (
  <Container>
    <HeaderComponent />
  </Container>
)

export default HomeComponent
