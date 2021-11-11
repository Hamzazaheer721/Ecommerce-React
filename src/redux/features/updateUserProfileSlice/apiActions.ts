/* eslint-disable curly */
/* eslint-disable nonblock-statement-body-position */
import { AxiosError } from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { SERVER_IP } from '../../../config/constants'
import { Instance } from '../../../config/axios'
import {
  IUpdateProfilePayloadRtn,
  IUpdateUserProfilePayloadArg,
  IUpdateUserProfileRejectPayload
} from './types'
import { IRegisterRtn } from '../../../types/signup/index'

export const UpdateUserProfile = createAsyncThunk<
  IUpdateProfilePayloadRtn,
  IUpdateUserProfilePayloadArg,
  { rejectValue: IUpdateUserProfileRejectPayload }
>(
  'updateUser/updateUserProfile',
  async (userProfile: IUpdateUserProfilePayloadArg, thunkAPI) => {
    try {
      const response = await Instance.post<any>(
        `${SERVER_IP}/user/profile`,
        userProfile
      )
      if (response.status === 400)
        return thunkAPI.rejectWithValue(response.data)
      return { ...response.data }
    } catch (err: any) {
      const error: AxiosError<IRegisterRtn> = err // cast the error for access
      if (!error.response) {
        throw err
      }
      return thunkAPI.rejectWithValue(error.response.data)
    }
  }
)
