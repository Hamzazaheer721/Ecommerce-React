import { createSlice } from '@reduxjs/toolkit';

type IUserStateType = {
  value : string[]
}

const initialState : IUserStateType = {
  value: []
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {}
})

export const userActions = userSlice.actions;
