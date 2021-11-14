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

const userToken = localStorage.getItem('token')

export const Config = {
  headers: {
    Authorization: `Bearer ${userToken}`
  }
}
