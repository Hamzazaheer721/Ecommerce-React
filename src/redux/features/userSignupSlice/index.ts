/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import { IRegisterType } from '../../../types/signup'
import { userSignup } from './apiActions'

type IUserStateType = {
  user: IRegisterType
  loading: boolean
  success: string
  error: string
  message: string
}

const initialValue: IRegisterType = {
  name: '',
  phone: '',
  country_code: '',
  userType: 'visitor',
  store_name: '',
  checkbox: false,
  email: '',
  password: ''
}

const initialState: IUserStateType = {
  user: initialValue,
  loading: false,
  success: '',
  error: '',
  message: ''
}

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
