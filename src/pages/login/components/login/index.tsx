import { FC, memo, useRef } from 'react'
import { faKey, faUser } from '@fortawesome/pro-light-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
import Button from '../../../../components/genericButton'
import Input from '../../../../components/input'
import ToastComponent from '../../../../components/toaster'
import { useFormLogin } from './useForm'
import {
  LoginSubFooter,
  LoginHeader,
  LoginFooter,
  EmptyErrorState
} from '../../../../styles/typography'
import { LoginViewContainer } from '../../../../styles/global'
import {
  ButtonContainer,
  CheckboxContainer,
  CheckboxPlaceholder,
  HeadingsContainer,
  InputContainer,
  InputFieldsContainer,
  LinkText,
  MarginDiv,
  SubHeading
} from './index.styled'
import Checkbox from '../../../../components/checkbox'

const Login: FC = memo(() => {
  // eslint-disable-next-line operator-linebreak
  const { handleSubmit, handleChange, handleCheckChange, errors, response } =
    useFormLogin()
  const { success, error } = response
  const { usernameError, passwordError } = errors

  const userFieldRef = useRef<HTMLInputElement>(null)
  const passwordFieldRef = useRef<HTMLInputElement>(null)

  return (
    <LoginViewContainer>
      <HeadingsContainer>
        <LoginHeader>Welcome Back</LoginHeader>
        <SubHeading>Please login to your account</SubHeading>
      </HeadingsContainer>
      {success && <ToastComponent toastType="success" description={success} />}
      {error && <ToastComponent toastType="error" description={error} />}
      <InputFieldsContainer>
        <InputContainer>
          <Input
            ref={userFieldRef}
            label="WhatsApp Number/Email"
            name="username"
            value={userFieldRef && userFieldRef.current?.value}
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
            value={passwordFieldRef && passwordFieldRef.current?.value}
            handleChange={handleChange}
          />
        </InputContainer>
        {passwordError ? (
          <EmptyErrorState>{passwordError}</EmptyErrorState>
        ) : (
          <MarginDiv />
        )}

        <CheckboxContainer>
          <Checkbox name="remember" handleChange={handleCheckChange} />
          <CheckboxPlaceholder>Remember me</CheckboxPlaceholder>
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
      <Link to="/forgot-password">
        <LoginSubFooter>Forgot your password?</LoginSubFooter>
      </Link>
      <LoginFooter>
        Don&apos;t have an account?
        <Link to="/get-started">
          <LinkText> Register</LinkText>
        </Link>
      </LoginFooter>
    </LoginViewContainer>
  )
})

export default Login
