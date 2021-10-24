import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUserLoginRtnData } from '../../../types/user';
import { Instance } from '../../../config/axios';
import { SERVER_IP } from '../../../config/constants';
// import { ILoginUserTypes, initialState, initialStateValues } from './index';
// import { userSignupSlice } from '../userSignupSlice';

export const loginUser = createAsyncThunk(('user-signin/loginUser'), async ({ username, password }:{username: string, password: string}, thunkAPI) => {
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
    const response = await Instance.post<any>(`${SERVER_IP}/user/login`, { username, password });
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
  user?: Partial<IUserLoginRtnData>
  // loading?: boolean,
  // success?: boolean,
  // error?: boolean,
  // message?: string
}
export const initialState: ILoginUserTypes = {
  user: {}
  // loading: false,
  // success: false,
  // error: false
}
// interface IIntialStateProp {
//   value : ILoginUserTypes
// }

// const initialState: IIntialStateProp = {
//   value: {}
// }

export const userSigninSlice = createSlice({
  name: 'user-signin',
  initialState,
  reducers: {
    addUserAction: (state = initialState, action: PayloadAction<IUserLoginRtnData>) => {
      const { payload } = action;
      // eslint-disable-next-line no-param-reassign
      state.user = payload;
    }
  }
  // extraReducers: (builder) => {
  //   builder.addCase(loginUser.fulfilled, (state, action) => {
  //     state.loading = false;
  //     state.user.push(action.payload)
  //   })
  //   builder.addCase(loginUser.pending, (state) => {
  //     state.loading = true;
  //   })
  // }
})
export const { addUserAction } = userSigninSlice.actions;
