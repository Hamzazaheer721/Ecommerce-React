import { createSlice } from '@reduxjs/toolkit'
import { initialState } from './helper'
import { updateBasicInfo } from './apiActions'

export const updateBankInfoSlice = createSlice({
  name: 'updateBasicInfo',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateBasicInfo.fulfilled, (state, { payload }) => {
        state.loading = false
        state.message = payload.message
        state.success = payload.success
      })
      .addCase(updateBasicInfo.pending, (state) => {
        state.loading = true
      })
      .addCase(updateBasicInfo.rejected, (state, { payload }) => {
        if (payload) {
          state.loading = false
          state.message = payload.message
          state.success = payload.success
        }
      })
  }
})
