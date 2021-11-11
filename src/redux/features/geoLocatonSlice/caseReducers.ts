import { CaseReducer, PayloadAction } from '@reduxjs/toolkit'
import { IGeoAddressType, IGeoLocationLongLat, IGeoLocationPayloadArg } from '../../../types/geoLocation/index';

export const updateLocationCaseReducer: CaseReducer<
  Partial<IGeoLocationLongLat>,
  PayloadAction<Partial<IGeoLocationPayloadArg>>
> = (state, action) => {
  const { payload } = action
  if (payload.geoCodeAddress && state.address) {
    const {geoCodeAddress} = payload;
    state.address.area = geoCodeAddress?.area;
    state.address.city = geoCodeAddress?.city;
    state.address.country = geoCodeAddress?.country;
    state.address.postalCode = geoCodeAddress?.postalCode;
    state.address.state = geoCodeAddress?.state;
    state.address.streetAddress = geoCodeAddress?.streetAddress;
    state.address.location = geoCodeAddress?.location;
  }
}

export const setLocationCaseReducer: CaseReducer<
  Partial<IGeoLocationLongLat>,
  PayloadAction<{name: keyof IGeoAddressType, value: string}>
  > = (state, action) => {
    const {payload} = action;
    const {address} = state;
    if (address) {
      address[payload.name] = payload.value;
    }
  }
