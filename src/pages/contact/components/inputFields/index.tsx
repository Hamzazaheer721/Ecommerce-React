import { memo } from 'react'
// import { useLayoutEffect } from 'react'
import { FieldsSectionContainer } from './index.styled'
import ContactFields from './components/contactFields'
import LocationFields from './components/locationFields'
// import { loadMapApi } from '../../../../general/helper'

const LocationInputFields = memo(() => (
  <>
    <FieldsSectionContainer>
      <LocationFields />
      <ContactFields />
    </FieldsSectionContainer>
  </>
))

export default LocationInputFields
