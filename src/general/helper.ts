/* eslint-disable prefer-destructuring */
/* eslint-disable no-undef */
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-restricted-syntax */
declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    google: any
  }
}
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
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position: GeolocationPosition) => {
      _geo.push(position.coords.longitude)
      _geo.push(position.coords.latitude)
      func(_geo)
    })
  }
  // // eslint-disable-next-line no-var
  // var _geo: number[] = []
  // const options = {
  //   enableHighAccuracy: true,
  //   timeout: 5000,
  //   maximumAge: 0
  // }

  // const positionSuccess = (position: GeolocationPosition) => {
  //   _geo.push(position.coords.longitude)
  //   _geo.push(position.coords.latitude)
  //   func(_geo)
  // }

  // const positionError = (err: any) => {
  //   // eslint-disable-next-line no-console
  //   console.warn(`ERROR(${err.code}): ${err.message}`)
  // }

  // if (navigator.geolocation) {
  //   // eslint-disable-next-line no-undef
  //   navigator.geolocation.getCurrentPosition(
  //     positionSuccess,
  //     positionError,
  //     options
  //   )
  // }
}

// eslint-disable-next-line max-len
export const getAddressObj = async (newLat: any, newLng: any) => {
  const geocoder = new google.maps.Geocoder()
  const latlng = new google.maps.LatLng(newLat, newLng)
  return geocoder.geocode({ location: latlng }, (results, status) => {
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
  })
}

export const getAddressObjWithCallback = async (
  newLat: number,
  newLng: number,
  func: any
) => {
 const geocoder = new google.maps.Geocoder()
  const latlng = new google.maps.LatLng(newLat, newLng)
  return geocoder.geocode({ location: latlng }, (results, status) => {
    if (status === google.maps.GeocoderStatus.OK) {
      if (results && results[0]) {
        func(results[0])
      }
    } else {
      // eslint-disable-next-line no-console
      console.error('Error : ', status)
    }
  })
}
