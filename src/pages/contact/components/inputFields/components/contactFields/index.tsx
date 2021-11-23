import { FC, memo } from 'react'
import {
  faPhoneAlt,
  faMobileAndroid,
  faEnvelope,
  faClipboardList,
  faBrowser
} from '@fortawesome/pro-light-svg-icons'
import { SingleInputContainer } from '../../index.styled'
import Input from '../../../../../../components/input'
import useContactForm from './useContactForm'
import { EmptyErrorState } from '../../../../../../styles/typography'

const ContactFields: FC = memo(() => {
  const {
    email,
    handleChange,
    handlePhoneChange,
    handleMobileChange,
    mobile_number,
    ntn_num,
    phone_number,
    website,
    mobileNumberError,
    emailError
  } = useContactForm()
  return (
    <>
      <SingleInputContainer>
        <Input
          label="Phone Number"
          prefix={faPhoneAlt}
          phonefield
          value={phone_number}
          handlePhoneChange={handlePhoneChange}
        />
      </SingleInputContainer>
      <SingleInputContainer>
        <Input
          label="Mobile Number"
          prefix={faMobileAndroid}
          phonefield
          value={mobile_number}
          handlePhoneChange={handleMobileChange}
        />
        {mobileNumberError && (
          <EmptyErrorState lessenLineHeight="1">
            {mobileNumberError}
          </EmptyErrorState>
        )}
      </SingleInputContainer>
      <SingleInputContainer>
        <Input
          label="Email"
          prefix={faEnvelope}
          value={email}
          name="email"
          debounceValue={1500}
          handleChange={handleChange}
        />
        {emailError && (
          <EmptyErrorState lessenLineHeight="1">{emailError}</EmptyErrorState>
        )}
      </SingleInputContainer>
      <SingleInputContainer>
        <Input
          label="Website"
          prefix={faBrowser}
          name="website"
          value={website}
          debounceValue={1500}
          handleChange={handleChange}
        />
      </SingleInputContainer>
      <SingleInputContainer>
        <Input
          label="NTN Number"
          prefix={faClipboardList}
          name="ntn_num"
          value={ntn_num}
          debounceValue={1500}
          handleChange={handleChange}
        />
      </SingleInputContainer>
    </>
  )
})

export default ContactFields
