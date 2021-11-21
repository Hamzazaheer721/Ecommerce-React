export type IContactFormDefaultErrorTypes = {
  purpose: 'contact'
  is_online: false
  email: string
  website: string
  address: string
  city: string
  country: string
  latitude: string
  longitude: string
  postal_code?: string
  phone_number?: string
  mobile_number?: string
  ntn_num?: string
}

export type IContactFormIsOnlineErrorTypes = {
  purpose: 'contact'
  is_online: true
  email: string
  website: string
  address?: string
  city?: string
  country?: string
  latitude?: string
  longitude?: string
  postal_code?: string
  phone_number?: string
  mobile_number?: string
  ntn_num?: string
}

export type IContactFormErrorType =
  | IContactFormDefaultErrorTypes
  | IContactFormIsOnlineErrorTypes
