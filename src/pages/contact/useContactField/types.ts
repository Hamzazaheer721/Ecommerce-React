export type IContactFormDefaultErrorTypes = {
  purpose: 'contact'
  is_online: false
  email: string
  mobile_number: string
  location: string
  state: string
  area: string
  address: string
  city: string
  country: string
  latitude: number
  longitude: number
  postal_code?: string
  phone_number?: string
  website?: string
  ntn_num?: string
}

export type IContactFormIsOnlineErrorTypes = {
  purpose: 'contact'
  is_online: true
  email: string
  mobile_number: string
  website?: string
  location?: string
  state?: string
  area?: string
  address?: string
  city?: string
  country?: string
  latitude?: number
  longitude?: number
  postal_code?: string
  phone_number?: string
  ntn_num?: string
}

export type IContactFormErrorType =
  | IContactFormDefaultErrorTypes
  | IContactFormIsOnlineErrorTypes
