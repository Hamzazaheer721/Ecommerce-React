import { MouseEvent, useCallback } from 'react'
import { useSelector } from 'react-redux'
// import { IContactFormDefaultErrorTypes } from './types'
import { RootState } from '../../../redux/store'
import { validateErrors } from './helper'
import {
  IContactFormDefaultErrorTypes,
  IContactFormIsOnlineErrorTypes
} from './types'

const useContactFields = () => {
  const locationFieldsState = useSelector(
    (state: RootState) => state.currentAddressLocation
  )
  const { is_online, address: locAddress } = locationFieldsState

  const contactFieldsState = useSelector(
    (state: RootState) => state.contactFields
  )

  const geoState = useSelector((state: RootState) => state.currentGeoLocation)
  const { location: geoLocation } = geoState

  const handleSubmit = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()
      e.stopPropagation()
      const {
        city,
        country,
        streetAddress: address,
        postalCode: postal_code,
        location,
        area,
        state
      } = locAddress

      const updatedData:
        | IContactFormDefaultErrorTypes
        | IContactFormIsOnlineErrorTypes = {
        purpose: 'contact',
        is_online,
        location,
        address,
        postal_code,
        area,
        state,
        city,
        country,
        longitude: geoLocation.mapPosition.lng,
        latitude: geoLocation.mapPosition.lat,
        ...contactFieldsState
      }
      console.info('Updated data: ', updatedData)
      const _errors = validateErrors(updatedData)
      console.info('Errors :', _errors)
    },
    [locationFieldsState, contactFieldsState]
  )

  return { handleSubmit, is_online, locationFieldsState, contactFieldsState }
}

export default useContactFields
