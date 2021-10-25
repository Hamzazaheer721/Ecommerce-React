import { FC, memo, useRef } from 'react'
import {
  faKey,
  faUser,
  faEnvelope,
  faBuilding,
  faCity
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
import useForm from '../useForm'
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
  const location = useLocation()
  const isCustomerRef = useRef<boolean>(location.pathname.includes('customer'))

  const { handleChange, registerData, handleSubmit, handlePhoneChange } =
    useForm()
  const { phone } = registerData

  const nameRef = useRef<HTMLInputElement>(null)
  const storeNameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  return (
    <Container>
      <HeadingsContainer>
        <LoginHeader>Get Started Free</LoginHeader>
        <SubHeading>
          Its time to enjoy ultimate shopping experience through WhatsApp
        </SubHeading>
      </HeadingsContainer>
      <InputFieldsContainer>
        <InputContainer>
          <Input
            ref={nameRef}
            label="Full Name"
            name="name"
            value={nameRef && nameRef.current?.value}
            prefix={faUser}
            handleChange={handleChange}
          />
        </InputContainer>
        <MarginDiv />

        {!isCustomerRef.current && (
          <>
            <InputContainer>
              <Input
                ref={storeNameRef}
                label="Company Name"
                name="store_name"
                value={storeNameRef && storeNameRef.current?.value}
                prefix={faCity}
                handleChange={handleChange}
              />
            </InputContainer>
            <MarginDiv />
          </>
        )}

        <InputContainer>
          <Input
            label="WhatsApp Number"
            phonefield
            prefix={faWhatsapp}
            value={phone}
            handlePhoneChange={handlePhoneChange}
          />
        </InputContainer>
        <MarginDiv />

        {/* {usernameError ? (
          <EmptyErrorState>{usernameError}</EmptyErrorState>
        ) : (
          <MarginDiv />
        )} */}
        <InputContainer>
          <Input
            ref={emailRef}
            label="Email"
            prefix={faEnvelope}
            name="email"
            value={emailRef && emailRef.current?.value}
            handleChange={handleChange}
          />
        </InputContainer>
        <MarginDiv />
        <InputContainer>
          <Input
            ref={passwordRef}
            label="Password"
            prefix={faKey}
            typePassword
            name="password"
            value={passwordRef && passwordRef.current?.value}
            handleChange={handleChange}
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
            name="checkbox"
            onChange={handleChange}
          />
          <CheckboxPlaceholder>
            Please accept the
            <span> term and conditions </span>
            to proceed
          </CheckboxPlaceholder>
        </CheckboxContainer>
      </InputFieldsContainer>
      <ButtonContainer isPrimary={!!isCustomerRef.current}>
        <Button
          type="submit"
          label={isCustomerRef.current ? 'Customer' : 'Company'}
          icon={isCustomerRef.current ? faUser : faBuilding}
          handleSubmit={handleSubmit}
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
