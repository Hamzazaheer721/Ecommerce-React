import { FC, memo } from 'react'
import { faArrowRight } from '@fortawesome/pro-light-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
import Button from '../../../../components/genericButton'
import Input from '../../../../components/input'
import {
  LoginHeader,
  LoginFooter,
  LoginDescription
  // EmptyErrorState
} from '../../../../styles/typography'
import { LoginViewContainer } from '../../../../styles/global'
import useForm from './useForm'
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
import ToastComponent from '../../../../components/toaster'

const ActivationCode: FC = memo(() => {
  const { usernameRef } = useForm()

  return (
    <LoginViewContainer>
      <HeadingsContainer>
        <LoginHeader>Forgot Password</LoginHeader>
        <LoginDescription>
          Using the form below to activate your account
        </LoginDescription>
      </HeadingsContainer>

      <ToastComponent
        toastType="info"
        description="Enter your WhatsApp Number or Email Address"
      />

      <InputFieldsContainer>
        <InputContainer>
          <Input
            ref={usernameRef}
            label="WhatsApp Number/Email"
            name="username"
            value={usernameRef && usernameRef.current?.value}
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
          label="Submit"
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
