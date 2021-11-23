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
  SingleInputContainer
} from '../../index.styled'
import useLocationForm from './useLocationForm'
import Checkbox from '../../../../../../components/checkbox'
import { EmptyErrorState } from '../../../../../../styles/typography'

const LocationFields: FC = memo(() => {
  const {
    handleSuffixClick,
    handleAddressChange,
    handleContactChange,
    handleSecondSuffixClick,
    location,
    streetAddress,
    city,
    area,
    state,
    country,
    postalCode,
    autoCompleteRef,
    is_online,
    areaError,
    cityError,
    stateError,
    countryError,
    locationError,
    addressError,
    postalCodeError
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
          handleSecondSuffixClick={handleSecondSuffixClick}
          handleSuffixClick={handleSuffixClick}
          setInitialValue
          debounceValue={3000}
          grayed={is_online}
        />
        {!is_online && locationError && (
          <EmptyErrorState lessenLineHeight="1">
            {locationError}
          </EmptyErrorState>
        )}
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
        {!is_online && addressError && (
          <EmptyErrorState lessenLineHeight="1">{addressError}</EmptyErrorState>
        )}
      </SingleInputContainer>
      <InputsContainer>
        <InputContainer withError>
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
          {postalCodeError && (
            <EmptyErrorState lessenLineHeight="1">
              {postalCodeError}
            </EmptyErrorState>
          )}
        </InputContainer>
        <InputContainer withError>
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
          {!is_online && areaError && (
            <EmptyErrorState lessenLineHeight="1">{areaError}</EmptyErrorState>
          )}
        </InputContainer>
      </InputsContainer>
      <InputsContainer>
        <InputContainer withError>
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
          {!is_online && cityError && (
            <EmptyErrorState lessenLineHeight="1">{cityError}</EmptyErrorState>
          )}
        </InputContainer>
        <InputContainer withError>
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
          {!is_online && stateError && (
            <EmptyErrorState lessenLineHeight="1">{stateError}</EmptyErrorState>
          )}
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
        {!is_online && countryError && (
          <EmptyErrorState lessenLineHeight="1">{countryError}</EmptyErrorState>
        )}
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
