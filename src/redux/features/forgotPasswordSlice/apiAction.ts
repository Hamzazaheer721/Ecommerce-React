import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { IForgotPasswordPayloadRtn, IForgotPasswordErrorRtn } from './types';
import { SERVER_IP } from '../../../config/constants';
import { Instance } from '../../../config/axios';

export const forgotPassword = createAsyncThunk<
  IForgotPasswordPayloadRtn,
  string,
  {rejectValue : IForgotPasswordErrorRtn}
>('forgot/forgotPassword', async (username, thunkAPI) => {
  try {
    const response = await Instance.post<any>(`${SERVER_IP}/user/forgot_password`, username);
    return response.data;
  } catch (err: any) {
    const error : AxiosError<any> = err;
    if (!error.response) throw err;
    return thunkAPI.rejectWithValue(error.response.data)
  }
})
