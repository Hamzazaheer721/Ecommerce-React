import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import {
  faBuilding,
  faBurgerSoda,
  faCreditCardFront,
  faUser,
  faSave
} from '@fortawesome/pro-light-svg-icons'
import { FC, memo, useContext, useRef } from 'react'
import { ThemeContext } from 'styled-components'

import Input from '../../../../components/input'
import Select from '../../../../components/select'
import {
  FieldsSectionContainer,
  InputContainer,
  InputsContainer,
  SingleInputContainer,
  CheckboxContainer,
  CheckboxPlaceholder,
  ErrorContainer,
  SingleInputWrapper
} from './index.styled'
import CoverImages from '../coverImagesSection'
import ButtonComponent from '../../../../components/genericButton'
import useStoreForm from '../useStoreForm'
import { industryTypeOptionsArray, industryOptionsArray } from './helper'
import { ButtonLayout, ButtonContainer } from '../../../../styles/global'
import { EmptyErrorState } from '../../../../styles/typography'
import Checkbox from '../../../../components/checkbox'

const FieldsSection: FC = memo(() => {
  const theme = useContext(ThemeContext)

  const {
    inputData,
    handleChange,
    handlePhoneChange,
    handleSubmit,
    handleTextAreaChange,
    errors,
    handleCheckChange
  } = useStoreForm()

  const {
    nameError,
    whatsappError,
    business_urlError,
    industryError,
    industry_typeError,
    descriptionError
  } = errors
  const { whatsapp } = inputData
  const nameField = useRef<HTMLInputElement>(null)
  const business_urlField = useRef<HTMLInputElement>(null)
  const descriptionField = useRef<HTMLInputElement>(null)

  return (
    <FieldsSectionContainer>
      <SingleInputWrapper>
        <SingleInputContainer>
          <Input
            ref={nameField}
            name="name"
            prefix={faUser}
            label="Bussiness Profile"
            handleChange={handleChange}
            value={nameField && nameField.current?.value}
          />
        </SingleInputContainer>
        {nameError && <EmptyErrorState>{nameError}</EmptyErrorState>}
      </SingleInputWrapper>
      <InputsContainer>
        <ErrorContainer>
          <InputContainer>
            <Input
              value={whatsapp}
              label="WhatsApp Number"
              phonefield
              prefix={faWhatsapp}
              handlePhoneChange={handlePhoneChange}
            />
          </InputContainer>
          {whatsappError && <EmptyErrorState>{whatsappError}</EmptyErrorState>}
        </ErrorContainer>
        <ErrorContainer>
          <InputContainer>
            <Input
              ref={business_urlField}
              name="business_url"
              prefix={faCreditCardFront}
              label="Bussiness URL"
              suffixText=".whatspays.com"
              handleChange={handleChange}
              value={business_urlField && business_urlField.current?.value}
            />
          </InputContainer>
          {business_urlError && (
            <EmptyErrorState>{business_urlError}</EmptyErrorState>
          )}
        </ErrorContainer>
      </InputsContainer>
      <InputsContainer>
        <ErrorContainer>
          <InputContainer>
            <Select
              autoDefaultValue={industryOptionsArray[0].value}
              handleChange={(select) => {
                inputData.industry = select
              }}
              prefix={faBurgerSoda}
              label="Industry"
              options={industryOptionsArray}
            />
          </InputContainer>
          {industryError && <EmptyErrorState>{industryError}</EmptyErrorState>}
        </ErrorContainer>
        <ErrorContainer>
          <InputContainer>
            <Select
              autoDefaultValue={industryTypeOptionsArray[0].value}
              handleChange={(select) => {
                inputData.industry_type = select
              }}
              prefix={faBuilding}
              label="Industry Type"
              options={industryTypeOptionsArray}
            />
          </InputContainer>
          {industry_typeError && (
            <EmptyErrorState>{industry_typeError}</EmptyErrorState>
          )}
        </ErrorContainer>
      </InputsContainer>
      <InputsContainer>
        <SingleInputWrapper>
          <InputContainer>
            <Input
              ref={descriptionField}
              name="description"
              prefix={faBuilding}
              label="About Bussiness"
              textArea
              handleTextAreaChange={handleTextAreaChange}
              value={descriptionField && descriptionField.current?.value}
            />
          </InputContainer>
          {descriptionError && (
            <EmptyErrorState>{descriptionError}</EmptyErrorState>
          )}
        </SingleInputWrapper>
      </InputsContainer>
      <InputsContainer>
        <InputContainer>
          <CoverImages />
        </InputContainer>
      </InputsContainer>
      <InputsContainer>
        <InputContainer>
          <CheckboxContainer>
            <Checkbox
              width="16px"
              height="16px"
              name="remember"
              handleChange={handleCheckChange}
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
