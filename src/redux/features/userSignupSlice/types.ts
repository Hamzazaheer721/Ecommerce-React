import { IRegisterType } from '../../../types/signup'

export type IUserStateType = {
  user: IRegisterType
  loading: boolean
  success: string
  error: string
  message: string
}
