import { FC, memo, useRef } from 'react'
import {
  faKey,
  faUser
} from '@fortawesome/pro-light-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
import Button from '../../../../components/genericButton'
import Input from '../../../../components/input'
import ToastComponent from '../../../../components/toaster'
import {
  LoginSubFooter,
  LoginHeader,
  LoginFooter,
  EmptyErrorState
} from '../../../../styles/typography'

import { useFormLogin } from './useForm'

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
  MarginDiv,
  SubHeading
} from './index.styled'

const Login: FC = memo(() => {
  // eslint-disable-next-line operator-linebreak
  const { handleSubmit, handleChange, errors, response } =
    useFormLogin();

  const { success, error } = response;
  const { usernameError, passwordError } = errors;

  const userFieldRef = useRef<HTMLInputElement>(null);
  const passwordFieldRef = useRef<HTMLInputElement>(null);

  return (
    <Container>
      <HeadingsContainer>
        <LoginHeader>Welcome Back</LoginHeader>
        <SubHeading>
          Please login to your account
        </SubHeading>
      </HeadingsContainer>
      {success && <ToastComponent toastType="success" description={success} />}
      {error && <ToastComponent toastType="error" description={error} />}
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
            handleChange={handleChange}
          />
        </InputContainer>
        {usernameError ? (
          <EmptyErrorState>{usernameError}</EmptyErrorState>
        ) : (
          <MarginDiv />
        )}
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
            handleChange={handleChange}
          />
        </InputContainer>
        {passwordError ? (
          <EmptyErrorState>{passwordError}</EmptyErrorState>
        ) : (
          <MarginDiv />
        )}
        <CheckboxContainer>
          <CustomCheckBox
            type="checkbox"
            name="remember"
            onChange={handleChange}
          />
          <CheckboxPlaceholder>
            Remember me
          </CheckboxPlaceholder>
        </CheckboxContainer>
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
        <Link to="/register">
          <LinkText> Register</LinkText>
        </Link>
      </LoginFooter>
    </Container>
  )
})

export default Login
