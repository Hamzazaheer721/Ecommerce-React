import { memo } from 'react'
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker
} from 'react-google-maps'
import { IPositionStateType } from '../types'

type IAsyncMapProps = {
  zoom: number
  mapPosition: IPositionStateType
  draggable: boolean
  markerPosition: IPositionStateType
}

const AsyncMap = withScriptjs(
  withGoogleMap(
    memo(({ zoom, mapPosition, draggable, markerPosition }: IAsyncMapProps) => (
      <GoogleMap defaultZoom={zoom} defaultCenter={mapPosition}>
        <Marker
          draggable={draggable}
          position={{ lat: markerPosition.lat, lng: markerPosition.lng }}
        />
      </GoogleMap>
    ))
  )
)

export default AsyncMap
