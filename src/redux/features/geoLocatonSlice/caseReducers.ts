import { CaseReducer, PayloadAction } from '@reduxjs/toolkit'
import {
  IGeoLocationLongLat
} from '../../../types/geoLocation/index'

export const setGeoLocationCaseReducer : CaseReducer<
  Partial<IGeoLocationLongLat>,
  // eslint-disable-next-line no-undef
  PayloadAction<{ position: google.maps.LatLngLiteral, flag?: boolean}>
> = (state, action) => {
  const {payload} = action
  const {location} = state
  location!.mapPosition = payload.position
  location!.markerPosition = payload.position
  if (payload.flag) {
    state.inputFlag = payload.flag
  }
}
