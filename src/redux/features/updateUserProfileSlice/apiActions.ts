/* eslint-disable curly */
/* eslint-disable nonblock-statement-body-position */
import { AxiosError } from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { Instance } from '../../../config/axios'
import {
  IUpdateProfilePayloadRtn,
  IUpdateUserProfilePayloadArg,
  IUpdateUserProfileRejectPayload
} from './types'

export const UpdateUserProfile = createAsyncThunk<
  IUpdateProfilePayloadRtn,
  IUpdateUserProfilePayloadArg,
  { rejectValue: IUpdateUserProfileRejectPayload }
>(
  'updateUser/updateUserProfile',
  async (userProfile: IUpdateUserProfilePayloadArg, thunkAPI) => {
    try {
      const response = await Instance.put<any>('/user/profile', userProfile)
      if (response.status === 400)
        return thunkAPI.rejectWithValue(response.data)
      return { ...response.data }
    } catch (err: any) {
      const error: AxiosError<IUpdateUserProfileRejectPayload> = err // cast the error for access
      if (!error.response) {
        throw err
      }
      return thunkAPI.rejectWithValue(error.response.data)
    }
  }
)
