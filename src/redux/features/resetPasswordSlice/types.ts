export type IResetPasswordErrorRtn = {
  success: boolean
  message: string
}

export interface IResetPasswordSliceStateType {
  loading: boolean
  success: boolean
  message: string
}

export interface IResetPasswordPayloadArgs {
  activation_code: string
  password: string
  password_confirmation: string
  username: string
}

export type IResetPasswordPayloadRtn = IResetPasswordErrorRtn
