import { CaseReducer, PayloadAction } from '@reduxjs/toolkit'
import { IUserLoginRtnData } from '../../../types/user/index'
import { ILoginUserTypes, initialState } from './index'

export const addUser: CaseReducer<
  ILoginUserTypes,
  PayloadAction<IUserLoginRtnData>
> = (state = initialState, action) => {
  const { payload } = action
  state.user = payload
}
