import { IContactType } from '../../redux/features/contactFieldsSlice/types'
import { IGeoAddressType } from '../geoLocation'

export type IContactPayloadArg = IGeoAddressType & {
  is_online: boolean
} & IContactType

export type IContactFormDefaultTypes = {
  purpose: 'contact'
  is_online: false
  email: string
  mobile_number: string
  latitude: number
  longitude: number
  location: string
  state: string
  area: string
  address: string
  city: string
  country: string
  postal_code?: string
  phone_number?: string
  website?: string
  ntn_num?: string
}

export type IContactFormIsOnlineTypes = {
  purpose: 'contact'
  is_online: true
  email: string
  mobile_number: string
  latitude: number
  longitude: number
  website?: string
  location?: string
  state?: string
  area?: string
  address?: string
  city?: string
  country?: string
  postal_code?: string
  phone_number?: string
  ntn_num?: string
}

export type IContactFormType =
  | IContactFormDefaultTypes
  | IContactFormIsOnlineTypes
