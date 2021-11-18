/* eslint-disable no-unreachable */
/* eslint-disable curly */
/* eslint-disable nonblock-statement-body-position */
import { AxiosError } from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { Instance } from '../../../config/axios'
import {
  IDeactivateUserPayloadRtn,
  IDeactivateUserRejectPayload
} from './types'
import { config } from '../../../general/helper'

export const deactivateUser = createAsyncThunk<
  IDeactivateUserPayloadRtn,
  void,
  { rejectValue: IDeactivateUserRejectPayload }
>('deactivate/deactivateUser', async (_, thunkAPI) => {
  try {
    const response = await Instance.get<any>('/user/deactivate', config)
    if (response.status === 400) return thunkAPI.rejectWithValue(response.data)
    return { ...response.data }
  } catch (err: any) {
    const error: AxiosError<IDeactivateUserRejectPayload> = err // cast the error for access
    if (!error.response) {
      throw err
    }
    return thunkAPI.rejectWithValue(error.response.data)
  }
})
