import { FC, memo } from 'react'
import { faUser, faCode, faEnvelope } from '@fortawesome/pro-light-svg-icons'
import { Link } from 'react-router-dom'
import Button from '../../../../components/genericButton'
import Input from '../../../../components/input'
import useForm from './useForm'
import ToastComponent from '../../../../components/toaster'
import {
  LoginSubFooter,
  LoginHeader,
  LoginFooter,
  LoginDescription,
  EmptyErrorState,
  MarginDiv
} from '../../../../styles/typography'
import { LoginViewContainer } from '../../../../styles/global'

import {
  ButtonContainer,
  HeadingsContainer,
  InputContainer,
  InputFieldsContainer,
  LinkText
} from './index.styled'

const ActivationCode: FC = memo(() => {
  const {
    email,
    handleChange,
    handleSubmit,
    error,
    success,
    message,
    handleClick,
    resendStateLoading,
    resendStateMessage,
    resendStateSuccess,
    activationCodeRef,
    includeResendInMessage
  } = useForm()
  const { activationCodeError } = error

  return (
    <LoginViewContainer>
      <HeadingsContainer>
        <LoginHeader>Welcome Back</LoginHeader>
        <LoginDescription>Enter your activation code!</LoginDescription>
      </HeadingsContainer>
      {!success && message && (
        <ToastComponent
          toastType="error"
          description={message}
          linkType={includeResendInMessage ? 'resend' : undefined}
          handleClick={handleClick}
        />
      )}
      {success && message && (
        <ToastComponent toastType="success" description={message} />
      )}
      {!resendStateLoading && resendStateSuccess && resendStateMessage && (
        <ToastComponent toastType="success" description={resendStateMessage} />
      )}
      {!resendStateLoading && !resendStateSuccess && resendStateMessage && (
        <ToastComponent toastType="error" description={resendStateMessage} />
      )}
      <InputFieldsContainer>
        <InputContainer>
          <Input
            ref={activationCodeRef}
            label="Activation Code"
            name="activation_code"
            value={activationCodeRef && activationCodeRef.current?.value}
            prefix={faCode}
            handleChange={handleChange}
          />
        </InputContainer>
        {activationCodeError ? (
          <EmptyErrorState>{activationCodeError}</EmptyErrorState>
        ) : (
          <MarginDiv />
        )}
        <InputContainer>
          <Input
            readOnly
            label="Email Address"
            name="email"
            setInitialValue
            value={email}
            prefix={faEnvelope}
          />
        </InputContainer>
      </InputFieldsContainer>
      <ButtonContainer>
        <Button
          type="submit"
          label="Login"
          icon={faUser}
          handleSubmit={handleSubmit}
        />
      </ButtonContainer>
      <Link to="/">
        <LoginSubFooter>Forgot your password?</LoginSubFooter>
      </Link>
      <LoginFooter>
        Don`t have an account?
        <Link to="/get-started">
          <LinkText> Register</LinkText>
        </Link>
      </LoginFooter>
    </LoginViewContainer>
  )
})

export default ActivationCode
