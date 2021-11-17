import { IGeoAddressType } from '../../../../../../../types/geoLocation/index'
import { IContactStateType } from './types'

export const IContactInitialState: Partial<IGeoAddressType> = {
  area: '',
  city: '',
  country: '',
  location: '',
  postalCode: '',
  state: '',
  streetAddress: ''
}

export const initialContactState: IContactStateType = {
  is_online: false
}
