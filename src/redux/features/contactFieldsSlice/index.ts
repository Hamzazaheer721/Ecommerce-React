import { createSlice } from '@reduxjs/toolkit';
import { IContactStateInitialState } from './helper';

export const contactFieldSlice = createSlice({
  name: 'contactFields',
  initialState: IContactStateInitialState,
  reducers: {}
})
