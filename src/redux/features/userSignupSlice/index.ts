import { createSlice} from '@reduxjs/toolkit'
import { userSignup } from './apiActions'
import { initialState } from './helper'

export const userSignupSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    clearMessageStates: (state) => {
      state.message = '';
      state.loading = false;
      state.success = false;
    },
    clearAllStates: (state) => {
      state.message = '';
      state.loading = false;
      state.success = false;
      state.email = ''
    }
  },
  extraReducers: (builder) => {
    builder.addCase(userSignup.fulfilled, (state, { payload }) => {
        state.loading = false
        state.message = payload.message
        state.success = payload.success
        state.email = payload.email
    })
    .addCase(userSignup.pending, (state) => {
      state.loading = true
    })
    .addCase(userSignup.rejected, (state, { payload }) => {
      if (payload) {
        state.loading = false
        state.message = payload.message
        state.success = payload.success;
      }
    })
  }
})

export const {clearMessageStates, clearAllStates} = userSignupSlice.actions;
