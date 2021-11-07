import { memo } from 'react'
import InputFields from './inputFields'
import StoreLocations from './storeLocations'

const ViewComponent = memo(() => (
  <div>
    <InputFields />
    <StoreLocations />
  </div>
))

export default ViewComponent
