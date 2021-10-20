import { FC } from 'react'
import HeaderComponent from '../header'
import { Container, CardsContainer } from './index.styled'
import StoreCardComponent from '../storeCard'
import CategoriesComponent from './components/categoriesList'

const HomeComponent: FC<{}> = () => (
  <Container>
    <HeaderComponent />
    <CategoriesComponent />
    <CardsContainer>
      <StoreCardComponent />
    </CardsContainer>
  </Container>
)

export default HomeComponent
