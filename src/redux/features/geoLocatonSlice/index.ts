import { createSlice } from '@reduxjs/toolkit'
import {
  updateGeoAddressCaseReducer,
  setGeoAddressCaseReducer,
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
  address: {
    area: '',
    city: '',
    country: '',
    postalCode: '',
    state: '',
    streetAddress: ''
  }
}

export const currentGeoLocationSlice = createSlice({
  name: 'currentGeoLocation',
  initialState,
  reducers: {
    updateGeoAddressCaseReducer,
    setGeoAddressCaseReducer,
    setGeoLocationCaseReducer
  }
})

export const {
  updateGeoAddressCaseReducer: updateGeoAddress,
  setGeoAddressCaseReducer: setGeoAddressState,
  setGeoLocationCaseReducer: setGeoLocationState
} = currentGeoLocationSlice.actions
