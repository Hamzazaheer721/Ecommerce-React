import { CaseReducer } from '@reduxjs/toolkit'
import { IContactFormStateType } from './types'

export const resetContactFormState: CaseReducer<IContactFormStateType> = (
  state
) => {
  // eslint-disable-next-line no-unused-vars
  state.loading = false
  state.message = ''
  state.success = false
}
