import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'
import { Instance } from '../../../config/axios'
import { SERVER_IP } from '../../../config/constants'
import {
  IResetPasswordErrorRtn,
  IResetPasswordPayloadArgs,
  IResetPasswordPayloadRtn
} from './types'

export const resetPassword = createAsyncThunk<
  IResetPasswordPayloadRtn,
  IResetPasswordPayloadArgs,
  { rejectValue: IResetPasswordErrorRtn }
>('reset/resetPassword', async (resetPasswordObj, thunkAPI) => {
  try {
    const response = await Instance.post<any>(
      `${SERVER_IP}/user/reset_password`,
      resetPasswordObj
    )
    return response.data
  } catch (err: any) {
    const error: AxiosError<IResetPasswordErrorRtn> = err
    if (!error.response) throw err
    return thunkAPI.rejectWithValue(error.response.data)
  }
})
