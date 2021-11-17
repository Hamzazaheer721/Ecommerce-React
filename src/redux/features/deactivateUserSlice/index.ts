import { createSlice } from '@reduxjs/toolkit'
import { initialState } from './helper'
import { deactivateUser } from './apiActions'

export const deactivateUserSlice = createSlice({
  name: 'deactivate',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(deactivateUser.fulfilled, (state, { payload }) => {
        state.loading = false
        state.message = payload.message
        state.success = payload.success
      })
      .addCase(deactivateUser.pending, (state) => {
        state.loading = true
      })
      .addCase(deactivateUser.rejected, (state, { payload }) => {
        if (payload) {
          state.loading = false
          state.message = payload.message
          state.success = payload.success
        }
      })
  }
})
