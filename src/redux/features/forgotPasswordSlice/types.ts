export interface IForgotPasswordStateType {
  success: boolean
  message: string
  loading: boolean
  username: string
  data?: any
}

export type IForgotPasswordPayloadRtn = Omit<
  IForgotPasswordStateType,
  'loading'
>

export type IForgotPasswordErrorRtn = Omit<
  IForgotPasswordStateType,
  'loading' | 'username' | 'data'
>
