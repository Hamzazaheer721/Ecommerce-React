import {
  isEmpty,
  validateActivationCode,
  validatePassword
} from '../../../../../general/validations'
import { IResetPasswordErrorTypes, IResetPasswordStateTypes } from './types'

export const IResetPasswordInitialState: IResetPasswordStateTypes = {
  username: '',
  activation_code: '',
  password: '',
  password_confirmation: '',
  userId: ''
}

export const validateErrors = (
  resetPasswordData: Omit<IResetPasswordStateTypes, 'username'>
): Partial<IResetPasswordErrorTypes> => {
  const errors: Partial<IResetPasswordErrorTypes> = {}
  const { activation_code, password, password_confirmation } = resetPasswordData

  if (activation_code && isEmpty(activation_code.trim().toUpperCase())) {
    errors.activationCodeError = 'Please enter a activation code'
  } else if (activation_code && !validateActivationCode(activation_code.trim().toUpperCase())) {
    errors.activationCodeError = 'Please enter a valid activation code'
  }

  if (isEmpty(password)) {
    errors.passwordError = 'Please enter a password'
  } else if (!validatePassword(password)) {
    errors.passwordError = 'Please enter a valid password'
  }

  if (isEmpty(password_confirmation)) {
    errors.confirmationPasswordError = 'Please enter a password'
  } else if (!validatePassword(password_confirmation)) {
    errors.confirmationPasswordError = 'Please enter a valid password'
  }

  return errors;
}
