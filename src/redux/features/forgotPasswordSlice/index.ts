import { createSlice } from '@reduxjs/toolkit'
import { forgotPassword } from './apiAction'
import { initialState } from './helper'

export const forgotPasswordSlice = createSlice({
  name: 'forgot',
  initialState,
  reducers: {
    clearForgotPaswordSliceAllStates: (state) => {
      state.loading = false
      state.message = ''
      state.success = false
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(forgotPassword.fulfilled, (state, { payload }) => {
        state.loading = false
        state.message = payload.message
        state.success = payload.success
      })
      .addCase(forgotPassword.pending, (state) => {
        state.loading = true
      })
      .addCase(forgotPassword.rejected, (state, { payload }) => {
        state.loading = false
        state.message = payload!.message
        state.success = payload!.success
      })
  }
})

export const { clearForgotPaswordSliceAllStates } = forgotPasswordSlice.actions
