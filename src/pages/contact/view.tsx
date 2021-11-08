import { memo } from 'react'
import InputFields from './components/inputFields'
import StoreLocations from './components/storeLocations'
import Map from './components/map'
import ButtonComponent from './components/button'

const ViewComponent = memo(() => (
  <>
    <Map />
    <InputFields />
    <StoreLocations />
    <ButtonComponent />
  </>
))

export default ViewComponent
