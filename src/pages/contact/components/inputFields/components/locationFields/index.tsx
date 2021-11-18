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
  faLocation,
  faStore
} from '@fortawesome/pro-light-svg-icons'
import Input from '../../../../../../components/input'
import {
  InputsContainer,
  InputContainer,
  SingleInputContainer
} from '../../index.styled'
import useLocationForm from './useLocationForm'
import Checkbox from '../../../../../../components/checkbox'

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
      {is_online && (
        <SingleInputContainer>
          <Input
            label="Branch Name"
            prefixText={`${'New Yorkers Pizza'} -`}
            prefix={faStore}
            name="branch_name"
            handleChange={handleAddressChange}
            debounceValue={3000}
          />
        </SingleInputContainer>
      )}
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
      <Checkbox
        handleChange={handleContactChange}
        name="is_online"
        label="Online Store only"
        height="16px"
        width="16px"
      />
    </>
  )
})

export default LocationFields
