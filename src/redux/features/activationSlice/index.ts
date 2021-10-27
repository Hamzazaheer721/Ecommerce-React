import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { activateAccount } from './apiAction'
import { initialState } from './helper'

export const activationSlice = createSlice({
  name: 'activation',
  initialState,
  reducers: {
    updateActivationMessageState: (
      state,
      { payload }: PayloadAction<{ message: string; success: boolean }>
    ) => {
      state.message = payload.message
      state.success = payload.success
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(activateAccount.fulfilled, (state, action) => {
        const { payload } = action
        state.message = payload.message
        state.success = payload.success
        state.user = payload.data
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

export const {updateActivationMessageState} = activationSlice.actions;
