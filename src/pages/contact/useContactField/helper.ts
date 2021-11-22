import { isEmpty } from '../../../general/validations'
import {
  IContactFormDefaultErrorTypes,
  IContactFormIsOnlineErrorTypes
} from './types'

export const validateErrors = (
  _data: IContactFormIsOnlineErrorTypes | IContactFormDefaultErrorTypes
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
    is_online
  } = _data

  const errors: any = {}
  if (isEmpty(email)) {
    errors.emailError = 'Please enter your email'
  }

  if (isEmpty(mobile_number)) {
    errors.websiteError = 'Please enter your mobile number'
  }

  if (!is_online) {
    if (!location || isEmpty(location)) {
      errors.locationError = 'Please enter your location'
    }

    if (!address || isEmpty(address)) {
      errors.addressError = 'Please enter your address'
    }

    if (!area || isEmpty(area)) {
      errors.areaError = 'Please enter your area'
    }

    if (!city || isEmpty(city)) {
      errors.cityError = 'Please enter your city'
    }

    if (!state || isEmpty(state)) {
      errors.stateError = 'Please enter your state'
    }

    if (!country || isEmpty(country)) {
      errors.countryError = 'Please enter your country'
    }
  }

  return errors
}
