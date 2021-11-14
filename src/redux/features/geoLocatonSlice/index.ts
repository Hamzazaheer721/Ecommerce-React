import { createSlice } from '@reduxjs/toolkit'
import {
  setGeoLocationCaseReducer
} from './caseReducers'
import { IGeoLocationLongLat } from '../../../types/geoLocation/index'

export const initialState: Partial<IGeoLocationLongLat> = {
  location: {
    mapPosition: {
      lat: 31.4697,
      lng: 74.2728
    },
    markerPosition: {
      lat: 31.4697,
      lng: 74.2728
    }
  },
  inputFlag: false
}

export const currentGeoLocationSlice = createSlice({
  name: 'currentGeoLocation',
  initialState,
  reducers: {
    setGeoLocationCaseReducer
  }
})

export const {
  setGeoLocationCaseReducer: setGeoLocationState
} = currentGeoLocationSlice.actions
