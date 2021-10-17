import { createSlice } from '@reduxjs/toolkit';

type IUserStateType = {
  value : string[]
}

const initialState : IUserStateType = {
  value: []
};

export const userSignupSlice = createSlice({
  name: 'user-signup',
  initialState,
  reducers: {},
  extraReducers: {}
})

export const userActions = userSignupSlice.actions;
