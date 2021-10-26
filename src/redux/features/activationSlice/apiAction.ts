import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios';
import { Instance } from '../../../config/axios'
import { SERVER_IP } from '../../../config/constants';
import { IActivationPayloadRtn, IActivationThunkArgType } from './types'

export const activateAccount = createAsyncThunk<
  IActivationPayloadRtn,
  IActivationThunkArgType,
  { rejectValue: IActivationPayloadRtn }
>('activation/activateAccount', async (data: IActivationThunkArgType, thunkAPI) => {
  try {
    const response = await Instance.post<any>(`${SERVER_IP}/user/verify`, data)
    if (response.status === 400) return thunkAPI.rejectWithValue(response.data)
    return response.data
  } catch (err: any) {
    const error : AxiosError<IActivationPayloadRtn> = err
    if (!error.response) throw err;
    return thunkAPI.rejectWithValue(error.response.data)
  }
})
