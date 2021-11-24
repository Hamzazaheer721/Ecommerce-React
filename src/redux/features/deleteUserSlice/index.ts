import { createSlice } from '@reduxjs/toolkit'
import { initialState } from './helper'
import { deleteUser } from './apiActions'

export const deleteUserSlice = createSlice({
  name: 'delete',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(deleteUser.fulfilled, (state, { payload }) => {
        state.loading = false
        state.deleteUserStatus = true
        state.message = payload.message
        state.success = payload.success
        localStorage.removeItem('user')
        localStorage.removeItem('token')
      })
      .addCase(deleteUser.pending, (state) => {
        state.loading = true
      })
      .addCase(deleteUser.rejected, (state, { payload }) => {
        if (payload) {
          state.loading = false
          state.message = payload.message
          state.success = payload.success
        }
      })
  }
})
