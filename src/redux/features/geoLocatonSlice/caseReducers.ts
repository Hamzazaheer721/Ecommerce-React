import { CaseReducer, PayloadAction } from '@reduxjs/toolkit'
import {
  IGeoLocationLongLat
} from '../../../types/geoLocation/index'

export const setGeoLocationCaseReducer : CaseReducer<
  Partial<IGeoLocationLongLat>,
  // eslint-disable-next-line no-undef
  PayloadAction<google.maps.LatLngLiteral>
> = (state, action) => {
  const {payload} = action
  const {location} = state
  location!.mapPosition = payload
  location!.markerPosition = payload
}
