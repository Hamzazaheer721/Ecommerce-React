import { createAsyncThunk } from '@reduxjs/toolkit';
import { SERVER_IP } from '../../../config/constants';
import { Instance } from '../../../config/axios';
import { IUserType } from '../../../types/user';

export const userSignup = createAsyncThunk(
  'user/signUpUser',
  async (user: IUserType) => {
    await Instance({
      method: 'post',
      url: `${SERVER_IP}`,
      data: user
    }).then((res) => {
      console.info('response', res)
    }).catch((err) => console.error(err))
  }
)
