import { createSlice } from '@reduxjs/toolkit'
import {
  updateGeoAddressCaseReducer,
  setGeoAddressCaseReducer
} from './caseReducers'
import { initialState } from './helper'

export const geoAddressSlice = createSlice({
  name: 'address',
  initialState,
  reducers: {
    updateGeoAddressCaseReducer,
    setGeoAddressCaseReducer
  }
})

export const {
  updateGeoAddressCaseReducer: updateGeoAddress,
  setGeoAddressCaseReducer: setGeoAddressState
} = geoAddressSlice.actions
