export const IInputformInitialValue = {
  username: '',
  password: '',
  remember: false
}

export interface IResponseMessageType {
  nextScreen?: boolean,
  success?: string
  error?: string
}

export type IInputformType = {
  username: string
  password: string
  remember?: boolean
}

export type IInputformErrorsType = {
  usernameError?: string
  passwordError?: string
  responseError?: string
}
