import { IGeoAddressObjStateType } from '../../../types/geoLocation'

export const initialState: IGeoAddressObjStateType = {
  address: {
    area: '',
    city: '',
    country: '',
    postalCode: '',
    state: '',
    streetAddress: ''
  }
}
