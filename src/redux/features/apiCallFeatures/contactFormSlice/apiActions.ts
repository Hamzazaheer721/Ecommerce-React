import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'
import { Instance } from '../../../../config/axios'
import { SERVER_IP } from '../../../../config/constants'
import { config } from '../../../../general/helper'
import { IContactFormType } from '../../../../types/contact'
import { IContactFormErrorPayloadRtn, IContactFormPayloadRtn } from './types'

export const saveContactFormData = createAsyncThunk<
  IContactFormPayloadRtn,
  IContactFormType,
  { rejectValue: IContactFormErrorPayloadRtn }
>(
  'contactForm/saveContactFormData',
  async (_data: IContactFormType, thunkAPI) => {
    try {
      const response = await Instance.put<any>(
        `${SERVER_IP}/store`,
        _data,
        config
      )
      return { ...response.data }
    } catch (err: any) {
      const error: AxiosError<IContactFormErrorPayloadRtn> = err
      if (!error.response) throw err
      return thunkAPI.rejectWithValue(error.response.data)
    }
  }
)
