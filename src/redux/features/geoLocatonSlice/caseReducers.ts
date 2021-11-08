import { CaseReducer, PayloadAction } from '@reduxjs/toolkit'
import { IGeoLocationLongLat } from '../../../types/geoLocation'

export const updateLocationCaseReducer: CaseReducer<
  Partial<IGeoLocationLongLat>,
  PayloadAction<IGeoLocationLongLat>
> = (state, action) => {
  const {payload} = action;
  state.lat = payload.lat;
  state.long = payload.long;
}
