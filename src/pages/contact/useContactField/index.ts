import { notification } from 'antd'
import { MouseEvent, useCallback, useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  setContactFormErrors,
  ContactFormErrorDispatchContext
} from '../../../context/contactFormErrors.context'
import { isObjectEmpty } from '../../../general/helper'
import { resetContactForm } from '../../../redux/features/apiCallFeatures/contactFormSlice'
import { saveContactFormData } from '../../../redux/features/apiCallFeatures/contactFormSlice/apiActions'
import { openModal } from '../../../redux/features/modalSlice'
import { RootState } from '../../../redux/store'
import { IContactFormType } from '../../../types/contact'
import { ArgsProps } from '../../../types/notification/types'
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

  const contactFormState = useSelector((state: RootState) => state.contactForm)
  const { success: contactFormSuccess, message: contactFormMessage } =
    contactFormState

  const openNotification = useCallback(() => {
    const config: ArgsProps = {
      message: 'Error',
      description: contactFormMessage
    }
    notification.error(config)
  }, [contactFormMessage])

  const _resetContactFormState = useCallback(() => {
    dispatch(resetContactForm())
  }, [])

  useEffect(() => {
    if (contactFormSuccess && contactFormMessage) {
      dispatch(
        openModal({
          modalType: 'success',
          description: contactFormMessage,
          callbackOnOK: _resetContactFormState
        })
      )
    }
    if (!contactFormSuccess && contactFormMessage) {
      openNotification()
    }
  }, [contactFormSuccess, contactFormMessage])

  const makeApiCall = useCallback((_data: IContactFormType) => {
    dispatch(saveContactFormData(_data))
  }, [])

  const handleSubmit = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()
      e.stopPropagation()
      setContactFormErrors(dispatchContext, {})
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
        longitude: String(geoLocation.mapPosition.lng),
        latitude: String(geoLocation.mapPosition.lat),
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
