import { FC, memo, useRef } from 'react'
import { faUser, faCode } from '@fortawesome/pro-light-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
import Button from '../../../../components/genericButton'
import Input from '../../../../components/input'
import useForm from './useForm'
// import ToastComponent from '../../../components/toaster'
import {
  LoginSubFooter,
  LoginHeader,
  LoginFooter,
  LoginDescription
  // EmptyErrorState
} from '../../../../styles/typography'

import {
  ButtonContainer,
  Container,
  HeadingsContainer,
  InputContainer,
  InputFieldsContainer,
  LinkText,
  MarginDiv
  // SubHeading
} from './index.styled'

const ActivationCode: FC = memo(() => {
  const activationCodeRef = useRef<HTMLInputElement>(null)
  const { email } = useForm()
  return (
    <Container>
      <HeadingsContainer>
        <LoginHeader>Welcome Back</LoginHeader>
        <LoginDescription>Enter your activation code!</LoginDescription>
      </HeadingsContainer>
      {/* {success && (
        <ToastComponent
          toastType="success"
          description={success}
        />
      )} */}

      <InputFieldsContainer>
        <InputContainer>
          <Input
            ref={activationCodeRef}
            label="Activation Code"
            name="activationcode"
            value={activationCodeRef && activationCodeRef.current?.value}
            prefix={faCode}
            // handleChange={handleChange}
          />
        </InputContainer>
        <MarginDiv />
        <InputContainer>
          <Input
            label="Email Address"
            name="email"
            value={email}
            prefix={faWhatsapp}
            // handleChange={handleChange}
          />
        </InputContainer>
        {/* {usernameError ? (
          <EmptyErrorState>{usernameError}</EmptyErrorState>
        ) : (
          <MarginDiv />
        )} */}
      </InputFieldsContainer>
      <ButtonContainer>
        <Button
          type="submit"
          label="Login"
          icon={faUser}
          // handleSubmit={handleSubmit}
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
