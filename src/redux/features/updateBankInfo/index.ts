import { createSlice } from '@reduxjs/toolkit'
import { initialState } from './helper'
import { updateBankInfo } from './apiActions'

export const updateBankInfoSlice = createSlice({
  name: 'updateBank',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateBankInfo.fulfilled, (state, { payload }) => {
        state.loading = false
        state.message = payload.message
        state.success = payload.success
      })
      .addCase(updateBankInfo.pending, (state) => {
        state.loading = true
      })
      .addCase(updateBankInfo.rejected, (state, { payload }) => {
        if (payload) {
          state.loading = false
          state.message = payload.message
          state.success = payload.success
        }
      })
  }
})
