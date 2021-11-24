/* eslint-disable no-unreachable */
/* eslint-disable curly */
/* eslint-disable nonblock-statement-body-position */
import { AxiosError } from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { Instance } from '../../../config/axios'
import { IDeleteUserPayloadRtn, IDeleteUserRejectPayload } from './types'

export const deleteUser = createAsyncThunk<
  IDeleteUserPayloadRtn,
  string,
  { rejectValue: IDeleteUserRejectPayload }
>('delete/deleteUser', async (email, thunkAPI) => {
  try {
    const response = await Instance.delete<any>(`/user/delete/${email}`)
    if (response.status === 400) return thunkAPI.rejectWithValue(response.data)
    return { ...response.data }
  } catch (err: any) {
    const error: AxiosError<IDeleteUserRejectPayload> = err // cast the error for access
    if (!error.response) {
      throw err
    }
    return thunkAPI.rejectWithValue(error.response.data)
  }
})
