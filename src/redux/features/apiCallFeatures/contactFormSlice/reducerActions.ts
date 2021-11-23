import { CaseReducer } from '@reduxjs/toolkit'
import { IContactFormInitialState } from './helper'
import { IContactFormStateType } from './types'

export const resetContactForm: CaseReducer<IContactFormStateType> = (
  state
) => {
  // eslint-disable-next-line no-unused-vars
  state = IContactFormInitialState
}
