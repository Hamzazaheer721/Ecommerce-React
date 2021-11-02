import { FC, memo } from 'react'
import FieldsSection from './components/fieldsSection'
import ImageSection from './components/imageSection'

const ViewComponent: FC = memo(() => (
  <div>
    <ImageSection />
    <FieldsSection />
  </div>
))
export default ViewComponent
