import { FC, memo } from 'react'
import {
  faBuilding,
  faTimesCircle,
  faMapMarkerAlt,
  faHome,
  faMailbox,
  faChartArea,
  faCity,
  faGlobe,
  faLocation
} from '@fortawesome/pro-light-svg-icons'
import Input from '../../../../../../components/input'
import {
  InputsContainer,
  InputContainer,
  SingleInputContainer,
  CheckboxContainer,
  CustomCheckBox,
  CheckboxPlaceholder
} from '../../index.styled'
import useLocationForm from './useLocationForm'

const LocationFields: FC = memo(() => {
  const {
    handleAddressChange,
    handleContactChange,
    location,
    streetAddress,
    city,
    area,
    state,
    country,
    postalCode,
    autoCompleteRef,
    is_online
  } = useLocationForm()

  return (
    <>
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
          handleChange={handleAddressChange}
          setInitialValue
          debounceValue={3000}
          grayed={is_online}
        />
      </SingleInputContainer>
      <SingleInputContainer>
        <Input
          label="Street Address"
          prefix={faHome}
          name="streetAddress"
          value={streetAddress}
          handleChange={handleAddressChange}
          setInitialValue
          debounceValue={3000}
          grayed={is_online}
        />
      </SingleInputContainer>
      <InputsContainer>
        <InputContainer>
          <Input
            label="Postal Code"
            prefix={faMailbox}
            name="postalCode"
            value={postalCode}
            handleChange={handleAddressChange}
            setInitialValue
            debounceValue={3000}
            grayed={is_online}
          />
        </InputContainer>
        <InputContainer>
          <Input
            prefix={faChartArea}
            label="Area"
            name="area"
            value={area}
            handleChange={handleAddressChange}
            setInitialValue
            debounceValue={3000}
            grayed={is_online}
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
            handleChange={handleAddressChange}
            setInitialValue
            debounceValue={3000}
            grayed={is_online}
          />
        </InputContainer>
        <InputContainer>
          <Input
            prefix={faCity}
            label="State"
            name="state"
            value={state}
            handleChange={handleAddressChange}
            setInitialValue
            debounceValue={3000}
            grayed={is_online}
          />
        </InputContainer>
      </InputsContainer>
      <SingleInputContainer>
        <Input
          label="Country"
          prefix={faGlobe}
          name="country"
          value={country}
          handleChange={handleAddressChange}
          setInitialValue
          debounceValue={3000}
          grayed={is_online}
        />
      </SingleInputContainer>
      <CheckboxContainer>
        <CustomCheckBox
          type="checkbox"
          name="is_online"
          onChange={handleContactChange}
        />
        <CheckboxPlaceholder>Online Store only</CheckboxPlaceholder>
      </CheckboxContainer>
    </>
  )
})

export default LocationFields
