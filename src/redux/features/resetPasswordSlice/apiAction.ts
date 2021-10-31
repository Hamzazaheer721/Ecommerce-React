import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'
import produce from 'immer'
import { Instance } from '../../../config/axios'
import { SERVER_IP } from '../../../config/constants'
import {
  IResetPasswordErrorRtn,
  IResetPasswordPayloadArgs,
  IResetPasswordPayloadRtn
} from './types'

export const resetPassword = createAsyncThunk<
  IResetPasswordPayloadRtn,
  Pick<
    IResetPasswordPayloadArgs,
    'password' | 'password_confirmation' | 'activation_code' | 'username'
  >,
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

export const resetPasswordWithLink = createAsyncThunk<
  IResetPasswordPayloadRtn,
  Omit<IResetPasswordPayloadArgs, 'activation_code' | 'username'>,
  { rejectValue: IResetPasswordErrorRtn }
>('reset/resetPasswordWithLink', async (resetPasswordObj, thunkAPI) => {
  try {
    const { userId } = resetPasswordObj
    const updatedData: Pick<
      IResetPasswordPayloadArgs,
      'password_confirmation' | 'password'
    > = produce(resetPasswordObj, (draft) => {
      delete draft.userId
      return draft
    })
    const response = await Instance.post<any>(
      `${SERVER_IP}/user/reset_link?resetHash=${userId}`,
      updatedData
    )
    return response.data
  } catch (err: any) {
    const error: AxiosError<IResetPasswordErrorRtn> = err
    if (!error.response) throw err
    return thunkAPI.rejectWithValue(error.response.data)
  }
})
