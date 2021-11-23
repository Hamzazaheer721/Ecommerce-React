import { MouseEvent, useCallback, useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  setContactFormErrors,
  ContactFormErrorDispatchContext
} from '../../../context/contactFormErrors.context'
import { isObjectEmpty } from '../../../general/helper'
import { saveContactFormData } from '../../../redux/features/apiCallFeatures/contactFormSlice/apiActions'
import { RootState } from '../../../redux/store'
import { IContactFormType } from '../../../types/contact'
import { validateErrors } from './helper'
import { IContactFormErrorType } from './types'

const useContactFields = () => {
  const dispatchContext = useContext(ContactFormErrorDispatchContext)

  const dispatch = useDispatch()
  const locationFieldsState = useSelector(
    (state: RootState) => state.currentAddressLocation
  )
  const { is_online, address: locAddress } = locationFieldsState

  const contactFieldsState = useSelector(
    (state: RootState) => state.contactFields
  )

  const geoState = useSelector((state: RootState) => state.currentGeoLocation)
  const { location: geoLocation } = geoState

  const makeApiCall = useCallback((_data: IContactFormType) => {
    dispatch(saveContactFormData(_data))
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
      setContactFormErrors(dispatchContext, _errors)
      isObjectEmpty(_errors) && makeApiCall(updatedData)
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
