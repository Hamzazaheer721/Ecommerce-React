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
          setInitialValue
          debounceValue={3000}
        />
      </SingleInputContainer>
      <SingleInputContainer>
        <Input
          label="Street Address"
          prefix={faHome}
          name="streetAddress"
          value={streetAddress}
          handleChange={handleChange}
          setInitialValue
          debounceValue={3000}
        />
      </SingleInputContainer>
      <InputsContainer>
        <InputContainer>
          <Input
            label="Postal Code"
            prefix={faMailbox}
            name="postalCode"
            value={postalCode}
            handleChange={handleChange}
            setInitialValue
            debounceValue={3000}
          />
        </InputContainer>
        <InputContainer>
          <Input
            prefix={faChartArea}
            label="Area"
            name="area"
            value={area}
            handleChange={handleChange}
            setInitialValue
            debounceValue={3000}
          />
        </InputContainer>
      </InputsContainer>
      <InputsContainer>
        <InputContainer>
          <Input
            prefix={faBuilding}
            label="City"
            name="city"
            value={city}
            handleChange={handleChange}
            setInitialValue
            debounceValue={3000}
          />
        </InputContainer>
        <InputContainer>
          <Input
            prefix={faCity}
            label="State"
            name="state"
            value={state}
            handleChange={handleChange}
            setInitialValue
            debounceValue={3000}
          />
        </InputContainer>
      </InputsContainer>
      <SingleInputContainer>
        <Input
          label="Country"
          prefix={faGlobe}
          name="country"
          value={country}
          handleChange={handleChange}
          setInitialValue
          debounceValue={3000}
        />
      </SingleInputContainer>
      <CheckboxContainer>
        <CustomCheckBox
          type="checkbox"
          name="is_online"
          onChange={handleChange}
        />
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
