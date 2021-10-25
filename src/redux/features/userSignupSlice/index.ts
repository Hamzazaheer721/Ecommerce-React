/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import { userSignup } from './apiActions'
import { initialState } from './helper'

export const userSignupSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userSignup.fulfilled, (state, action) => {
      if (action.payload) {
        state.loading = false
        state.message = action.payload.message
        state.success = action.payload.success
      }
    })
    .addCase(userSignup.pending, (state) => {
      state.loading = true
    })
    .addCase(userSignup.rejected, (state, { payload }) => {
      if (payload) {
        state.loading = false
        state.message = payload?.message
        state.success = payload.success;
      }
    })
  }
})

export const signupActions = userSignupSlice.actions
