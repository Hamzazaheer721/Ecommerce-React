import { FC, memo, useRef } from 'react'
import {
  faKey,
  faUser,
  faEnvelope
} from '@fortawesome/pro-light-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { useLocation } from 'react-router-dom'
import Button from '../../../../components/genericButton'
import Input from '../../../../components/input'
import {
  LoginHeader,
  LoginFooter
  // EmptyErrorState
} from '../../../../styles/typography'

// import { useFormLogin } from './useForm'

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

const Register: FC = memo(() => {
  // eslint-disable-next-line operator-linebreak
  // const { handleSubmit, handleChange, errors } =
  //   useFormLogin()
  // const { usernameError, passwordError } = errors
  const location = useLocation();
  const isCustomer = location.pathname.includes('customer')
  console.info('isCustomer : ', isCustomer)
  const fullNameFieldRef = useRef<HTMLInputElement>(null)
  const NumberFieldRef = useRef<HTMLInputElement>(null)
  const EmailFieldRef = useRef<HTMLInputElement>(null)
  const passwordFieldRef = useRef<HTMLInputElement>(null)

  return (
    <Container>
      <HeadingsContainer>
        <LoginHeader>Get Started Free</LoginHeader>
        <SubHeading>
          Its time to enjoy ultimate shopping experience
          through WhatsApp
        </SubHeading>
      </HeadingsContainer>
      <InputFieldsContainer>
        <InputContainer>
          <Input
            ref={fullNameFieldRef}
            label="Full Name"
            name="username"
            value={
              // eslint-disable-next-line operator-linebreak
              fullNameFieldRef &&
              fullNameFieldRef.current?.value
            }
            prefix={faUser}
          // handleChange={handleChange}
          />
        </InputContainer>
        <MarginDiv />
        <InputContainer>
          <Input
            ref={NumberFieldRef}
            label="WhatsApp Number"
            name="username"
            value={
              // eslint-disable-next-line operator-linebreak
              NumberFieldRef &&
              NumberFieldRef.current?.value
            }
            prefix={faWhatsapp}
          // handleChange={handleChange}
          />
        </InputContainer>

        {/* {usernameError ? (
          <EmptyErrorState>{usernameError}</EmptyErrorState>
        ) : (
          <MarginDiv />
        )} */}
        <MarginDiv />

        <InputContainer>
          <Input
            ref={EmailFieldRef}
            label="Email"
            prefix={faEnvelope}
            name="password"
            value={
              // eslint-disable-next-line operator-linebreak
              EmailFieldRef && EmailFieldRef.current?.value
            }
          // handleChange={handleChange}
          />
        </InputContainer>
        <MarginDiv />
        <InputContainer>
          <Input
            ref={passwordFieldRef}
            label="Password"
            prefix={faKey}
            typePassword
            name="password"
            value={
              // eslint-disable-next-line operator-linebreak
              passwordFieldRef &&
              passwordFieldRef.current?.value
            }
          // handleChange={handleChange}
          />
        </InputContainer>
        {/* {passwordError ? (
          <EmptyErrorState>{passwordError}</EmptyErrorState>
        ) : (
          <MarginDiv />
        )} */}
        <MarginDiv />
        <CheckboxContainer>
          <CustomCheckBox
            type="checkbox"
            name="remember"
          // onChange={handleChange}
          />
          <CheckboxPlaceholder>
            Please accept the
            <span> term and conditions </span>
            to proceed
          </CheckboxPlaceholder>
        </CheckboxContainer>
      </InputFieldsContainer>
      <ButtonContainer>
        <Button
          type="submit"
          label="Customer"
          icon={faUser}
        // handleSubmit={handleSubmit}
        />
      </ButtonContainer>
      <LoginFooter>
        Already on WhatsPays?
        <span> Login</span>
      </LoginFooter>
    </Container>
  )
})

export default Register
