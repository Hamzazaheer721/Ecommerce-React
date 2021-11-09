export type IGeoLocationLongLat = {
  address: Partial<IGeoAddressType>
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
