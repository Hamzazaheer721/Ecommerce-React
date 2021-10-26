import { IUserLoginRtnData } from '../../../types/user/index';

export interface IActivationThunkArgType {
  activation_code : string
  email : string,
}

export interface IActivationPayloadRtn {
  user: IUserLoginRtnData;
  success: string
  message: string
}

export interface IActivationErrorRtn {
  success: string
  message: string
}

export interface IActivationStateType {
  success: string
  message: string
  loading: boolean
  user?: IUserLoginRtnData
}
