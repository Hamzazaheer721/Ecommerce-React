export type IContactFormDefaultErrorTypes = {
  purpose: 'contact' // check
  is_online: false // check
  email: string // check
  website: string // check
  address: string // check
  city: string // check
  country: string // check
  latitude: number // check
  longitude: number // check
  postal_code?: string // check
  phone_number?: string // check
  mobile_number?: string // check
  ntn_num?: string // check
}

export type IContactFormIsOnlineErrorTypes = {
  purpose: 'contact'
  is_online: true
  email: string
  website: string
  address?: string
  city?: string
  country?: string
  latitude?: number
  longitude?: number
  postal_code?: string
  phone_number?: string
  mobile_number?: string
  ntn_num?: string
}

export type IContactFormErrorType =
  | IContactFormDefaultErrorTypes
  | IContactFormIsOnlineErrorTypes
