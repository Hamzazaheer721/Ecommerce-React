export interface IForgotPasswordStateType {
  success: boolean
  data?: any
  message: string
  loading: boolean
}

export type IForgotPasswordPayloadRtn = Omit<IForgotPasswordStateType, 'loading'>

export type IForgotPasswordErrorRtn = Omit<IForgotPasswordStateType, 'loading' | 'data'>
