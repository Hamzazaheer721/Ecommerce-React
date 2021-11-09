import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../../redux/store'
import { IGeoAddressType } from '../../../../../types/geoLocation'
import { IContactInitialState } from './helper'

const useContactForm = () => {
  const { address } = useSelector(
    (state: RootState) => state.currentGeoLocation
  )

  const [locationStates, setLocationStates] =
    useState<Partial<IGeoAddressType>>(IContactInitialState)
  const { location, streetAddress, city, area, state, country, postalCode } =
    locationStates

  useEffect(() => {
    setLocationStates({
      area: address?.area,
      city: address?.city,
      country: address?.country,
      location: address?.location,
      postalCode: address?.postalCode,
      state: address?.state,
      streetAddress: address?.streetAddress
    })
  }, [address])

  useEffect(() => {
    console.info('I am rendered')
  })

  return { location, streetAddress, city, area, state, country, postalCode }
}

export default useContactForm
