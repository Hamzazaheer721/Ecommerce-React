import { FC } from 'react'
import HeaderComponent from '../header'
import { Container, CardsContainer } from './index.styled'
import StoreCardComponent from '../storeCard'
import CategoriesComponent from './components/categoriesList'
import DealsComponent from './components/deals'
import FooterTray from './components/footerTray'

const HomeComponent: FC<{}> = () => (
  <Container>
    <HeaderComponent />
    <DealsComponent />
    <CategoriesComponent />
    <CardsContainer>
      <StoreCardComponent />
    </CardsContainer>
    <FooterTray />
  </Container>
)

export default HomeComponent
