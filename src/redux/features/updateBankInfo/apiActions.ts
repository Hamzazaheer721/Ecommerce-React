/* eslint-disable curly */
import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'
import { Instance } from '../../../config/axios'
// import { config } from '../../../general/helper'
import {
  IUpdateBankInfoPayloadRtn,
  IUpdateBankInfoPayloadArg,
  IUpdateBankInfoRejectedPayload
} from './types'

export const updateBankInfo = createAsyncThunk<
  IUpdateBankInfoPayloadRtn,
  IUpdateBankInfoPayloadArg,
  { rejectValue: IUpdateBankInfoRejectedPayload }
>(
  'updateBank/updateUserBankInfo',
  async (paymentInfo: IUpdateBankInfoPayloadArg, thunkAPI) => {
    try {
      const response = await Instance.put<any>('/store', paymentInfo)
      if (response.status === 400)
        // eslint-disable-next-line nonblock-statement-body-position
        return thunkAPI.rejectWithValue(response.data)
      return { ...response.data }
    } catch (err: any) {
      const error: AxiosError<IUpdateBankInfoRejectedPayload> = err // cast the error for access
      if (!error.response) {
        throw err
      }
      return thunkAPI.rejectWithValue(error.response.data)
    }
  }
)
