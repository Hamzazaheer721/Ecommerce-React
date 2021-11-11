import { IUpdateUserProfileStateType } from './types'

export const initialState: IUpdateUserProfileStateType = {
  name: '',
  email: '',
  phone: '',
  country_code: '',
  loading: false,
  success: false,
  message: ''
}
