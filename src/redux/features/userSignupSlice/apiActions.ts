import { createAsyncThunk } from '@reduxjs/toolkit';
// import { AxiosResponse } from 'axios';
import { AxiosError } from 'axios';
import { SERVER_IP } from '../../../config/constants';
import { Instance } from '../../../config/axios';
import { IRegisterRtn, IRegisterType } from '../../../types/signup';

export const userSignup = createAsyncThunk<
  // return type of payload creator
  IRegisterRtn,
  // first arguement to the payload creator, in our case its user,
  // we could skip the type of it in later part
  IRegisterType,
  // types for thunkAPI
  { rejectValue: IRegisterRtn }
>('signup/signUpUser', async (user: IRegisterType, thunkAPI) => {
  try {
    const response = await Instance.post<any>(
      `${SERVER_IP}/user/register`,
      user
    )
    if (response.status === 400) return thunkAPI.rejectWithValue(response.data)
    return response.data
  } catch (err: any) {
    const error: AxiosError<any> = err // cast the error for access
    if (!error.response) {
      throw err
    }
    return thunkAPI.rejectWithValue(error.response.data)
  }
})
