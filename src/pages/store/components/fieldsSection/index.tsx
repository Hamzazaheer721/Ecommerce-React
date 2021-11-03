import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import {
  faBuilding,
  faBurgerSoda,
  faCreditCardFront,
  faUser
} from '@fortawesome/pro-light-svg-icons'
import { FC, memo } from 'react'
import Input from '../../../../components/input'
import Select from '../../../../components/select'
import {
  FieldsSectionContainer,
  InputContainer,
  InputsContainer,
  SingleInputContainer
} from './index.styled'

const FieldsSection: FC = memo(() => {
  console.log('fieldsSection')
  return (
    <FieldsSectionContainer>
      <SingleInputContainer>
        <Input prefix={faUser} label="Bussiness Profile" />
      </SingleInputContainer>

      <InputsContainer>
        <InputContainer>
          <Input
            label="WhatsApp Number"
            phonefield
            prefix={faWhatsapp}
            store
            // value={phone}
            // handlePhoneChange={handlePhoneChange}
          />
        </InputContainer>

        <InputContainer>
          <Input prefix={faCreditCardFront} label="Bussiness URL" />
        </InputContainer>
      </InputsContainer>

      <InputsContainer>
        <InputContainer>
          <Select prefix={faBurgerSoda} label="Industry" />
        </InputContainer>

        <InputContainer>
          <Select prefix={faBuilding} label="Industry Type" />
        </InputContainer>
      </InputsContainer>

      <InputsContainer>
        <InputContainer>
          <Input prefix={faBuilding} label="About Bussiness" />
        </InputContainer>
      </InputsContainer>
    </FieldsSectionContainer>
  )
})

export default FieldsSection
