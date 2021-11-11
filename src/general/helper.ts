/* eslint-disable prefer-destructuring */
/* eslint-disable no-undef */
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-restricted-syntax */

import { IGeoIntializeCustomData } from '../types/geoLocation'

export const isObjectEmpty = (obj: any): boolean => {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) return false
  }
  return true
}

export const getCurrentLatLang = (
  // eslint-disable-next-line no-unused-vars
  func: (_var: google.maps.LatLngLiteral) => void
): void => {
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  }

  const positionSuccess = (position: GeolocationPosition) => {
    const _obj: google.maps.LatLngLiteral = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    }
    func(_obj)
  }

  const positionError = (err: any) => {
    // eslint-disable-next-line no-console
    console.warn(`ERROR(${err.code}): ${err.message}`)
  }

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      positionSuccess,
      positionError,
      options
    )
  }
}

// eslint-disable-next-line max-len
export const getAddressObj = async (lat: number, lng: number) => {
  const geocoder = new google.maps.Geocoder()
  const latlng = new google.maps.LatLng(lat, lng)
  return geocoder.geocode(
    { location: latlng },
    (
      results: google.maps.GeocoderResult[] | null,
      status: google.maps.GeocoderStatus
    ) => {
      let _result
      if (status === google.maps.GeocoderStatus.OK) {
        if (results && results[0]) {
          _result = results[0]
        }
      } else {
        // eslint-disable-next-line no-console
        console.error('Error : ', status)
      }
      return JSON.parse(JSON.stringify(_result))
    }
  )
}

export const getAddressObjWithCallback = async (
  _obj: google.maps.LatLngLiteral,
  // eslint-disable-next-line no-unused-vars
  func: (res: IGeoIntializeCustomData) => void
) => {
  const { lat, lng } = _obj
  const geocoder = new google.maps.Geocoder()
  const latlng = new google.maps.LatLng(lat, lng)
  return geocoder.geocode(
    { location: latlng },
    (
      results: google.maps.GeocoderResult[] | null,
      status: google.maps.GeocoderStatus
    ) => {
      if (status === google.maps.GeocoderStatus.OK) {
        if (results && results[0]) {
          const __obj: IGeoIntializeCustomData = {
            results: [JSON.parse(JSON.stringify(results[0]))]
          }
          func(__obj)
        }
      } else {
        // eslint-disable-next-line no-console
        console.error('Error : ', status)
      }
    }
  )
}
