import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import {
  faBuilding,
  faBurgerSoda,
  faCreditCardFront,
  faUser,
  faSave
} from '@fortawesome/pro-light-svg-icons'
import { FC, memo, useContext } from 'react'
import { ThemeContext } from 'styled-components'

import Input from '../../../../components/input'
import Select from '../../../../components/select'
import {
  FieldsSectionContainer,
  InputContainer,
  InputsContainer,
  SingleInputContainer,
  CheckboxContainer,
  CustomCheckBox,
  CheckboxPlaceholder
} from './index.styled'
import CoverImages from '../coverImagesSection'
import ButtonComponent from '../../../../components/genericButton'
import useStoreForm from '../useStoreForm'
import { industryTypeOptionsArray, industryOptionsArray } from './helper'
import { ButtonLayout, ButtonContainer } from '../../../../styles/global'

const FieldsSection: FC = memo(() => {
  const theme = useContext(ThemeContext)

  const { inputData, handleChange, handlePhoneChange, handleSubmit } =
    useStoreForm()
  return (
    <FieldsSectionContainer>
      <SingleInputContainer>
        <Input
          name="name"
          prefix={faUser}
          label="Bussiness Profile"
          handleChange={handleChange}
        />
      </SingleInputContainer>

      <InputsContainer>
        <InputContainer>
          <Input
            name="whatsapp"
            label="WhatsApp Number"
            phonefield
            prefix={faWhatsapp}
            store
            handlePhoneChange={handlePhoneChange}
          />
        </InputContainer>

        <InputContainer>
          <Input
            name="business_url"
            prefix={faCreditCardFront}
            label="Bussiness URL"
            suffixText=".whatspays.com"
            handleChange={handleChange}
          />
        </InputContainer>
      </InputsContainer>

      <InputsContainer>
        <InputContainer>
          <Select
            handleChange={(select) => {
              inputData.industry = select
            }}
            prefix={faBurgerSoda}
            label="Industry"
            options={industryOptionsArray}
          />
        </InputContainer>

        <InputContainer>
          <Select
            handleChange={(select) => {
              inputData.industry_type = select
            }}
            prefix={faBuilding}
            label="Industry Type"
            options={industryTypeOptionsArray}
          />
        </InputContainer>
      </InputsContainer>

      <InputsContainer>
        <InputContainer>
          <Input
            name="description"
            prefix={faBuilding}
            label="About Bussiness"
            textArea
            handleChange={handleChange}
          />
        </InputContainer>
      </InputsContainer>

      <InputsContainer>
        <InputContainer>
          <CoverImages />
        </InputContainer>
      </InputsContainer>

      <InputsContainer>
        <InputContainer>
          <CheckboxContainer>
            <CustomCheckBox
              type="checkbox"
              name="remember"
              // onChange={handleChange}
            />
            <CheckboxPlaceholder>
              I`ve read and understod the
              <span> Terms & Conditions </span>
              of WhatsPays
            </CheckboxPlaceholder>
          </CheckboxContainer>
        </InputContainer>
      </InputsContainer>
      <ButtonLayout>
        <ButtonContainer>
          <ButtonComponent
            icon={faSave}
            label="Save"
            color={theme.color.primary}
            handleSubmit={handleSubmit}
          />
        </ButtonContainer>
      </ButtonLayout>
    </FieldsSectionContainer>
  )
})

export default FieldsSection
