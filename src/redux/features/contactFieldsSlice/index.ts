import { createSlice } from '@reduxjs/toolkit'
import { setContactFieldsCaseReducer } from './caseReducers';
import { IContactStateInitialState } from './helper'

export const contactFieldSlice = createSlice({
  name: 'contactFields',
  initialState: IContactStateInitialState,
  reducers: {
    setContactFields: setContactFieldsCaseReducer
  }
})

export const {setContactFields} = contactFieldSlice.actions
