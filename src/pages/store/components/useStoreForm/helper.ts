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
  const { name, whatsapp } = inputData

  if (isEmpty(name)) {
    errors.nameError = 'Please enter your name'
  }

  if (isEmpty(whatsapp)) {
    errors.whatsappError = 'Please enter your numner'
  }

  return errors
}
