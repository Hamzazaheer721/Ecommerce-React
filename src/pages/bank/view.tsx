import { memo, useContext, useRef, useState } from 'react'
import {
  faCreditCard,
  faLandmark,
  faMoneyCheckEditAlt,
  faMapMarkedAlt,
  faMobileAndroid,
  faGlobe,
  faSave,
  faEnvelope
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
import { optionsArray } from './helper'
import { EmptyErrorState } from '../../styles/typography'

const ViewComponent = memo(() => {
  const { handleChange, handlePhoneChange, handleSubmit, inputData, errors } =
    useFieldsForm()
  const bankNameField = useRef<HTMLInputElement>(null)
  const paypalEmail = useRef<HTMLInputElement>(null)
  const ibannumberField = useRef<HTMLInputElement>(null)
  const accountholdernameField = useRef<HTMLInputElement>(null)
  const accountholderidField = useRef<HTMLInputElement>(null)
  const swiftcodeField = useRef<HTMLInputElement>(null)

  const [selectedValue, setSelectedValue] = useState(undefined)

  const theme = useContext(ThemeContext)
  const { acc_holder_mobile_number } = inputData

  const {
    acc_holder_name,
    bank_name,
    iban_number,
    payment_method,
    paypal_email
  } = errors
  return (
    <Container>
      <LoginViewContainer secondLayout>
        <InputContainer>
          <InputsContainer>
            <InputContainer>
              <Select
                handleChange={(select) => {
                  setSelectedValue(select)
                  inputData.payment_method = select
                }}
                prefix={faCreditCard}
                label="Payment Method"
                options={optionsArray}
              />
              {payment_method && (
                <EmptyErrorState>{payment_method}</EmptyErrorState>
              )}
            </InputContainer>
          </InputsContainer>

          {selectedValue === 'paypal' ? (
            <InputContainer>
              <Input
                ref={paypalEmail}
                name="paypal_email"
                prefix={faEnvelope}
                label="PayPal Email"
                handleChange={handleChange}
                value={paypalEmail && paypalEmail.current?.value}
              />
              {paypal_email && (
                <EmptyErrorState>{paypal_email}</EmptyErrorState>
              )}
            </InputContainer>
          ) : (
            ''
          )}

          <InputContainer>
            <Input
              ref={bankNameField}
              name="bank_name"
              prefix={faLandmark}
              label="Bank Name"
              handleChange={handleChange}
              value={bankNameField && bankNameField.current?.value}
            />
            {bank_name && <EmptyErrorState>{bank_name}</EmptyErrorState>}
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
            {iban_number && <EmptyErrorState>{iban_number}</EmptyErrorState>}
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
            {acc_holder_name && (
              <EmptyErrorState>{acc_holder_name}</EmptyErrorState>
            )}
          </InputContainer>
          <InputContainer>
            <Input
              prefix={faMobileAndroid}
              label="Account Holder Mobile Number"
              phonefield
              value={acc_holder_mobile_number}
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
