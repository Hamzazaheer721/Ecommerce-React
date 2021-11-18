import {
  ChangeEvent,
  MouseEvent,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react'
import { usePlacesWidget } from 'react-google-autocomplete'
import { useDispatch, useSelector } from 'react-redux'
import { CheckboxChangeEvent } from 'antd/lib/checkbox'
import { IGeoAddressType } from '../../../../../../../types/geoLocation/index'
import { GOOGLE_MAP_API_KEY } from '../../../../../../../config/constants'
import { setGeoLocationState } from '../../../../../../../redux/features/geoLocatonSlice'
import { RootState } from '../../../../../../../redux/store'
import { setGeoAddressState } from '../../../../../../../redux/features/geoAddressSlice'
import { initialContactState } from './helper'
import { IContactStateType } from './types'

const useLocationForm = () => {
  const dispatch = useDispatch()
  const locationState = useSelector(
    (state: RootState) => state.currentAddressLocation
  )
  const { address } = locationState
  const timeInterval = useRef<NodeJS.Timeout>()

  const [contactData, setContactData] =
    useState<IContactStateType>(initialContactState)
  const { is_online } = contactData

  useEffect(
    () => () => {
      timeInterval.current && clearTimeout(timeInterval.current)
    },
    []
  )

  const handleSuffixClick = useCallback((e: MouseEvent<SVGSVGElement>) => {
    e.stopPropagation()
  }, [])

  const handleSecondSuffixClick = useCallback(
    (e: MouseEvent<SVGSVGElement>) => {
      e.stopPropagation()
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
      setContactData({ ...contactData, [name as string]: checked })
    },
    [contactData]
  )

  const handleAddressChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      e.preventDefault()
      e.stopPropagation()
      const { name, value } = e.target
      const _key: keyof IGeoAddressType = name as keyof IGeoAddressType
      dispatch(setGeoAddressState({ name: _key, value }))
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
