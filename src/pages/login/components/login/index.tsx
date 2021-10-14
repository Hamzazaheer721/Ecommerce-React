import { FC, memo } from 'react'
import Input from '../../../../components/input';
import {
  CheckboxContainer,
  CheckboxPlaceholder,
  CustomCheckBox,
  Heading, InputContainer, InputFieldsContainer, MarginDiv, SubHeading
} from './index.styled';

const Login: FC = memo(() => (
  <InputContainer>
    <Heading>
      Welcome Back
    </Heading>
    <SubHeading>
      Please login to your account
    </SubHeading>
    <InputFieldsContainer>
      <Input />
      <MarginDiv />
      <Input />
      <MarginDiv />
      <CheckboxContainer>
        <CustomCheckBox type="checkbox" />
        <CheckboxPlaceholder>Remember me</CheckboxPlaceholder>
      </CheckboxContainer>
    </InputFieldsContainer>

  </InputContainer>
));

export default Login;
