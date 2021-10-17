import { FC } from 'react'
import HeaderComponent from '../header'
import { Container } from './index.styled'
import StoreCardComponent from '../storeCard'

const HomeComponent: FC<{}> = () => (
  <Container>
    <HeaderComponent />
    <StoreCardComponent />
  </Container>
)

export default HomeComponent
