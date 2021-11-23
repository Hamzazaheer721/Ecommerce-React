import { PayloadAction, createSlice } from '@reduxjs/toolkit'
/* eslint-disable no-param-reassign */
import { IModalStateType } from './types'

import { initialState } from './helper'

export const ModalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (
      state,
      action: PayloadAction<Omit<IModalStateType, 'modalVisibility'>>
    ) => {
      const { payload } = action
      state.modalVisibility = !state.modalVisibility
      state.modalType = payload.modalType
      if (payload.description) state.description = payload.description
      if (payload.nextScreen) state.nextScreen = payload.nextScreen
      if (payload.methodType) state.methodType = payload.methodType
      if (payload.callbackOnOK) state.callbackOnOK = payload.callbackOnOK
    },
    closeModal: (state) => {
      state.description = ''
      state.modalType = ''
      state.modalVisibility = false
      state.nextScreen = ''
      state.callbackOnOK = undefined
    }
  }
})

export const { openModal, closeModal } = ModalSlice.actions
