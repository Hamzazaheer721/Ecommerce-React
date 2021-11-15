import { FC, memo } from 'react'
import FieldsSection from './components/fieldsSection'
import ImageSection from './components/imageSection'
import { StoreContainer } from './index.styled'

const ViewComponent: FC = memo(() => (
  <>
    <StoreContainer>
      <ImageSection />
      <FieldsSection />
    </StoreContainer>
  </>
))
export default ViewComponent
