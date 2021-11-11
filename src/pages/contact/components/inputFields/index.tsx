import { memo } from 'react'
import {
  faBuilding,
  faTimesCircle,
  faMapMarkerAlt,
  faHome,
  faMailbox,
  faChartArea,
  faCity,
  faGlobe,
  faPhoneAlt,
  faMobileAndroid,
  faEnvelope,
  faClipboardList,
  faBrowser,
  faLocation
} from '@fortawesome/pro-light-svg-icons'
import {
  FieldsSectionContainer,
  SingleInputContainer,
  InputsContainer,
  InputContainer,
  CheckboxContainer,
  CustomCheckBox,
  CheckboxPlaceholder
} from './index.styled'
import Input from '../../../../components/input'
import useContactForm from './useContactForm'

const LocationInputFields = memo(() => {
  const {
    handleChange,
    location,
    streetAddress,
    city,
    area,
    state,
    country,
    postalCode,
    autoCompleteRef
  } = useContactForm()
  return (
    <FieldsSectionContainer>
      <SingleInputContainer>
        <Input
          ref={autoCompleteRef}
          label="Location"
          prefix={faMapMarkerAlt}
          suffix={faTimesCircle}
          secondSuffix={faLocation}
          autoComplete
          name="location"
          value={location}
          handleChange={handleChange}
        />
      </SingleInputContainer>
      <SingleInputContainer>
        <Input label="Street Address" prefix={faHome} value={streetAddress} />
      </SingleInputContainer>
      <InputsContainer>
        <InputContainer>
          <Input label="Postal Code" prefix={faMailbox} value={postalCode} />
        </InputContainer>
        <InputContainer>
          <Input prefix={faChartArea} label="Area" value={area} />
        </InputContainer>
      </InputsContainer>
      <InputsContainer>
        <InputContainer>
          <Input prefix={faBuilding} label="City" value={city} />
        </InputContainer>
        <InputContainer>
          <Input prefix={faCity} label="State" value={state} />
        </InputContainer>
      </InputsContainer>
      <SingleInputContainer>
        <Input label="Country" prefix={faGlobe} value={country} />
      </SingleInputContainer>
      <CheckboxContainer>
        <CustomCheckBox type="checkbox" name="remember" />
        <CheckboxPlaceholder>Online Store only</CheckboxPlaceholder>
      </CheckboxContainer>
      <SingleInputContainer>
        <Input label="Phone Number" prefix={faPhoneAlt} phonefield store />
      </SingleInputContainer>
      <SingleInputContainer>
        <Input
          label="Mobile Number"
          prefix={faMobileAndroid}
          phonefield
          store
        />
      </SingleInputContainer>
      <SingleInputContainer>
        <Input label="Email" prefix={faEnvelope} />
      </SingleInputContainer>
      <SingleInputContainer>
        <Input label="Website" prefix={faBrowser} />
      </SingleInputContainer>
      <SingleInputContainer>
        <Input label="NTN Number" prefix={faClipboardList} />
      </SingleInputContainer>
    </FieldsSectionContainer>
  )
})

export default LocationInputFields
