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
    website,
    address,
    city,
    country,
    is_online
  } = _data

  const errors: any = {}
  if (isEmpty(email)) {
    errors.emailError = 'Please enter an email'
  }

  if (isEmpty(website)) {
    errors.websiteError = 'Please enter a webiste'
  }

  if (is_online === false) {
    if (!address || isEmpty(address)) {
      errors.addressError = 'Please enter your address'
    }

    if (!city || isEmpty(city)) {
      errors.cityError = 'Please enter your city'
    }

    if (!country || isEmpty(country)) {
      errors.countryError = 'Please enter your country'
    }
  }

  return errors
}
