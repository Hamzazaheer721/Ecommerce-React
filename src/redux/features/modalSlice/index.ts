/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import { initialState } from './helper'

export const ModalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggleModalStates: (state) => {
      state.modalVisibility = !state.modalVisibility
    }
  }
})

export const { toggleModalStates } = ModalSlice.actions
