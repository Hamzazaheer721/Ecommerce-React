import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { ILoginUserTypes } from './index';
import { Instance } from '../../../config/axios';
import { SERVER_IP } from '../../../config/constants';
// import { userSignupSlice } from '../userSignupSlice';

export const loginUser = createAsyncThunk(('user-signin/loginUser'), async ({ email, password }:ILoginUserTypes, thunkAPI) => {
  try {
    const response = await Instance({
      method: 'POST',
      baseURL: `${SERVER_IP}/user/login`,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      data: { username: email, password }
    })
    const data = await response;
    if (response.status === 200) {
      console.info('Response', data)
      localStorage.setItem('token', JSON.stringify(data))
      return { ...data }
    }
    return thunkAPI.rejectWithValue(data);
  } catch (e: any) {
    console.info('error', e.response)
    return thunkAPI.rejectWithValue(e)
  }
});

export interface ILoginUserTypes {
  email: string,
  password: string,
  loading?: boolean,
  success?: boolean,
  error?: boolean,
  message?: string
}
export const initialState: ILoginUserTypes = {
  email: '',
  password: '',
  loading: false,
  success: false,
  error: false
}

export const userSigninSlice = createSlice({
  name: 'user-signin',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state) => ({
      ...state, loading: false, success: true, error: false
    }))
  }
})

// export const {} = userSignupSlice.actions;
