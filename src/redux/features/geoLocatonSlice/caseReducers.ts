import { CaseReducer, PayloadAction } from '@reduxjs/toolkit'
import {
  IGeoAddressType,
  IGeoLocationLongLat,
  IGeoLocationPayloadArg
} from '../../../types/geoLocation/index'

export const updateGeoAddressCaseReducer: CaseReducer<
  Partial<IGeoLocationLongLat>,
  PayloadAction<Partial<IGeoLocationPayloadArg>>
> = (state, action) => {
  const { payload } = action
  if (payload.geoCodeAddress && state.address) {
    const { geoCodeAddress } = payload
    state.address.area = geoCodeAddress?.area
    state.address.city = geoCodeAddress?.city
    state.address.country = geoCodeAddress?.country
    state.address.postalCode = geoCodeAddress?.postalCode
    state.address.state = geoCodeAddress?.state
    state.address.streetAddress = geoCodeAddress?.streetAddress
    state.address.location = geoCodeAddress?.location
  }
}

export const setGeoAddressCaseReducer: CaseReducer<
  Partial<IGeoLocationLongLat>,
  PayloadAction<{ name: keyof IGeoAddressType; value: string }>
> = (state, action) => {
  const { payload } = action
  const { address } = state
  if (address) {
    address[payload.name] = payload.value
  }
}

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
