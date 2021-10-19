import { useRef } from 'react'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

import {
  LoginViewContainer,
  InputContainer,
  InputFieldsContainer
} from '../../../../styles/global'
import {
  LoginHeader,
  LoginDescription
} from '../../../../styles/typography'
import Input from '../../../../components/input'

const Register = () => {
  const userFieldRef = useRef<HTMLInputElement>(null)
  // const { handleChange } = useFormLogin()

  return (
    <LoginViewContainer>
      <LoginHeader>Get started free</LoginHeader>
      <LoginDescription>
        Its time to enjoy ultimate shopping experience
        through WhatsApp
      </LoginDescription>
      <InputFieldsContainer>
        <InputContainer>
          <Input
            ref={userFieldRef}
            label="WhatsApp Number/Email"
            name="username"
            value={
              userFieldRef && userFieldRef.current?.value
            }
            prefix={faWhatsapp}
            // handleChange={handleChange}
          />
        </InputContainer>
      </InputFieldsContainer>
    </LoginViewContainer>
  )
}

export default Register
