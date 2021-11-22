import { MouseEvent, useCallback, useContext } from 'react'
import { useSelector } from 'react-redux'
import {
  setContactFormErrors,
  ContactFormErrorDispatchContext
} from '../../../context/contactFormErrors.context'
import { isObjectEmpty } from '../../../general/helper'
import { RootState } from '../../../redux/store'
import { IContactFormType } from '../../../types/contact'
import { validateErrors } from './helper'
import { IContactFormErrorType } from './types'

const useContactFields = () => {
  const dispatch = useContext(ContactFormErrorDispatchContext)

  const locationFieldsState = useSelector(
    (state: RootState) => state.currentAddressLocation
  )
  const { is_online, address: locAddress } = locationFieldsState

  const contactFieldsState = useSelector(
    (state: RootState) => state.contactFields
  )

  const geoState = useSelector((state: RootState) => state.currentGeoLocation)
  const { location: geoLocation } = geoState

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

      const updatedData: IContactFormType = {
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
      const _errors: Partial<IContactFormErrorType> =
        validateErrors(updatedData)
      setContactFormErrors(dispatch, _errors)
      isObjectEmpty(_errors) && makeApiCall()
    },
    [locationFieldsState, contactFieldsState]
  )

  return {
    handleSubmit,
    is_online,
    locationFieldsState,
    contactFieldsState
  }
}

export default useContactFields
