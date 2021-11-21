import { memo } from 'react'
import InputFields from './components/inputFields'
import StoreLocations from './components/storeLocations'
import Map from './components/map'
import ButtonComponent from './components/button'
import useContactFields from './useContactField'

const ViewComponent = memo(() => {
  const { handleSubmit } = useContactFields()

  return (
    <>
      <Map />
      <InputFields />
      <StoreLocations />
      <ButtonComponent handleSubmit={handleSubmit} />
    </>
  )
})

export default ViewComponent
