import { memo, useEffect, useState } from 'react'
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
import { useSelector } from 'react-redux'
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
import { RootState } from '../../../../redux/store'
import { IGeoAddressType } from '../../../../types/geoLocation'
import { IContactInitialState } from './useForm/helper'

const LocationInputFields = memo(() => {
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

  return (
    <FieldsSectionContainer>
      <SingleInputContainer>
        <Input
          label="Location"
          prefix={faMapMarkerAlt}
          value={location}
          suffix={faTimesCircle}
          secondSuffix={faLocation}
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
