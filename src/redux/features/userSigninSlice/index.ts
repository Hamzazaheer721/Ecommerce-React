import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ILoginUserTypes } from './index';
import { Instance } from '../../../config/axios';
import { SERVER_IP } from '../../../config/constants';
// import { userSignupSlice } from '../userSignupSlice';

export const loginUser = createAsyncThunk(('user-signin/loginUser'), async ({ name, password }:ILoginUserTypes, thunkAPI) => {
  try {
    const response = await Instance({
      method: 'POST',
      baseURL: `${SERVER_IP}/user/login`,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      data: { name, password }
    })
    const data = await response;
    if (response.status === 200) {
      localStorage.setItem('token', JSON.stringify(data))
      return { ...data }
    }
    return thunkAPI.rejectWithValue(data);
    console.info(data)
  } catch (e) {
    console.error('error', e)
    return thunkAPI.rejectWithValue(e)
  }
});

export interface ILoginUserTypes {
  name: string,
  password: string,
  loading?: boolean,
  success?: boolean,
  error?: boolean,
  message: string
}
export const initialState = {
  name: '',
  password: '',
  loading: false,
  success: false,
  error: false
}

export const userSigninSlice = createSlice({
  name: 'user-signin',
  initialState,
  reducers: {},
  extraReducers: {

  }
})

// export const {} = userSignupSlice.actions;

export default {}
