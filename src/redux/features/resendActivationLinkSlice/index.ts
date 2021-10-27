import { createSlice } from '@reduxjs/toolkit';
import { resendActivationCode } from './apiAction';
import {initialState} from './helper'

export const resendActivationLinkSlice = createSlice({
  name: 'resend',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(resendActivationCode.fulfilled, (state, {payload}) => {
      state.message = payload.message
      state.sucess = payload.success
      state.loading = false
    })
    .addCase(resendActivationCode.pending, (state) => {
      state.loading = true
      state.message = ''
      state.sucess = ''
    })
    .addCase(resendActivationCode.rejected, (state, {payload}) => {
      state.loading = false
      state.message = payload!.message
      state.sucess = payload!.success
    })
  }
})
