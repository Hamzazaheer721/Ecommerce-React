export type IGeoLocationLongLat = {
  long: number,
  lat: number,
  address?: Partial<IGeoAddressType>
}

export type IGeoAddressType = {
  city: string,
  area: string,
  state: string,
  postalCode: string,
  country: string
}
