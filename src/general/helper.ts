/* eslint-disable prefer-destructuring */
/* eslint-disable no-undef */
/* eslint-disable no-prototype-builtins */
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

export function getCurrentLatLang(func: any) {
  const _geo: number[] = []

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  }

  const positionSuccess = (position: GeolocationPosition) => {
    _geo.push(position.coords.latitude)
    _geo.push(position.coords.longitude)
    func(_geo)
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
export const getAddressObj = async (newLat: number, newLng: number) => {
  const geocoder = new google.maps.Geocoder()
  const latlng = new google.maps.LatLng(newLat, newLng)
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
      return _result
    }
  )
}

export const getAddressObjWithCallback = async (
  _obj: google.maps.LatLngLiteral,
  // eslint-disable-next-line no-unused-vars
  func: (res: google.maps.GeocoderResult) => void
) => {
  const {lat, lng} = _obj
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
          func(results[0])
        }
      } else {
        // eslint-disable-next-line no-console
        console.error('Error : ', status)
      }
    }
  )
}
