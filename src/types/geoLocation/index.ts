/* eslint-disable no-undef */
export type IGeoLocationLongLat = {
  location: IGeoLocationType
}

export type IGeoAddressObjStateType = {
  address: Partial<IGeoAddressType>
}

export type IGeoLocationType = {
  mapPosition: google.maps.LatLngLiteral,
  markerPosition: google.maps.LatLngLiteral
}

export type IGeoAddressType = {
  city: string,
  area: string,
  state: string,
  postalCode: string,
  country: string
  streetAddress: string
  location: string
}

export type IGeoLocationPayloadArg = {
  geoCodeAddress: any
}

export type IGeoLangLatType = {
  lng: number,
  lat: number
}

// eslint-disable-next-line no-undef
export type IGeoIntializeCustomData = { results: google.maps.GeocoderResult[] }
