/* eslint-disable curly */
import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'
import { Instance } from '../../../config/axios'
import { config } from '../../../general/helper'
import {
  IUpdateBasicInfoPayloadRtn,
  IUpdateBasicInfoPayloadArg,
  IUpdateBasicInfoRejectedPayload
} from './types'

export const updateBasicInfo = createAsyncThunk<
  IUpdateBasicInfoPayloadRtn,
  IUpdateBasicInfoPayloadArg,
  { rejectValue: IUpdateBasicInfoRejectedPayload }
>(
  'updateBasicInfo/updateUserBasicInfo',
  async (paymentInfo: IUpdateBasicInfoPayloadArg, thunkAPI) => {
    try {
      const response = await Instance.put<any>('/store', paymentInfo, config)
      if (response.status === 400)
        // eslint-disable-next-line nonblock-statement-body-position
        return thunkAPI.rejectWithValue(response.data)
      return { ...response.data }
    } catch (err: any) {
      const error: AxiosError<IUpdateBasicInfoRejectedPayload> = err // cast the error for access
      if (!error.response) {
        throw err
      }
      return thunkAPI.rejectWithValue(error.response.data)
    }
  }
)
