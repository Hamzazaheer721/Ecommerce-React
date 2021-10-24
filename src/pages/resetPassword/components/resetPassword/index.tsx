import { FC, memo, useRef } from 'react'
import {
  faKey,
  faUnlockAlt,
  faCode
} from '@fortawesome/pro-light-svg-icons'
import { Link } from 'react-router-dom'
import Button from '../../../../components/genericButton'
import Input from '../../../../components/input'
// import ToastComponent from '../../../components/toaster'
import {
  LoginHeader,
  LoginFooter,
  LoginDescription
  // EmptyErrorState
} from '../../../../styles/typography'

import {
  ButtonContainer,
  CheckboxContainer,
  CheckboxPlaceholder,
  Container,
  CustomCheckBox,
  HeadingsContainer,
  InputContainer,
  InputFieldsContainer,
  LinkText,
  MarginDiv
  // SubHeading
} from './index.styled'

const ActivationCode: FC = memo(() => {
  // eslint-disable-next-line operator-linebreak
  // const { handleSubmit, handleChange, errors, response } =
  //   useFormLogin()

  // const { success, error } = response
  // const { usernameError, passwordError } = errors

  const userFieldRef = useRef<HTMLInputElement>(null)
  const passwordFieldRef = useRef<HTMLInputElement>(null)

  return (
    <Container>
      <HeadingsContainer>
        <LoginHeader>Reset Password</LoginHeader>
        <LoginDescription>
          Enter
          <b> Verification code </b>
          to activate your account
        </LoginDescription>
      </HeadingsContainer>
      {/* {success && (
        <ToastComponent
          toastType="success"
          description={success}
        />
      )} */}
      {/* {error && (
        <ToastComponent
          toastType="error"
          description={error}
        />
      )} */}
      <InputFieldsContainer>
        <InputContainer>
          <Input
            ref={userFieldRef}
            label="Activation Code"
            name="activationcode"
            value={
              userFieldRef && userFieldRef.current?.value
            }
            prefix={faCode}
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
        {/* {usernameError ? (
          <EmptyErrorState>{usernameError}</EmptyErrorState>
        ) : (
          <MarginDiv />
        )} */}
        <MarginDiv />
        <InputContainer>
          <Input
            ref={passwordFieldRef}
            label="Confirm Password"
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
            Remember me
          </CheckboxPlaceholder>
        </CheckboxContainer>
      </InputFieldsContainer>
      <ButtonContainer>
        <Button
          type="submit"
          label="Reset Password"
          icon={faUnlockAlt}
          // handleSubmit={handleSubmit}
        />
      </ButtonContainer>

      <LoginFooter>
        Already on WhatsPays?
        <Link to="/get-started">
          <LinkText> Login</LinkText>
        </Link>
      </LoginFooter>
    </Container>
  )
})

export default ActivationCode
