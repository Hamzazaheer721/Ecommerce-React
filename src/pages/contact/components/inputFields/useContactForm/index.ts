import { ChangeEvent, useCallback } from 'react'
import { usePlacesWidget } from 'react-google-autocomplete'
import { useDispatch, useSelector } from 'react-redux'
import { IGeoAddressType } from '../../../../../types/geoLocation/index'
import { GOOGLE_MAP_API_KEY } from '../../../../../config/constants'
import { setGeoAddressState, setGeoLocationState } from '../../../../../redux/features/geoLocatonSlice'
import { RootState } from '../../../../../redux/store'

const useContactForm = () => {
  const dispatch = useDispatch()
  const locationState = useSelector(
    (state: RootState) => state.currentGeoLocation
  )
  const {address} = locationState;

  const handlePlaceSelected = useCallback(
    // eslint-disable-next-line no-undef
    (places: google.maps.places.PlaceResult) => {
      const {geometry} = places;
      if (geometry) {
        // eslint-disable-next-line no-undef
        const _obj : google.maps.LatLngLiteral = {
          lat: geometry.location!.lat(),
          lng: geometry.location!.lng()
        }
        dispatch(setGeoLocationState(_obj))
      }
    },
    [address]
  )

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      e.preventDefault()
      const { name, value } = e.target
      const _key: keyof IGeoAddressType = name as keyof IGeoAddressType
      dispatch(setGeoAddressState({ name: _key, value }))
    },
    [address]
  )

  const { ref: autoCompleteRef } = usePlacesWidget({
    apiKey: GOOGLE_MAP_API_KEY,
    onPlaceSelected: handlePlaceSelected
  })

  return {
    handleChange,
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
