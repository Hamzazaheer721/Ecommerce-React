import { FC, memo, useRef } from 'react'
import { faArrowRight } from '@fortawesome/pro-light-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
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
import { LoginViewContainer } from '../../../../styles/global'

import {
  ButtonContainer,
  // Container,
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

  return (
    <LoginViewContainer>
      <HeadingsContainer>
        <LoginHeader>Forgot Password</LoginHeader>
        <LoginDescription>
          Using the form below to activate your account
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
            label="WhatsApp Number/Email"
            name="username"
            value={
              userFieldRef && userFieldRef.current?.value
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

        {/* {passwordError ? (
          <EmptyErrorState>{passwordError}</EmptyErrorState>
        ) : (
          <MarginDiv />
        )} */}
        <MarginDiv />
      </InputFieldsContainer>
      <ButtonContainer>
        <Button
          type="submit"
          label="Sunmit"
          icon={faArrowRight}
          // handleSubmit={handleSubmit}
        />
      </ButtonContainer>

      <LoginFooter>
        Already on WhatsPays?
        <Link to="/get-started">
          <LinkText> Login</LinkText>
        </Link>
      </LoginFooter>
    </LoginViewContainer>
  )
})

export default ActivationCode
