/* eslint-disable prefer-destructuring */
/* eslint-disable no-undef */
/* eslint-disable no-prototype-builtins */

import { IGeoLocationPayloadArg } from '../types/geoLocation'

/* eslint-disable no-restricted-syntax */
export const isObjectEmpty = (obj: any): boolean => {
  let key
  for (key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false
    }
  }
  return true
}

export const getCurrentLocation = (): Omit<
  IGeoLocationPayloadArg,
  'geoCodeAddress'
> => {
  let _geo: Omit<IGeoLocationPayloadArg, 'geoCodeAddress'> = {
    lng: '0',
    lat: '0'
  }
  if (navigator.geolocation) {
    // eslint-disable-next-line no-undef
    navigator.geolocation.getCurrentPosition(
      (position: GeolocationPosition) => {
        _geo = {
          lng: String(position.coords.longitude),
          lat: String(position.coords.latitude)
        }
      }
    )
  }
  return _geo
}

export const getAddress = (newLat: any, newLng: any) => {
  const geocoder = new google.maps.Geocoder()
  const latlng = new google.maps.LatLng(newLat, newLng)
  return geocoder.geocode({ location: latlng }, (results, status) => {
    let _result;
    if (status === google.maps.GeocoderStatus.OK) {
      if (results && results[0]) {
        _result = results[0]
      }
    } else {
      // eslint-disable-next-line no-console
      console.error('Error : ', status)
    }
    return _result
  })
}
