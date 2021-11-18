/* eslint-disable no-undef */
import { useCallback, useEffect, useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { updateGeoAddress } from '../../../redux/features/geoAddressSlice'
import { setGeoLocationState } from '../../../redux/features/geoLocatonSlice'
import { IGeoIntializeCustomData } from '../../../types/geoLocation'
import { getAddressObjWithCallback, getCurrentLatLang } from '../../helper'

const useCurrentPosition = () => {
  const dispatch = useDispatch()

  const locationWorker = useMemo<Worker>(
    () => new Worker('./workers/locationWorker.js'),
    []
  )

  const initializeCurrentPosition = useCallback(() => {
    getCurrentLatLang(async (res: google.maps.LatLngLiteral) => {
      dispatch(setGeoLocationState({ position: res }))
      getAddressObjWithCallback(res, (_res: IGeoIntializeCustomData) => {
        locationWorker.postMessage(_res)
      })
    })
  }, [])

  useEffect(() => {
    locationWorker.onmessage = (event: MessageEvent) => {
      const { data } = event
      dispatch(updateGeoAddress({ geoCodeAddress: data }))
    }
  }, [locationWorker])

  return {
    initializeCurrentPosition
  }
}

export default useCurrentPosition
