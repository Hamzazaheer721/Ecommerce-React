export interface IResetPasswordStateTypes {
  activation_code?: string
  password: string
  password_confirmation: string
  username?: string
  userId?: string
}

export interface IResetPasswordLinkStateTypes {
  password: string
  password_confirmation: string
  userId?: string
}

// eslint-disable-next-line max-len
// export type IResetPasswordStateType = IResetPasswordDefaultStateTypes | IResetPasswordLinkStateTypes

export interface IResetPasswordErrorTypes {
  activationCodeError: string
  passwordError: string
  confirmationPasswordError: string
}
