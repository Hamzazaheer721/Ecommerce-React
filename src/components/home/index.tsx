import { FC } from 'react'
import HeaderComponent from '../header'
import { Container } from './index.styled'
import StoreCardComponent from '../storeCard'
import CategoriesComponent from './components/categoriesList'

const HomeComponent: FC<{}> = () => (
  <Container>
    <HeaderComponent />
    <CategoriesComponent />
    <StoreCardComponent />
  </Container>
)

export default HomeComponent
