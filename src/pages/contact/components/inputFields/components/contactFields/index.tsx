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

const ContactFields: FC = memo(() => {
  const { email, handleChange, mobile_number, ntn_num, phone_number, website } =
    useContactForm()
  return (
    <>
      <SingleInputContainer>
        <Input
          label="Phone Number"
          prefix={faPhoneAlt}
          phonefield
          value={phone_number}
          name="phone_number"
          debounceValue={2000}
          handleChange={handleChange}
        />
      </SingleInputContainer>
      <SingleInputContainer>
        <Input
          label="Mobile Number"
          prefix={faMobileAndroid}
          phonefield
          value={mobile_number}
          name="mobile_number"
          debounceValue={2000}
          handleChange={handleChange}
        />
      </SingleInputContainer>
      <SingleInputContainer>
        <Input
          label="Email"
          prefix={faEnvelope}
          value={email}
          name="email"
          debounceValue={2000}
          handleChange={handleChange}
        />
      </SingleInputContainer>
      <SingleInputContainer>
        <Input
          label="Website"
          prefix={faBrowser}
          name="website"
          value={website}
          debounceValue={2000}
          handleChange={handleChange}
        />
      </SingleInputContainer>
      <SingleInputContainer>
        <Input
          label="NTN Number"
          prefix={faClipboardList}
          name="ntn_num"
          value={ntn_num}
          debounceValue={2000}
          handleChange={handleChange}
        />
      </SingleInputContainer>
    </>
  )
})

export default ContactFields
