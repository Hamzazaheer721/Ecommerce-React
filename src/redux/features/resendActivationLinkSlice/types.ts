export interface IResendActivationLinkInitialStateType {
  sucess: string
  message: string
  loading: boolean
}

export interface IResendActivationPayloadRtn {
  message: string
  data?: []
  success: string
}

export interface IResendActivationErrorRtn {
  message : string
  data? : []
  success: string
}

// export interface IResendActivationPayloadArg{
//   username: string
// }
