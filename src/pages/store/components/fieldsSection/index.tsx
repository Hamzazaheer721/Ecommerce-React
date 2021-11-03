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
import CoverImages from '../coverImagesSection'

const FieldsSection: FC = memo(() => (
  <FieldsSectionContainer>
    <SingleInputContainer>
      <Input prefix={faUser} label="Bussiness Profile" />
    </SingleInputContainer>

    <InputsContainer>
      <InputContainer>
        <Input label="WhatsApp Number" phonefield prefix={faWhatsapp} store />
      </InputContainer>

      <InputContainer>
        <Input
          prefix={faCreditCardFront}
          label="Bussiness URL"
          suffixText=".whatspays.com"
        />
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
        <Input prefix={faBuilding} label="About Bussiness" textArea />
      </InputContainer>
    </InputsContainer>

    <InputsContainer>
      <InputContainer>
        <CoverImages />
      </InputContainer>
    </InputsContainer>
  </FieldsSectionContainer>
))

export default FieldsSection
