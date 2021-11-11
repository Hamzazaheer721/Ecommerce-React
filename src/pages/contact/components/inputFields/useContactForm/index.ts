import { usePlacesWidget } from 'react-google-autocomplete'
import { useSelector } from 'react-redux'
import { GOOGLE_MAP_API_KEY } from '../../../../../config/constants'
import { RootState } from '../../../../../redux/store'

const useContactForm = () => {
  const { address } = useSelector(
    (state: RootState) => state.currentGeoLocation
  )

  const { ref: autoCompleteRef } = usePlacesWidget({
    apiKey: GOOGLE_MAP_API_KEY,
    // eslint-disable-next-line no-console
    onPlaceSelected: (place) => console.info(place)
  })

  return {
    autoCompleteRef,
    area: address?.area,
    city: address?.city,
    state: address?.state,
    country: address?.country,
    location: address?.location,
    postalCode: address?.postalCode,
    streetAddress: address?.streetAddress
  }
}

export default useContactForm
