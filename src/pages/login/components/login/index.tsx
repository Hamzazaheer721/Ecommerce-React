import { FC, memo, useRef } from 'react'
import { faKey, faUser } from '@fortawesome/pro-light-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import Button from '../../../../components/genericButton'
import Input from '../../../../components/input'
import {
  LoginSubFooter,
  LoginHeader,
  LoginFooter
} from '../../../../styles/typography'

import { useFormLogin } from './useForm'

import {
  ButtonContainer,
  CheckboxContainer,
  CheckboxPlaceholder,
  Container,
  CustomCheckBox,
  HeadingsContainer,
  InputContainer,
  InputFieldsContainer,
  MarginDiv,
  SubHeading
} from './index.styled'

const Login: FC = memo(() => {
  const { handleSubmit, handleChange, errors } = useFormLogin()
  const { usernameError, passwordError } = errors

  const userFieldRef = useRef<HTMLInputElement>(null)
  const passwordFieldRef = useRef<HTMLInputElement>(null)

  return (
    <Container>
      <HeadingsContainer>
        <LoginHeader>Welcome Back</LoginHeader>
        <SubHeading>Please login to your account</SubHeading>
      </HeadingsContainer>
      <InputFieldsContainer>
        <InputContainer>
          <Input
            ref={userFieldRef}
            label="Enter your name"
            name="username"
            value={userFieldRef && userFieldRef.current?.value}
            prefix={faWhatsapp}
            handleChange={handleChange}
          />
        </InputContainer>
        {usernameError ? <h1>{usernameError}</h1> : <MarginDiv />}
        <InputContainer>
          <Input
            ref={passwordFieldRef}
            label="Please enter your passwrod"
            prefix={faKey}
            typePassword
            name="password"
            value={passwordFieldRef && passwordFieldRef.current?.value}
            handleChange={handleChange}
          />
        </InputContainer>
        {passwordError ? <h1>{passwordError}</h1> : <MarginDiv />}
        <CheckboxContainer>
          <CustomCheckBox type="checkbox" />
          <CheckboxPlaceholder>Remember me</CheckboxPlaceholder>
        </CheckboxContainer>
      </InputFieldsContainer>
      <ButtonContainer>
        <Button
          type="submit"
          label="Login"
          icon={faUser}
          handleSubmit={handleSubmit}
        />
      </ButtonContainer>
      <LoginSubFooter>Forget your password?</LoginSubFooter>
      <LoginFooter>
        Don`t have an account?
        <span>Register</span>
      </LoginFooter>
    </Container>
  )
})

export default Login
