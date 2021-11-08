import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IGeoLocationLongLat } from '../../../types/geoLocation/index';

const initialState: Partial<IGeoLocationLongLat> = {}
export const currentGeoLocationSlice = createSlice({
  name: 'currentGeoLocation',
  initialState,
  reducers: {
    updateLocation: (state, action : PayloadAction<IGeoLocationLongLat>) => {
      const {payload} = action;
      state.lat = payload.lat;
      state.long = payload.long;
    }
  }
})

export const {updateLocation} = currentGeoLocationSlice.actions;
