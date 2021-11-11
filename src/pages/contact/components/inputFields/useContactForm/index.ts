import { useSelector } from 'react-redux'
import { RootState } from '../../../../../redux/store'

const useContactForm = () => {
  const { address } = useSelector(
    (state: RootState) => state.currentGeoLocation
  )

  return {
    location: address?.location,
    streetAddress: address?.streetAddress,
    city: address?.city,
    area: address?.area,
    state: address?.state,
    country: address?.country,
    postalCode: address?.postalCode
  }
}

export default useContactForm
