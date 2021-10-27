import { PayloadAction, createSlice } from '@reduxjs/toolkit'
/* eslint-disable no-param-reassign */
import { IModalStateType } from './types'

import { initialState } from './helper'

export const ModalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggleModalStates: (
      state,
      action: PayloadAction<Omit<IModalStateType, 'modalVisibility'>>
    ) => {
      const { payload } = action
      state.modalVisibility = !state.modalVisibility
      state.modalType = payload.modalType
      if (payload.description) {
        state.description = payload.description
      }
    }
  }
})

export const { toggleModalStates } = ModalSlice.actions
