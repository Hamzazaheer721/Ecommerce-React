import { isEmpty, validateActivationCode } from '../../../../../general/validations';
import { IActivationType, IActivationErrorType } from './types';

export const initialState : IActivationType = {
  email: '',
  activation_code: ''
}

export const checkError = (activation_code: string): Partial<IActivationErrorType> => {
  const errors: Partial<IActivationErrorType> = {}
  if (isEmpty(activation_code)) {
    errors.activationCodeError = 'Please enter activation code'
  } else if (!(validateActivationCode(activation_code))) {
    errors.activationCodeError = 'Please enter a valid activation code'
  }
  return errors;
}
