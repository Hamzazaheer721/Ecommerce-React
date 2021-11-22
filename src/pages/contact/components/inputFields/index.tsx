import { memo } from 'react'
import { FieldsSectionContainer } from './index.styled'
import ContactFields from './components/contactFields'
import LocationFields from './components/locationFields'

const LocationInputFields = memo(() => (
  <>
    <FieldsSectionContainer>
      <LocationFields />
      <ContactFields />
    </FieldsSectionContainer>
  </>
))

export default LocationInputFields
