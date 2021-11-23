import { IInputFormType, IInputformErrorsType } from './types'
import {
  isEmpty,
  validateName,
  isEmail,
  validateIban
} from '../../../general/validations'

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
  } else if (payment_method === 'paypal') {
    if (isEmpty(paypal_email)) {
      errors.paypal_email = 'Please enter your paypal Email'
    } else if (!isEmail(paypal_email)) {
      errors.paypal_email = 'Please enter a valid Email'
    }
  }

  if (isEmpty(bank_name)) {
    errors.bank_name = 'Please enter your bank name'
  } else if (!validateName(bank_name)) {
    errors.bank_name = 'Please enter a valid bank name'
  }

  if (isEmpty(iban_number)) {
    errors.iban_number = 'Please enter your IBAN number'
  } else if (!validateIban(iban_number)) {
    errors.iban_number = 'Please enter a valid IBAN'
  }

  if (isEmpty(acc_holder_name)) {
    errors.acc_holder_name = 'Please enter account holder name'
  } else if (!validateName(acc_holder_name)) {
    errors.acc_holder_name = 'Please enter a valid name'
  }

  return errors
}
