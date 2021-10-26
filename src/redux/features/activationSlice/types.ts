export interface IActivationThunkArgType {
  activation_code : string
  email : string
}

export interface IActivationPayloadRtn {
  success: string
  message: string
}

export interface IActivationStateType {
  success: string
  message: string
  loading: boolean
}
