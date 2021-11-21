import { CaseReducer, PayloadAction } from '@reduxjs/toolkit'
import { IContactType } from './types'

export const setContactFieldsCaseReducer: CaseReducer<
  IContactType,
  PayloadAction<{ name: keyof IContactType; value: string }>
> = (state, action) => {
  const { payload } = action
  state[payload.name] = payload.value
}
