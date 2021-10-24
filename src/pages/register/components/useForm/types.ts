export interface IRegisterCustomerType {
  name: string
  phone: string
  country_code: string
  userType: 'visitor'
  checkbox: boolean
  email: string
  password: string
}

export interface IRegisterCompanyType {
  name: string
  phone: string
  country_code: string
  userType: 'company'
  store_name: string
  checkbox: boolean
  email: string
  password: string
}

export type IRegisterType = IRegisterCompanyType | IRegisterCustomerType;
