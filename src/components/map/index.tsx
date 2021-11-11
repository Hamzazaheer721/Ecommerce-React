/* eslint-disable no-alert */
/* eslint-disable no-undef */
/* eslint-disable one-var */
import { FC, useMemo, useCallback, memo, useEffect } from 'react'
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker
} from 'react-google-maps'
import { useDispatch, useSelector } from 'react-redux'
import { GOOGLE_MAP_URL } from '../../config/constants'
import {
  getAddressObj,
  getAddressObjWithCallback,
  getCurrentLatLang
} from '../../general/helper'
import { IGeoIntializeCustomData } from '../../types/geoLocation'
import {
  setGeoLocationState,
  updateGeoAddress
} from '../../redux/features/geoLocatonSlice'
import { RootState } from '../../redux/store'

interface IMapProps {
  latLng?: google.maps.LatLngLiteral
  height?: string
  zoom?: number
  setCurrentLocation?: boolean
}

const Map: FC<IMapProps> = memo(
  ({ latLng, height = '300px', zoom = 15, setCurrentLocation }: IMapProps) => {
    const dispatch = useDispatch()

    const { location } = useSelector(
      (state: RootState) => state.currentGeoLocation
    )

    const locationWorker: Worker = useMemo(
      () => new Worker('./workers/locationWorker.js'),
      []
    )

    const initializeCurrentPosition = useCallback(() => {
      getCurrentLatLang(async (res: google.maps.LatLngLiteral) => {
        dispatch(setGeoLocationState(res))
        getAddressObjWithCallback(res, (_res: IGeoIntializeCustomData) => {
          locationWorker.postMessage(_res)
        })
      })
    }, [locationWorker])

    useEffect(() => {
      latLng && dispatch(setGeoLocationState(latLng))
      setCurrentLocation && initializeCurrentPosition()
    }, [])

    useEffect(() => {
      locationWorker.onmessage = (event: MessageEvent) => {
        const { data } = event
        dispatch(updateGeoAddress({ geoCodeAddress: data }))
      }
    }, [locationWorker])

    const onMarkerDragEnd = useCallback(
      async (e: google.maps.MapMouseEvent) => {
        e.stop()
        const { latLng: latLangEvent } = e
        const mapObj: google.maps.LatLngLiteral = {
          lat: latLangEvent!.lat(),
          lng: latLangEvent!.lng()
        }
        const { lat, lng } = mapObj
        let response = await getAddressObj(lat, lng)
        if (response) {
          response = JSON.parse(JSON.stringify(response))
          locationWorker.postMessage(response)
        }
        dispatch(setGeoLocationState(mapObj))
      },
      [location]
    )

    const AsyncMap = useMemo(
      () =>
        // eslint-disable-next-line implicit-arrow-linebreak
        withScriptjs(
          withGoogleMap(
            memo(() => (
              <GoogleMap
                defaultZoom={zoom}
                defaultCenter={location!.mapPosition}
              >
                <Marker
                  draggable
                  onDragEnd={onMarkerDragEnd}
                  position={{
                    lat: location!.markerPosition.lat,
                    lng: location!.markerPosition.lng
                  }}
                />
              </GoogleMap>
            ))
          )
        ),
      [location]
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
