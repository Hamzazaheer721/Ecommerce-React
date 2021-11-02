import { FC, memo } from 'react'
import HeaderComponent from '../../components/header'
import FieldsSection from './components/fieldsSection'
import ImageSection from './components/imageSection'
import { StoreContainer } from './index.styled'

const ViewComponent: FC = memo(() => (
  <>
    <HeaderComponent />
    <StoreContainer>
      <ImageSection />
      <FieldsSection />
    </StoreContainer>
  </>
))
export default ViewComponent
