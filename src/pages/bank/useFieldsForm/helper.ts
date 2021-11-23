import { IInputFormType, IInputformErrorsType } from './types'
import { isEmpty } from '../../../general/validations'

export const IInputFormInitialValue: IInputFormType = {
  payment_method: '',
  paypal_email: '',
  bank_name: '',
  iban_number: '',
  acc_holder_name: '',
  acc_holder_mobile_number: '',
  passport_number: '',
  swift_code: '',
  purpose: 'bank'
}

// all validations paused for temprarly

export const validateInputForm = (
  inputData: Omit<IInputFormType, 'purpose'>
) => {
  const errors: IInputformErrorsType = {}
  const {
    payment_method,
    paypal_email,
    bank_name,
    iban_number,
    acc_holder_name
  } = inputData

  if (isEmpty(payment_method)) {
    errors.payment_method = 'Please choose your payment method'
  }

  if (isEmpty(paypal_email)) {
    errors.paypal_email = 'Please enter your paypal Email'
  }

  if (isEmpty(bank_name)) {
    errors.bank_name = 'Please enter your bank name'
  }

  if (isEmpty(iban_number)) {
    errors.iban_number = 'Please enter your IBAN number'
  }

  if (isEmpty(acc_holder_name)) {
    errors.acc_holder_name = 'Please enter account holder name'
  }

  return errors
}
