import { IContactFormType } from '../../../types/contact/index'
import {
  isEmail,
  isEmpty,
  validateAlphabets,
  validatePhoneNumber,
  validatePostalCode
} from '../../../general/validations'
import { IContactFormErrorType } from './types'

export const validateErrors = (
  _data: IContactFormType
): Partial<IContactFormErrorType> => {
  const {
    email,
    mobile_number,
    location,
    address,
    postal_code,
    area,
    city,
    state,
    country,
    longitude,
    latitude,
    is_online
  } = _data
  const errors: Partial<IContactFormErrorType> = {}

  if (isEmpty(email)) {
    errors.emailError = 'Please enter your email'
  } else if (!isEmail(email)) {
    errors.emailError = 'Please enter a valid email'
  }

  if (isEmpty(mobile_number)) {
    errors.mobileNumberError = 'Please enter your mobile number'
  } else if (!validatePhoneNumber(mobile_number)) {
    errors.mobileNumberError = 'Please enter a valid mobile number'
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

    if (postal_code) {
      if (!validatePostalCode(postal_code)) {
        errors.postalCodeError = 'Please enter a valid postal code'
      }
    }

    if (!area) {
      errors.areaError = 'Please enter your area'
    } else if (!validateAlphabets(area)) {
      errors.areaError = 'Please enter a valid area'
    }

    if (!city) {
      errors.cityError = 'Please enter your city'
    } else if (!validateAlphabets(city)) {
      errors.cityError = 'Please enter a valid city'
    }

    if (!state) {
      errors.stateError = 'Please enter your state'
    } else if (!validateAlphabets(state)) {
      errors.stateError = 'Please enter a valid state'
    }

    if (!country) {
      errors.countryError = 'Please enter your country'
    } else if (!validateAlphabets(country)) {
      errors.countryError = 'Please enter a valid country'
    }
  }

  return errors
}
