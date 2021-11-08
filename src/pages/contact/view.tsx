import { memo } from 'react'
import InputFields from './inputFields'
import StoreLocations from './storeLocations'
import Map from './map'

const ViewComponent = memo(() => (
  <div>
    <Map />
    <InputFields />
    <StoreLocations />
  </div>
))

export default ViewComponent
