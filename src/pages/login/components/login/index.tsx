import { FC, memo, useRef } from 'react'
import { faUser } from '@fortawesome/pro-light-svg-icons';
import Button from '../../../../components/button';
import Input from '../../../../components/input';

import {
  ButtonContainer,
  CheckboxContainer,
  CheckboxPlaceholder,
  Container,
  CustomCheckBox,
  Heading, HeadingsContainer, InputContainer, InputFieldsContainer, MarginDiv, SubHeading
} from './index.styled';
import { useFormLogin } from './useForm';

const Login: FC = memo(() => {
  const {
    handleSubmit, handleChange, errors
  } = useFormLogin();

  const { emailError, passwordError } = errors;

  const emailFieldRef = useRef<HTMLInputElement>(null)
  const passwordFieldRef = useRef<HTMLInputElement>(null)
  return (
    <Container>
      <HeadingsContainer>
        <Heading>
          Welcome Back
        </Heading>
        <SubHeading>
          Please login to your account
        </SubHeading>
      </HeadingsContainer>
      <InputFieldsContainer>
        <InputContainer>
          <Input ref={emailFieldRef} label="Enter your name" name="email" value={emailFieldRef && emailFieldRef.current?.value} handleChange={handleChange} />
        </InputContainer>
        {emailError ? (
          <h1>{emailError}</h1>
        ) : (
          <MarginDiv />
        )}
        <InputContainer>
          <Input ref={passwordFieldRef} label="Please enter your passwrod" name="password" value={passwordFieldRef && passwordFieldRef.current?.value} handleChange={handleChange} />
        </InputContainer>
        {passwordError ? (
          <h1>{passwordError}</h1>
        ) : (
          <MarginDiv />
        )}
        <CheckboxContainer>
          <CustomCheckBox type="checkbox" />
          <CheckboxPlaceholder>Remember me</CheckboxPlaceholder>
        </CheckboxContainer>
      </InputFieldsContainer>
      <ButtonContainer>
        <Button type="submit" label="Login" icon={faUser} handleSubmit={handleSubmit} />
      </ButtonContainer>
    </Container>
  )
});

export default Login;
