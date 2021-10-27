import { IUserLoginRtnData } from '../../../types/user/index';

export interface IActivationThunkArgType {
  activation_code : string
  email : string,
}

export interface IActivationPayloadRtn {
  data: IUserLoginRtnData;
  success: boolean
  message: string
}

export interface IActivationErrorRtn {
  success: boolean
  message: string
}

export interface IActivationStateType {
  success: boolean
  message: string
  loading: boolean
  user?: IUserLoginRtnData
}
