import { memo } from 'react'
import { faCreditCard } from '@fortawesome/pro-light-svg-icons'
import { Container, InputsContainer, InputContainer } from './index.styled'
// import {
//   LoginViewContainer,
//   InputFieldsContainer,
//   InputContainer
// } from '../../styles/global'
// import Input from '../../components/input'
import Select from '../../components/select'

const ViewComponent = memo(() => (
  <Container>
    {/* <LoginViewContainer>
      <InputFieldsContainer>
        <InputContainer> */}
    <InputsContainer>
      <InputContainer>
        <Select prefix={faCreditCard} label="Payment Method" />
      </InputContainer>
    </InputsContainer>
    {/* </InputContainer>
        <InputContainer>
          <Input prefix={faCreditCard} label="Payment Method" />
        </InputContainer>
      </InputFieldsContainer>
    </LoginViewContainer> */}
  </Container>
))

export default ViewComponent
