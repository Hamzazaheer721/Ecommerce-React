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
