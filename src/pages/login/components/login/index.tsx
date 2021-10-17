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

const Login: FC = memo(() => {
  const nameFieldRef = useRef<HTMLInputElement>(null)
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
          <Input ref={nameFieldRef} />
        </InputContainer>
        <MarginDiv />
        <InputContainer>
          <Input ref={passwordFieldRef} />
        </InputContainer>
        <MarginDiv />
        <CheckboxContainer>
          <CustomCheckBox type="checkbox" />
          <CheckboxPlaceholder>Remember me</CheckboxPlaceholder>
        </CheckboxContainer>
      </InputFieldsContainer>
      <ButtonContainer>
        <Button label="Login" icon={faUser} />
      </ButtonContainer>
    </Container>
  )
});

export default Login;
