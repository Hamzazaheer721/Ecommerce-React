import { IStoreType } from '../store'

export type IUserType = {
  email: string,
  password: string,
  name: string,
  phone: string,
  country_code: string,
  user_type: 'visitor' | 'company',
  checkbox: boolean,
  store_name: string
}

export type IUserLoginRtnData = {
  auth_token : string,
  id: string,
  is_user_deactivated: string,
  message: string
  name: string,
  stores: IStoreType[],
  user_status: number,
  user_type: string,
  wp_num_inc_code: string
  image?: string,
  email?: string,
}

export type IUserLoginRtnResponse = {
  data : IUserLoginRtnData;
  message: string,
  success: boolean
}
