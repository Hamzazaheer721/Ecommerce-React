/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import { activateAccount } from './apiAction'
import { initialState } from './helper'

export const activationSlice = createSlice({
  name: 'activation',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(activateAccount.fulfilled, (state, action) => {
        const { payload } = action
        state.message = payload.message
        state.success = payload.success
        state.user = payload.user;
        state.loading = false
      })
      .addCase(activateAccount.pending, (state) => {
        state.loading = true
      })
      .addCase(activateAccount.rejected, (state, action) => {
        const { payload } = action
        state.message = payload!.message
        state.success = payload!.success
        state.loading = false
      })
  }
})
