import { memo, useEffect } from 'react'
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

const LocationInputFields = memo(() => {
  const { lat, long } = useSelector(
    (state: RootState) => state.currentGeoLocation
  )

  useEffect(() => {}, [lat, long])

  return (
    <FieldsSectionContainer>
      <SingleInputContainer>
        <Input
          label="Location"
          prefix={faMapMarkerAlt}
          suffix={faTimesCircle}
          secondSuffix={faLocation}
        />
      </SingleInputContainer>
      <SingleInputContainer>
        <Input label="Street Address" prefix={faHome} store />
      </SingleInputContainer>
      <InputsContainer>
        <InputContainer>
          <Input label="Postal Code" prefix={faMailbox} />
        </InputContainer>
        <InputContainer>
          <Input prefix={faChartArea} label="Area" />
        </InputContainer>
      </InputsContainer>
      <InputsContainer>
        <InputContainer>
          <Input prefix={faBuilding} label="City" />
        </InputContainer>
        <InputContainer>
          <Input prefix={faCity} label="State" />
        </InputContainer>
      </InputsContainer>
      <SingleInputContainer>
        <Input label="Country" prefix={faGlobe} />
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
