/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { ILoginUserTypes } from './index';
import { Instance } from '../../../config/axios';
import { SERVER_IP } from '../../../config/constants';
// import { userSignupSlice } from '../userSignupSlice';

export const loginUser = createAsyncThunk(('user-signin/loginUser'), async ({ email, password }:{email: string, password: string}, thunkAPI) => {
  try {
    // const response = await Instance({
    //   method: 'POST',
    //   baseURL: `${SERVER_IP}/user/login`,
    //   transformResponse: (r: any) => r,
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json'
    //   },
    //   data: { username: email, password }
    // })
    const response = await Instance.post<any>(`${SERVER_IP}/user/login`, { username: email, password });
    const data = await response.data;
    if (response.status === 200) {
      // console.info('Response', data)
      localStorage.setItem('token', JSON.stringify(response.data.auth_token))
      return { ...data }
    }
    return thunkAPI.rejectWithValue(data);

    // return thunkAPI.dispatch(data)
  } catch (e: any) {
    // console.info('error', e.response)
    return thunkAPI.rejectWithValue(e)
  }
});

export interface ILoginUserTypes {
  user: any
  loading?: boolean,
  success?: boolean,
  error?: boolean,
  message?: string
}
export const initialState: ILoginUserTypes = {
  user: [],
  loading: false,
  success: false,
  error: false
}

export const userSigninSlice = createSlice({
  name: 'user-signin',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;
      // console.info('action is ', action.payload)
      state.user.push(action.payload)
    })
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
    })
  }
})

// export const {} = userSignupSlice.actions;
