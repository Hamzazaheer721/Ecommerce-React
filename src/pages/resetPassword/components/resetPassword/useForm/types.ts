export interface IResetPasswordStateTypes {
  activation_code: string
  password : string
  password_confirmation: string
  username: string
}

export interface IResetPasswordErrorTypes {
  activationCodeError: string
  passwordError : string
  confirmationPasswordError: string
  usernameError: string
}
