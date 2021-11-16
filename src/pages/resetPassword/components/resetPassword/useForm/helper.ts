import {
  isEmpty,
  validateActivationCode
  // validatePassword
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

  if (typeof activation_code === 'string' && isEmpty(activation_code.trim().toUpperCase())) {
    errors.activationCodeError = 'Please enter a activation code'
  } else if (
    typeof activation_code === 'string' &&
    !validateActivationCode(activation_code.trim().toUpperCase())
  ) {
    errors.activationCodeError = 'Please enter a valid activation code'
  }

  if (isEmpty(password)) {
    errors.passwordError = 'Please enter a password'
  } else if (password.length < 8) {
    errors.confirmationPasswordError =
      'Please enter a password of atleast 8 characters'
  }
  // else if (!validatePassword(password)) {
  //   errors.passwordError = 'Please enter a valid password'
  // }

  if (isEmpty(password_confirmation)) {
    errors.confirmationPasswordError = 'Please enter a password'
  } else if (password_confirmation.length < 8) {
    errors.confirmationPasswordError =
      'Please enter a password of atleast 8 characters'
  }
  // else if (!validatePassword(password_confirmation)) {
  //   errors.confirmationPasswordError = 'Please enter a valid password'
  // }

  return errors
}
