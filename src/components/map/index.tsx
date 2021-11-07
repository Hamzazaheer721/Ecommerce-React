/* eslint-disable one-var */
import { useState, FC, useMemo, useEffect } from 'react'
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker
} from 'react-google-maps'
import Geocode from 'react-geocode'
import { GOOGLE_MAP_URL } from '../../config/constants'

Geocode.setApiKey('AIzaSyB0FVkc6oMvpT1XJ-7PTiJL3w9CosGINDM')
Geocode.enableDebug()

interface IMapProps {
  propsLat: number
  propsLong: number
  height: string
  zoom: number
}

type IMapPositionStateType = {
  lat: number
  lng: number
}

type IMarkerPositionStateType = {
  lat: number
  lng: number
}

const Map: FC<IMapProps> = ({
  propsLat,
  propsLong,
  height,
  zoom
}: IMapProps) => {
  const [mapPosition, setMapPosition] = useState<IMapPositionStateType>({
    lat: propsLat,
    lng: propsLong
  })
  const [dragable] = useState<boolean>(true)

  const [markerPosition, setMarkerPosition] =
    useState<IMarkerPositionStateType>({
      lat: propsLat,
      lng: propsLong
    })

  useEffect(() => {
    setMapPosition({
      lat: propsLat,
      lng: propsLong
    })
  }, [])

  const onMarkerDragEnd = (coord: any) => {
    // eslint-disable-next-line one-var
    const { latLng } = coord
    const newLat = latLng.lat()
    const newLng = latLng.lng()

    Geocode.fromLatLng(newLat, newLng).then(
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
  }

  const AsyncMap = useMemo(
    () =>
      // eslint-disable-next-line implicit-arrow-linebreak
      withScriptjs(
        withGoogleMap(() => (
          <GoogleMap defaultZoom={zoom} defaultCenter={mapPosition}>
            <Marker
              draggable={dragable}
              onDragEnd={(coord) => onMarkerDragEnd(coord)}
              position={{ lat: markerPosition.lat, lng: markerPosition.lng }}
            />
          </GoogleMap>
        ))
      ),
    []
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
