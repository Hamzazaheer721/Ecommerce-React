import { FC, memo } from 'react'
import {
  faKey,
  faUser,
  faEnvelope,
  faBuilding,
  faCity
} from '@fortawesome/pro-light-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
import useForm from './useForm'
import Button from '../../../../components/genericButton'
import Input from '../../../../components/input'
import {
  LoginHeader,
  LoginFooter,
  EmptyErrorState,
  MarginDiv
} from '../../../../styles/typography'
import {
  ButtonContainer,
  CheckboxContainer,
  CheckboxError,
  CheckboxPlaceholder,
  CheckboxSection,
  CustomCheckBox,
  HeadingsContainer,
  InputContainer,
  InputFieldsContainer,
  SubHeading
} from './index.styled'
import ToastComponent from '../../../../components/toaster'
import { LoginViewContainer } from '../../../../styles/global'

const Register: FC = memo(() => {
  const {
    handleChange,
    registerData,
    registerState,
    handleSubmit,
    handlePhoneChange,
    errors,
    isCustomer,
    nameRef,
    storeNameRef,
    emailRef,
    passwordRef
  } = useForm()
  const { phone } = registerData
  const { success, message } = registerState
  const {
    nameError,
    phoneError,
    storeNameError,
    emailError,
    passwordError,
    checkboxError
  } = errors
  return (
    <LoginViewContainer>
      <HeadingsContainer>
        <LoginHeader>Get Started Free</LoginHeader>
        <SubHeading>
          It&apos;s time to enjoy ultimate shopping experience through WhatsApp
        </SubHeading>
      </HeadingsContainer>
      {!success && message && (
        <ToastComponent toastType="error" description={message} />
      )}
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
        {nameError ? (
          <EmptyErrorState>{nameError}</EmptyErrorState>
        ) : (
          <MarginDiv />
        )}
        {isCustomer === 'company' && (
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
            {storeNameError ? (
              <EmptyErrorState>{storeNameError}</EmptyErrorState>
            ) : (
              <MarginDiv />
            )}
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
        {phoneError ? (
          <EmptyErrorState>{phoneError}</EmptyErrorState>
        ) : (
          <MarginDiv />
        )}
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
        {emailError ? (
          <EmptyErrorState>{emailError}</EmptyErrorState>
        ) : (
          <MarginDiv />
        )}
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
        {passwordError ? (
          <EmptyErrorState>{passwordError}</EmptyErrorState>
        ) : (
          <MarginDiv />
        )}
        <CheckboxSection>
          <CheckboxContainer>
            <CustomCheckBox
              type="checkbox"
              name="checkbox"
              onChange={handleChange}
            />
            <CheckboxPlaceholder>
              Please accept the
              <span> terms and conditions </span>
              to proceed
            </CheckboxPlaceholder>
          </CheckboxContainer>

          <CheckboxError>
            {checkboxError && (
              <EmptyErrorState>{checkboxError}</EmptyErrorState>
            )}
          </CheckboxError>
        </CheckboxSection>
      </InputFieldsContainer>
      <ButtonContainer isPrimary={isCustomer}>
        <Button
          type="submit"
          label={isCustomer === 'visitor' ? 'Customer' : 'Company'}
          icon={isCustomer ? faUser : faBuilding}
          handleSubmit={handleSubmit}
        />
      </ButtonContainer>
      <LoginFooter>
        Already on WhatsPays?
        <Link to="/login">
          <span> Login</span>
        </Link>
      </LoginFooter>
    </LoginViewContainer>
  )
})

export default Register
