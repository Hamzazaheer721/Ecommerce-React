import { memo, useContext, useRef } from 'react'
import {
  faCreditCard,
  faLandmark,
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
import useFieldsForm from './useFieldsForm'

const ViewComponent = memo(() => {
  const { handleChange, handlePhoneChange, handleSubmit } = useFieldsForm()
  const bankNameField = useRef<HTMLInputElement>(null)
  const ibannumberField = useRef<HTMLInputElement>(null)
  const accountholdernameField = useRef<HTMLInputElement>(null)
  const phoneField = useRef<HTMLInputElement>(null)
  const accountholderidField = useRef<HTMLInputElement>(null)
  const swiftcodeField = useRef<HTMLInputElement>(null)

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
            <Input
              ref={bankNameField}
              name="bank_name"
              prefix={faLandmark}
              label="Bank Name"
              handleChange={handleChange}
              value={bankNameField && bankNameField.current?.value}
            />
          </InputContainer>

          <InputContainer>
            <Input
              ref={ibannumberField}
              name="iban_number"
              prefix={faMoneyCheckEditAlt}
              label="IBAN Number"
              handleChange={handleChange}
              value={ibannumberField && ibannumberField.current?.value}
            />
          </InputContainer>
          <InputContainer>
            <Input
              ref={accountholdernameField}
              name="acc_holder_name"
              prefix={faMapMarkedAlt}
              label="Account Holder Name"
              handleChange={handleChange}
              value={
                accountholdernameField && accountholdernameField.current?.value
              }
            />
          </InputContainer>
          <InputContainer>
            <Input
              prefix={faMobileAndroid}
              label="Account Holder Mobile Number"
              phonefield
              value={phoneField && phoneField.current?.value}
              handlePhoneChange={handlePhoneChange}
            />
          </InputContainer>
          <InputContainer>
            <Input
              ref={accountholderidField}
              name="passport_number"
              prefix={faGlobe}
              label="Account Holder ID/Passport Number"
              handleChange={handleChange}
              value={
                accountholderidField && accountholderidField.current?.value
              }
            />
          </InputContainer>
          <InputContainer>
            <Input
              ref={swiftcodeField}
              name="swift_code"
              prefix={faSwift}
              label="Swift Code"
              handleChange={handleChange}
              value={swiftcodeField && swiftcodeField.current?.value}
            />
          </InputContainer>
        </InputContainer>
        <ButtonContainer>
          <ButtonContainerInner secondLayout>
            <ButtonComponent
              icon={faSave}
              label="Save"
              color={theme.color.primary}
              handleSubmit={handleSubmit}
            />
          </ButtonContainerInner>
        </ButtonContainer>
      </LoginViewContainer>
    </Container>
  )
})

export default ViewComponent
