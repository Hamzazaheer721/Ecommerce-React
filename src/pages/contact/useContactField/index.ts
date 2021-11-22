import { MouseEvent, useCallback, useState } from 'react'
import { useSelector } from 'react-redux'
import { isObjectEmpty } from '../../../general/helper'
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

  const [errors, setErrors] = useState({})

  const makeApiCall = useCallback(() => {}, [])

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
      const _errors = validateErrors(updatedData)
      setErrors(_errors)
      isObjectEmpty(_errors) && makeApiCall()
    },
    [locationFieldsState, contactFieldsState, setErrors]
  )

  return {
    handleSubmit,
    is_online,
    locationFieldsState,
    contactFieldsState,
    errors
  }
}

export default useContactFields
