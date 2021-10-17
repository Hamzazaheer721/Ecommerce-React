import { isEmpty } from '../../../../../general/validations';
import { IIinputformType, IInputformErrorsType } from './types';

export const validateInputForm = (inputData: IIinputformType) => {
  const errors: IInputformErrorsType = {};
  const { email, password } = inputData;

  if (isEmpty(email)) {
    errors.emailError = 'Please enter your email'
  }

  if (isEmpty(password)) {
    errors.passwordError = 'Please enter your password'
  }

  return errors;
}
