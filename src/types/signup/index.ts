export interface IRegisterCustomerType {
  name: string
  phone: string
  country_code: string
  user_type: 'visitor'
  store_name: ''
  checkbox: boolean
  email: string
  password: string
}

export interface IRegisterCompanyType {
  name: string
  phone: string
  country_code: string
  user_type: 'company'
  store_name: string
  checkbox: boolean
  email: string
  password: string
}

export type IRegisterType = IRegisterCompanyType | IRegisterCustomerType

export interface IRegisterErrors {
  nameError: string
  phoneError: string
  storeNameError: string
  emailError: string
  passwordError: string
  checkboxError: string
}

export type IRegisterErrorType = Partial<IRegisterErrors>

export interface IRegisterRtn {
  success: boolean
  message: string
}
