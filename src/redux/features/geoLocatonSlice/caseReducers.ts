import { CaseReducer, PayloadAction } from '@reduxjs/toolkit'
import { IGeoLocationLongLat, IGeoLocationPayloadArg } from '../../../types/geoLocation'

export const getArea = () => {

}

export const getState = () => {

}

export const getCity = () => {

}

export const updateLocationCaseReducer: CaseReducer<
  Partial<IGeoLocationLongLat>,
  PayloadAction<Partial<IGeoLocationPayloadArg>>
> = (state, action) => {
  const { payload } = action
  if (payload.geoCodeAddress) {
    const locationWorker: Worker = new Worker('./workers/locationWorker.js')
    locationWorker.postMessage(payload.geoCodeAddress)
  }
}
