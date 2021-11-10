/* eslint-disable no-alert */
/* eslint-disable no-undef */
/* eslint-disable one-var */
import { useState, FC, useMemo, useCallback, memo, useEffect } from 'react'
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker
} from 'react-google-maps'
import { useDispatch } from 'react-redux'
import { GOOGLE_MAP_URL } from '../../config/constants'
import {
  getAddressObj,
  getAddressObjWithCallback,
  getCurrentLatLang
} from '../../general/helper'
import { IGeoIntializeCustomData } from '../../types/geoLocation'
import { updateLocation } from '../../redux/features/geoLocatonSlice'
import { IPositionStateType } from './types'

interface IMapProps {
  propsLat?: number
  propsLong?: number
  height?: string
  zoom?: number
  setCurrentLocation?: boolean
}

const Map: FC<IMapProps> = memo(
  ({
    propsLat = 31.4697,
    propsLong = 74.2728,
    height = '300px',
    zoom = 15,
    setCurrentLocation
  }: IMapProps) => {
    const dispatch = useDispatch()

    const [mapPosition, setMapPosition] = useState<IPositionStateType>({
      lat: propsLat,
      lng: propsLong
    })
    const [markerPosition, setMarkerPosition] = useState<IPositionStateType>({
      lat: propsLat,
      lng: propsLong
    })

    const locationWorker: Worker = useMemo(
      () => new Worker('./workers/locationWorker.js'),
      []
    )

    const initializeCurrentPosition = useCallback(() => {
      getCurrentLatLang(async (res: google.maps.LatLngLiteral) => {
        getAddressObjWithCallback(res, (_res: IGeoIntializeCustomData) => {
          locationWorker.postMessage(_res)
        })
      })
    }, [locationWorker])

    useEffect(() => {
      setCurrentLocation && initializeCurrentPosition()
    }, [])

    useEffect(() => {
      locationWorker.onmessage = (event: MessageEvent) => {
        const { data } = event
        dispatch(updateLocation({ geoCodeAddress: data }))
      }
    }, [locationWorker])

    const onMarkerDragEnd = useCallback(
      async (e: google.maps.MapMouseEvent) => {
        e.stop()
        const { latLng } = e
        const newLat = latLng!.lat()
        const newLng = latLng!.lng()
        let response = await getAddressObj(newLat, newLng)
        if (response) {
          response = JSON.parse(JSON.stringify(response))
          locationWorker.postMessage(response)
        }
        const mapObj: typeof mapPosition | typeof markerPosition = {
          lat: newLat,
          lng: newLng
        }
        setMapPosition(mapObj)
        setMarkerPosition(mapObj)
      },
      [markerPosition, mapPosition]
    )

    const AsyncMap = useMemo(
      () =>
        // eslint-disable-next-line implicit-arrow-linebreak
        withScriptjs(
          withGoogleMap(
            memo(() => (
              <GoogleMap defaultZoom={zoom} defaultCenter={mapPosition}>
                <Marker
                  draggable
                  onDragEnd={onMarkerDragEnd}
                  position={{
                    lat: markerPosition.lat,
                    lng: markerPosition.lng
                  }}
                />
              </GoogleMap>
            ))
          )
        ),
      [mapPosition, markerPosition]
    )

    return (
      <div>
        <AsyncMap
          googleMapURL={GOOGLE_MAP_URL}
          loadingElement={<div style={{ height: '100%' }} />}
          containerElement={<div style={{ height }} />}
          mapElement={<div style={{ height: '100%' }} />}
        />
      </div>
    )
  }
)

export default Map
