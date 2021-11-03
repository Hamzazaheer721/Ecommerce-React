import { useState, useEffect, memo, FC, useMemo } from 'react'
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker
} from 'react-google-maps'
import { GOOGLE_MAP_URL } from '../../config/constants'

type IMapProps = {
  propsLat: number
  propsLong: number
  height: string
  zoom: number
}

type IPositionStateType = {
  lat: number
  lng: number
}

const Map: FC<IMapProps> = memo(
  ({ propsLat, propsLong, height, zoom }: IMapProps) => {
    const [mapPosition, setMapPosition] = useState<IPositionStateType>({
      lat: propsLat,
      lng: propsLong
    })
    const [dragable] = useState<boolean>(false)

    const [markerPosition, setMarkerPosition] = useState<IPositionStateType>({
      lat: propsLat,
      lng: propsLong
    })

    const AsyncMap = useMemo(
      () =>
        // eslint-disable-next-line implicit-arrow-linebreak
        withScriptjs(
          withGoogleMap(() => (
            <GoogleMap defaultZoom={zoom} defaultCenter={mapPosition}>
              <Marker
                draggable={dragable}
                position={{ lat: markerPosition.lat, lng: markerPosition.lng }}
              />
            </GoogleMap>
          ))
        ),
      []
    )

    useEffect(() => {
      setMapPosition({
        lat: propsLat,
        lng: propsLong
      })
      setMarkerPosition({
        lat: propsLat,
        lng: propsLong
      })
    }, [])

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
