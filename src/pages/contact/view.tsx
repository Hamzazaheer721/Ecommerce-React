import { memo } from 'react'
import InputFields from './components/inputFields'
import StoreLocations from './components/storeLocations'
import Map from './components/map'
import ButtonComponent from './components/button'

const ViewComponent = memo(() => (
  <div>
    <Map />
    <InputFields />
    <StoreLocations />
    <ButtonComponent />
  </div>
))

export default ViewComponent
