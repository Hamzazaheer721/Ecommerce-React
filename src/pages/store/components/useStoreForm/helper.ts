import { IInputFormType } from './types'
import { isEmpty } from '../../../../general/validations'
import { IStoreProfileErrorType } from '../../../../types/businessProfileStore'

export const IInputFormInitialValue: IInputFormType = {
  name: '',
  whatsapp: '',
  business_url: '',
  industry: '',
  industry_type: '',
  description: '',
  purpose: 'basic'
}

export const validateInputForm = (inputData: IInputFormType) => {
  const errors: IStoreProfileErrorType = {}
  const { name, whatsapp, business_url, industry, industry_type, description } =
    inputData

  if (isEmpty(name)) {
    errors.nameError = 'Please enter your name'
  }

  if (isEmpty(whatsapp)) {
    errors.whatsappError = 'Please enter your number'
  }

  if (isEmpty(business_url)) {
    errors.business_urlError = 'Please enter url'
  }

  if (isEmpty(industry)) {
    errors.industryError = 'Please select your industry name'
  }

  if (isEmpty(industry_type)) {
    errors.industry_typeError = 'Please enter your industry type'
  }

  if (isEmpty(description)) {
    errors.descriptionError = 'Please enter description'
  }

  return errors
}
