import { memo } from 'react'
import { FieldsSectionContainer } from './index.styled'
import ContactFields from './components/contactFields'
import LocationFields from './components/locationFields'
import ContactFormErrorProvider from '../../../../context/contactFormErrors.context'

const LocationInputFields = memo(() => (
  <>
    <FieldsSectionContainer>
      <ContactFormErrorProvider>
        <LocationFields />
        <ContactFields />
      </ContactFormErrorProvider>
    </FieldsSectionContainer>
  </>
))

export default LocationInputFields
