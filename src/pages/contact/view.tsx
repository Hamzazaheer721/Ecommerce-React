import { memo } from 'react'
import InputFields from './inputFields'
import StoreLocations from './storeLocations'
import Map from './map'
import ButtonComponent from './buton'

const ViewComponent = memo(() => (
  <div>
    <Map />
    <InputFields />
    <StoreLocations />
    <ButtonComponent />
  </div>
))

export default ViewComponent
