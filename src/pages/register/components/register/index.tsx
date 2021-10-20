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
  const isCustomerRef = useRef<boolean>(location.pathname.includes('customer'))

  const fullNameFieldRef = useRef<HTMLInputElement>(null)
  const companyFieldRef = useRef<HTMLInputElement>(null);
  const numberFieldRef = useRef<HTMLInputElement>(null)
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
              fullNameFieldRef
              && fullNameFieldRef.current?.value
            }
            prefix={faUser}
          // handleChange={handleChange}
          />
        </InputContainer>
        <MarginDiv />

        {!isCustomerRef.current && (
          <>
            <InputContainer>
              <Input
                ref={companyFieldRef}
                label="Company Name"
                name="company"
                value={
                  companyFieldRef
                  && companyFieldRef.current?.value
                }
                prefix={faCity}
              />
            </InputContainer>
            <MarginDiv />
          </>
        )}

        <InputContainer>
          <Input
            ref={numberFieldRef}
            label="WhatsApp Number"
            phoneField
            value={
              numberFieldRef
              && numberFieldRef.current?.value
            }
            prefix={faWhatsapp}
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
            ref={EmailFieldRef}
            label="Email"
            prefix={faEnvelope}
            name="password"
            value={
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
              passwordFieldRef
              && passwordFieldRef.current?.value
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
      <ButtonContainer isPrimary={!!isCustomerRef.current}>
        <Button
          type="submit"
          label={isCustomerRef.current ? 'Customer' : 'Company'}
          icon={isCustomerRef.current ? faUser : faBuilding}
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
