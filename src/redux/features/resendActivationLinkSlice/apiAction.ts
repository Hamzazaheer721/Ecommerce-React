import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios';
import { SERVER_IP } from '../../../config/constants';
import { Instance } from '../../../config/axios'
import { IResendActivationErrorRtn, IResendActivationPayloadRtn } from './types'

export const resendActivationCode = createAsyncThunk<
  IResendActivationPayloadRtn,
  string,
  {rejectValue: IResendActivationErrorRtn}
  >(
  'resend/resendActivationCode',
  async (username, thunkAPI) => {
    try {
      const response = await Instance.post<any>(`${SERVER_IP}/user/resend_code`, username);
      return response.data;
    } catch (err: any) {
      const error: AxiosError<IResendActivationErrorRtn> = err;
      if (!error.response) throw err;
      return thunkAPI.rejectWithValue(error.response.data)
    }
  }
)
