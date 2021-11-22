import { IContactFormType } from '../../../types/contact/index';
import { isEmpty } from '../../../general/validations'

export const validateErrors = (
  _data: IContactFormType
) => {
  const {
    email,
    mobile_number,
    location,
    address,
    area,
    city,
    state,
    country,
    longitude,
    latitude,
    is_online
  } = _data
  const errors: any = {}

  if (isEmpty(email)) {
    errors.emailError = 'Please enter your email'
  }

  if (isEmpty(mobile_number)) {
    errors.mobileNumberError = 'Please enter your mobile number'
  }

  if (!String(longitude)) {
    // eslint-disable-next-line no-console
    console.error('LONGITUDE MISSNG!')
  }

  if (!String(latitude)) {
    // eslint-disable-next-line no-console
    console.error('LATITUDE MISSING')
  }

  if (!is_online) {
    if (!location) {
      errors.locationError = 'Please enter your location'
    }

    if (!address) {
      errors.addressError = 'Please enter your address'
    }

    if (!area) {
      errors.areaError = 'Please enter your area'
    }

    if (!city) {
      errors.cityError = 'Please enter your city'
    }

    if (!state) {
      errors.stateError = 'Please enter your state'
    }

    if (!country) {
      errors.countryError = 'Please enter your country'
    }
  }

  return errors
}
