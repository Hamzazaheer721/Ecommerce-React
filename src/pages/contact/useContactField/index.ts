import { MouseEvent, useCallback, useState } from 'react'
import { useSelector } from 'react-redux'
import { isObjectEmpty } from '../../../general/helper'
import { RootState } from '../../../redux/store'
import { IContactFormType } from '../../../types/contact'
import { validateErrors } from './helper'

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

  const makeApiCall = useCallback(() => {
    // eslint-disable-next-line no-console
    console.info(' SUCCESS ')
  }, [])

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
        IContactFormType = {
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
    [locationFieldsState, contactFieldsState, errors]
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
