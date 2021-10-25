import { IRegisterType } from '../../../types/signup'
import { IUserStateType } from './types'

export const initialValue: IRegisterType = {
  name: '',
  phone: '',
  country_code: '',
  user_type: 'visitor',
  store_name: '',
  checkbox: false,
  email: '',
  password: ''
}

export const initialState: IUserStateType = {
  user: initialValue,
  loading: false,
  success: '',
  message: ''
}
