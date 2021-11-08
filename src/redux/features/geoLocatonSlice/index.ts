import { createSlice } from '@reduxjs/toolkit';
import { updateLocationCaseReducer } from './caseReducers';
import { IGeoLocationLongLat } from '../../../types/geoLocation/index';

export const initialState: Partial<IGeoLocationLongLat> = {}
export const currentGeoLocationSlice = createSlice({
  name: 'currentGeoLocation',
  initialState,
  reducers: {
    updateLocationCaseReducer
  }
})

export const {updateLocationCaseReducer: updateLocation} = currentGeoLocationSlice.actions;
