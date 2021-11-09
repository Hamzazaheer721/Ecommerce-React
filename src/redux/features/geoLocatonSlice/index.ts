import { createSlice } from '@reduxjs/toolkit';
import { updateLocationCaseReducer } from './caseReducers';
import { IGeoLocationLongLat } from '../../../types/geoLocation/index';

export const initialState: Partial<IGeoLocationLongLat> = {
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
    updateLocationCaseReducer
  }
})

export const {updateLocationCaseReducer: updateLocation} = currentGeoLocationSlice.actions;
