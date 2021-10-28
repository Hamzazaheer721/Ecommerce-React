import { createSlice } from '@reduxjs/toolkit';
import { resetPassword } from './apiAction';
import { initialState } from './helper'

export const resetPasswordSlice = createSlice({
  name: 'reset',
  initialState,
  reducers: {
    clearAllResetPasswordSliceStates: (state) => {
      state.loading = false;
      state.success = false;
      state.message = '';
    }
  },
  extraReducers: (builder) => {
    builder.addCase(resetPassword.fulfilled, (state, {payload}) => {
      state.loading = false;
      state.success = payload.success;
      state.message = payload.message
    })
    .addCase(resetPassword.pending, (state) => {
      state.loading = true;
      state.success = false;
      state.message = '';
    })
    .addCase(resetPassword.rejected, (state, {payload}) => {
      state.loading = false;
      state.message = payload!.message;
      state.success = payload!.success;
    })
  }
})

export const {clearAllResetPasswordSliceStates} = resetPasswordSlice.actions;
