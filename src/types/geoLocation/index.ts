export type IGeoLocationLongLat = {
  address: Partial<IGeoAddressType>
}

export type IGeoAddressType = {
  city: string,
  area: string,
  state: string,
  postalCode: string,
  country: string
}

export type IGeoLocationPayloadArg = {
  geoCodeAddress: any
}
