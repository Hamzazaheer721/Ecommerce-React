import { createSlice } from '@reduxjs/toolkit'
import { initialState } from './helper'
import { UpdateUserProfile } from './apiActions'

export const updateUserProfileSlice = createSlice({
  name: 'updateUser',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(UpdateUserProfile.fulfilled, (state, { payload }) => {
      state.loading = false
      state.message = payload.message
      state.success = payload.success
    })
  }
})
