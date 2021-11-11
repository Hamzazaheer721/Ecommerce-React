import { createSlice } from '@reduxjs/toolkit'
import { initialState } from './helper'
import { UpdateUserProfile } from './apiActions'

export const updateUserProfileSlice = createSlice({
  name: 'updateUser',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(UpdateUserProfile.fulfilled, (state, { payload }) => {
        state.loading = false
        state.message = payload.message
        state.success = payload.success
        state.name = payload.data.name
        state.email = payload.data.email
        state.phone = payload.data.wp_num_inc_code.without_cc
        state.country_code = payload.data.country_code
      })
      .addCase(UpdateUserProfile.pending, (state) => {
        state.loading = true
      })
      .addCase(UpdateUserProfile.rejected, (state, { payload }) => {
        if (payload) {
          state.loading = false
          state.message = payload.message
          state.success = payload.success
        }
      })
  }
})
