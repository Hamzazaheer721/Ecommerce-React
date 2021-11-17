import { memo } from 'react'
import {
  faPhoneAlt,
  faMobileAndroid,
  faEnvelope,
  faClipboardList,
  faBrowser
} from '@fortawesome/pro-light-svg-icons'
import { FieldsSectionContainer, SingleInputContainer } from './index.styled'
import Input from '../../../../components/input'

const LocationInputFields = memo(() => (
  <FieldsSectionContainer>
    <LocationInputFields />
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
