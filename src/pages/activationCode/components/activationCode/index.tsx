import { FC, memo, useRef } from 'react'
import { faUser, faCode } from '@fortawesome/pro-light-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
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

import {
  ButtonContainer,
  Container,
  HeadingsContainer,
  InputContainer,
  InputFieldsContainer,
  LinkText
} from './index.styled'

const ActivationCode: FC = memo(() => {
  const activationCodeRef = useRef<HTMLInputElement>(null)
  const { email, handleChange, handleSubmit, error, success, message } =
    useForm()
  const { activationCodeError } = error
  return (
    <Container>
      <HeadingsContainer>
        <LoginHeader>Welcome Back</LoginHeader>
        <LoginDescription>Enter your activation code!</LoginDescription>
      </HeadingsContainer>
      {!success && message && (
        <ToastComponent toastType="error" description={message} />
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
            value={email}
            prefix={faWhatsapp}
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
        <LoginSubFooter>Forget your password?</LoginSubFooter>
      </Link>
      <LoginFooter>
        Don`t have an account?
        <Link to="/get-started">
          <LinkText> Register</LinkText>
        </Link>
      </LoginFooter>
    </Container>
  )
})

export default ActivationCode
