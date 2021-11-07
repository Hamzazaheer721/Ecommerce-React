/* eslint-disable one-var */
import { useState, FC, useMemo, useCallback } from 'react'
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker
} from 'react-google-maps'
import Geocode from 'react-geocode'
import { GOOGLE_MAP_API_KEY, GOOGLE_MAP_URL } from '../../config/constants'
import { IPositionStateType } from './types'

Geocode.setApiKey(GOOGLE_MAP_API_KEY)
Geocode.enableDebug()

interface IMapProps {
  propsLat?: number
  propsLong?: number
  height: string
  zoom: number
}

const Map: FC<IMapProps> = ({
  propsLat = 59.955413,
  propsLong = 30.337844,
  height,
  zoom
}: IMapProps) => {
  const [mapPosition, setMapPosition] = useState<IPositionStateType>({
    lat: propsLat,
    lng: propsLong
  })
  const [draggable] = useState<boolean>(true)

  const [markerPosition, setMarkerPosition] = useState<IPositionStateType>({
    lat: propsLat,
    lng: propsLong
  })

  const onMarkerDragEnd = useCallback(
    async (coord: any) => {
      // eslint-disable-next-line one-var
      const { latLng } = coord
      const newLat = latLng.lat()
      const newLng = latLng.lng()
      await Geocode.fromLatLng(newLat, newLng).then(
        () => {
          setMapPosition({
            lat: newLat,
            lng: newLng
          })
          setMarkerPosition({
            lat: newLat,
            lng: newLng
          })
        },
        (error) => {
          // eslint-disable-next-line no-console
          console.error(error)
        }
      )
    },
    [markerPosition, mapPosition]
  )

  const AsyncMap = useMemo(
    () =>
      // eslint-disable-next-line implicit-arrow-linebreak
      withScriptjs(
        withGoogleMap(() => (
          <GoogleMap defaultZoom={zoom} defaultCenter={mapPosition}>
            <Marker
              draggable={draggable}
              onDragEnd={(coord) => onMarkerDragEnd(coord)}
              position={{ lat: markerPosition.lat, lng: markerPosition.lng }}
            />
          </GoogleMap>
        ))
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

export default Map
