import { FC, memo } from 'react'
import { faUser } from '@fortawesome/pro-light-svg-icons';
import Button from '../../../../components/button';
import Input from '../../../../components/input';

import {
  CheckboxContainer,
  CheckboxPlaceholder,
  CustomCheckBox,
  Heading, HeadingsContainer, InputContainer, InputFieldsContainer, MarginDiv, SubHeading
} from './index.styled';

const Login: FC = memo(() => (
  <InputContainer>
    <HeadingsContainer>
      <Heading>
        Welcome Back
      </Heading>
      <SubHeading>
        Please login to your account
      </SubHeading>
    </HeadingsContainer>
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

    <Button label="Login" icon={faUser} />
  </InputContainer>
));

export default Login;
