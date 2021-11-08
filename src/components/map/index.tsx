/* eslint-disable no-alert */
/* eslint-disable no-undef */
/* eslint-disable one-var */
import { useState, FC, useMemo, useCallback, memo } from 'react'
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker
} from 'react-google-maps'
import { useDispatch } from 'react-redux'
import { GOOGLE_MAP_URL } from '../../config/constants'
import { updateLocation } from '../../redux/features/geoLocatonSlice'
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
    const dispatch = useDispatch()
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

        const geocoder = new google.maps.Geocoder()
        const latlng = new google.maps.LatLng(newLat, newLng)
        geocoder.geocode({ location: latlng }, (results, status) => {
          if (status === google.maps.GeocoderStatus.OK) {
            results &&
              results[0] &&
              dispatch(
                updateLocation({
                  geoCodeAddress: results[0].address_components
                })
              )
          } else {
            // eslint-disable-next-line no-console
            console.error('Error : ', status)
          }
        })

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
