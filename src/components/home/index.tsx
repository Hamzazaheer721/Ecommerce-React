import { FC } from 'react'
import HeaderComponent from '../header'
import { Container, CardsContainer } from './index.styled'
import StoreCardComponent from '../storeCard'
import CategoriesComponent from './components/categoriesList'
import DealsComponent from './components/deals'

const HomeComponent: FC<{}> = () => (
  <Container>
    <HeaderComponent />
    <DealsComponent />
    <CategoriesComponent />
    <CardsContainer>
      <StoreCardComponent />
    </CardsContainer>
  </Container>
)

export default HomeComponent
