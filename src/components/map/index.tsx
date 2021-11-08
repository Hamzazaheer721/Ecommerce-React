/* eslint-disable one-var */
import { useState, FC, useMemo, useCallback, memo } from 'react'
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker
} from 'react-google-maps'
import { GOOGLE_MAP_URL } from '../../config/constants'
import { IPositionStateType } from './types'

interface IMapProps {
  propsLat?: number
  propsLong?: number
  height?: string
  zoom?: number
}

const Map: FC<IMapProps> = memo(
  ({
    propsLat = 31.4697,
    propsLong = 74.2728,
    height = '300px',
    zoom = 15
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
        const { latLng } = coord
        const newLat = latLng.lat()
        const newLng = latLng.lng()

        setMapPosition({
          lat: newLat,
          lng: newLng
        })
        setMarkerPosition({
          lat: newLat,
          lng: newLng
        })
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
                  draggable={draggable}
                  onDragEnd={(coord) => onMarkerDragEnd(coord)}
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
