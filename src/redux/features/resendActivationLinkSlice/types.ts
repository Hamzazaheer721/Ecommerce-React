export interface IResendActivationLinkInitialStateType {
  success: boolean
  message: string
  loading: boolean
}

export interface IResendActivationPayloadRtn {
  message: string
  data?: []
  success: boolean
}

export interface IResendActivationErrorRtn {
  message : string
  data? : []
  success: boolean
}

// export interface IResendActivationPayloadArg{
//   username: string
// }
