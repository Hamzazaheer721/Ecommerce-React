import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faUser } from '@fortawesome/pro-light-svg-icons'
import { FC, memo } from 'react'
import Input from '../../../../components/input'
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
          <Input prefix={faUser} label="Bussiness Profile" />
        </InputContainer>
      </InputsContainer>

      <InputsContainer>
        <InputContainer>
          <Input />
        </InputContainer>
        <InputContainer>
          <Input />
        </InputContainer>
      </InputsContainer>
    </FieldsSectionContainer>
  )
})

export default FieldsSection
