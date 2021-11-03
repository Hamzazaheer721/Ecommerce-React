import { useState, useEffect, memo, FC } from 'react'

import { GOOGLE_MAP_URL } from '../../config/constants'
import AsyncMap from './components'
import { IMapProps, IPositionStateType } from './types'

const Map: FC<IMapProps> = memo(
  ({ propsLat, propsLong, height, zoom }: IMapProps) => {
    const [mapPosition, setMapPosition] = useState<IPositionStateType>({
      lat: propsLat,
      lng: propsLong
    })
    const [draggable] = useState<boolean>(true)

    const [markerPosition, setMarkerPosition] = useState<IPositionStateType>({
      lat: propsLat,
      lng: propsLong
    })

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
          zoom={zoom}
          markerPosition={markerPosition}
          draggable={draggable}
          mapPosition={mapPosition}
        />
      </div>
    )
  }
)

export default Map
