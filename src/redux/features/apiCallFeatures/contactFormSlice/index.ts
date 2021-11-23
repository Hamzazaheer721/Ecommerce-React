import { createSlice } from '@reduxjs/toolkit'
import { resetContactForm } from './reducerActions'
import { saveContactFormData } from './apiActions'
import { IContactFormInitialState } from './helper'

export const contactFormSlice = createSlice({
  name: 'contactForm',
  initialState: IContactFormInitialState,
  reducers: {
    resetContactFormState: resetContactForm
  },
  extraReducers: (builder) => {
    builder
      .addCase(saveContactFormData.fulfilled, (state, { payload }) => {
        state.loading = false
        state.message = payload.message
        state.success = payload.success
      })
      .addCase(saveContactFormData.pending, (state) => {
        state.loading = true
      })
      .addCase(saveContactFormData.rejected, (state, { payload }) => {
        state.loading = false
        state.message = payload!.message
        state.success = payload!.success
      })
  }
})

export const { resetContactFormState } = contactFormSlice.actions
