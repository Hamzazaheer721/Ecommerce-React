import { usePlacesWidget } from 'react-google-autocomplete'
import { useSelector } from 'react-redux'
import { GOOGLE_MAP_API_KEY } from '../../../../../config/constants';
import { RootState } from '../../../../../redux/store'

const useContactForm = () => {
  const { address } = useSelector(
    (state: RootState) => state.currentGeoLocation
  )

  const { ref: autoCompleteRef } = usePlacesWidget({
    apiKey: GOOGLE_MAP_API_KEY,
    onPlaceSelected: (place) => console.info(place)
  })

  return {
    location: address?.location,
    streetAddress: address?.streetAddress,
    city: address?.city,
    area: address?.area,
    state: address?.state,
    country: address?.country,
    postalCode: address?.postalCode,
    autoCompleteRef
  }
}

export default useContactForm
