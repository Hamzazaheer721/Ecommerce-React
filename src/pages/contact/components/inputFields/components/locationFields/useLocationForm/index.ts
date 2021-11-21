import { ChangeEvent, MouseEvent, useCallback, useEffect, useRef } from 'react'
import { usePlacesWidget } from 'react-google-autocomplete'
import { useDispatch, useSelector } from 'react-redux'
import { CheckboxChangeEvent } from 'antd/lib/checkbox'
import { IGeoAddressType } from '../../../../../../../types/geoLocation/index'
import { GOOGLE_MAP_API_KEY } from '../../../../../../../config/constants'
import { setGeoLocationState } from '../../../../../../../redux/features/geoLocatonSlice'
import { RootState } from '../../../../../../../redux/store'
import { setGeoAddressState } from '../../../../../../../redux/features/geoAddressSlice'
import useCurrentPosition from '../../../../../../../general/hooks/useCurrentPosition'

const useLocationForm = () => {
  const dispatch = useDispatch()
  const locationState = useSelector(
    (state: RootState) => state.currentAddressLocation
  )
  const { address, is_online } = locationState
  const timeInterval = useRef<NodeJS.Timeout>()

  const { initializeCurrentPosition } = useCurrentPosition()

  useEffect(
    () => () => {
      timeInterval.current && clearTimeout(timeInterval.current)
    },
    []
  )

  const handleSuffixClick = useCallback((e: MouseEvent<SVGSVGElement>) => {
    e.preventDefault()
    e.stopPropagation()
    const name: keyof IGeoAddressType = 'location'
    dispatch(setGeoAddressState({ name, value: '' }))
  }, [])

  const handleSecondSuffixClick = useCallback(
    (e: MouseEvent<SVGSVGElement>) => {
      e.preventDefault()
      e.stopPropagation()
      initializeCurrentPosition()
    },
    []
  )

  const handlePlaceSelected = useCallback(
    // eslint-disable-next-line no-undef
    (places: google.maps.places.PlaceResult) => {
      const { geometry } = places
      if (geometry) {
        // eslint-disable-next-line no-undef
        const _obj: google.maps.LatLngLiteral = {
          lat: geometry.location!.lat(),
          lng: geometry.location!.lng()
        }
        timeInterval.current = setTimeout(() => {
          dispatch(setGeoLocationState({ position: _obj, flag: true }))
        }, 500)
      }
    },
    [address]
  )

  const handleContactChange = useCallback(
    (e: CheckboxChangeEvent) => {
      e.stopPropagation()
      const { name, checked } = e.target
      const _key: keyof IGeoAddressType | 'is_online' = name as
        | 'is_online'
        | keyof IGeoAddressType
      dispatch(setGeoAddressState({ name: _key, value: checked }))
    },
    [is_online]
  )

  const handleAddressChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      e.stopPropagation()
      const { name, value } = e.target
      const _key: keyof IGeoAddressType | 'is_online' = name as
        | 'is_online'
        | keyof IGeoAddressType
      if (name === 'is_online') {
        const { checked } = e.target
        dispatch(setGeoAddressState({ name: _key, value: checked }))
      } else {
        e.preventDefault()
        dispatch(setGeoAddressState({ name: _key, value }))
      }
    },
    [address]
  )

  const { ref: autoCompleteRef } = usePlacesWidget({
    apiKey: GOOGLE_MAP_API_KEY,
    onPlaceSelected: handlePlaceSelected
  })

  return {
    is_online,
    handleSuffixClick,
    handleAddressChange,
    handleContactChange,
    handleSecondSuffixClick,
    autoCompleteRef,
    area: address?.area,
    city: address?.city,
    state: address?.state,
    country: address?.country,
    location: address?.location,
    postalCode: address?.postalCode,
    streetAddress: address?.streetAddress
  }
}

export default useLocationForm
