export const IInputformInitialValue = {
  username: '',
  password: '',
  remember: false
}

export type IInputformType = {
  username : string,
  password: string,
  remember?: boolean
}

export type IInputformErrorsType = {
  usernameError? : string,
  passwordError?: string,
  responseError?: string
}
