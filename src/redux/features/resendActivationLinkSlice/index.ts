import { createSlice } from '@reduxjs/toolkit';
import { resendActivationCode } from './apiAction';
import {initialState} from './helper'

export const resendActivationLinkSlice = createSlice({
  name: 'resend',
  initialState,
  reducers: {
    clearResendStates: (state) => {
      state.loading = false;
      state.message = ''
      state.success = false
    }
  },
  extraReducers: (builder) => {
    builder.addCase(resendActivationCode.fulfilled, (state, {payload}) => {
      state.message = payload.message
      state.success = payload.success
      state.loading = false
    })
    .addCase(resendActivationCode.pending, (state) => {
      state.loading = true
      state.message = ''
      state.success = false
    })
    .addCase(resendActivationCode.rejected, (state, {payload}) => {
      state.loading = false
      state.message = payload!.message
      state.success = payload!.success
    })
  }
})

export const {clearResendStates} = resendActivationLinkSlice.actions;
