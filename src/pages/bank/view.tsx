import { memo, useContext } from 'react'
import {
  faCreditCard,
  faLandmark,
  // faCreditCardFront,
  faMoneyCheckEditAlt,
  faMapMarkedAlt,
  faMobileAndroid,
  faGlobe,
  faSave
} from '@fortawesome/pro-light-svg-icons'
import { faSwift } from '@fortawesome/free-brands-svg-icons'
import { ThemeContext } from 'styled-components'

import {
  Container,
  InputsContainer,
  InputContainer,
  ButtonContainerInner
} from './index.styled'
import { LoginViewContainer, ButtonContainer } from '../../styles/global'
import Input from '../../components/input'
import Select from '../../components/select'
import ButtonComponent from '../../components/genericButton'

const ViewComponent = memo(() => {
  const theme = useContext(ThemeContext)

  return (
    <Container>
      <LoginViewContainer secondLayout>
        <InputContainer>
          <InputsContainer>
            <InputContainer>
              <Select prefix={faCreditCard} label="Payment Method" />
            </InputContainer>
          </InputsContainer>
          <InputContainer>
            <Input prefix={faLandmark} label="Bank Name" />
          </InputContainer>
          {/* <InputContainer>
            <Input prefix={faCreditCardFront} label="Account Number" />
          </InputContainer> */}
          <InputContainer>
            <Input prefix={faMoneyCheckEditAlt} label="IBAN Number" />
          </InputContainer>
          <InputContainer>
            <Input prefix={faMapMarkedAlt} label="Account Holder Name" />
          </InputContainer>
          <InputContainer>
            <Input
              prefix={faMobileAndroid}
              label="Account Holder Mobile Number"
              phonefield
            />
          </InputContainer>
          <InputContainer>
            <Input prefix={faGlobe} label="Account Holder ID/Passport Number" />
          </InputContainer>
          <InputContainer>
            <Input prefix={faSwift} label="Swift Code" />
          </InputContainer>
        </InputContainer>
        <ButtonContainer>
          <ButtonContainerInner secondLayout>
            <ButtonComponent
              icon={faSave}
              label="Save"
              color={theme.color.primary}
            />
          </ButtonContainerInner>
        </ButtonContainer>
      </LoginViewContainer>
    </Container>
  )
})

export default ViewComponent
