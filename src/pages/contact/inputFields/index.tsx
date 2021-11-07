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
  faBrowser
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

import Input from '../../../components/input'

const LocationInputFields = memo(() => (
  <FieldsSectionContainer>
    view component
    <SingleInputContainer>
      <Input label="Location" prefix={faMapMarkerAlt} suffix={faTimesCircle} />
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
      <Input label="Mobile Number" prefix={faMobileAndroid} phonefield store />
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
))

export default LocationInputFields
