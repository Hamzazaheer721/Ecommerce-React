import { MouseEvent, useCallback } from 'react'
import { useSelector } from 'react-redux'
// import { IContactFormDefaultErrorTypes } from './types'
import { RootState } from '../../../redux/store'

const useContactFields = () => {
  const locationFieldsState = useSelector(
    (state: RootState) => state.currentAddressLocation
  )
  const { is_online, address: locAddress } = locationFieldsState

  const contactFieldsState = useSelector(
    (state: RootState) => state.contactFields
  )

  const geoState = useSelector((state: RootState) => state.currentGeoLocation)
  const { location } = geoState

  const handleSubmit = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()
      e.stopPropagation()
      const {
        city,
        country,
        streetAddress: address,
        postalCode: postal_code
      } = locAddress
      const updatedData = {
        purpose: 'contact',
        city,
        country,
        address,
        postal_code,
        is_online,
        longitude: location!.mapPosition.lng,
        latitude: location!.mapPosition.lat,
        ...contactFieldsState
      }
      console.info('Updated data: ', updatedData)
    },
    [locationFieldsState, contactFieldsState]
  )

  return { handleSubmit, is_online, locationFieldsState, contactFieldsState }
}

export default useContactFields
