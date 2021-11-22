import { createSlice } from '@reduxjs/toolkit';
import { IContactFormInitialState } from './helper';

export const contactFormSlice = createSlice({
  name: 'contactForm',
  initialState: IContactFormInitialState,
  reducers: {},
  extraReducers: {}
})
