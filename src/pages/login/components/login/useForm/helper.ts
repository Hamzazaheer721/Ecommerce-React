import { isEmpty } from '../../../../../general/validations';
import { IIinputformType, IInputformErrorsType } from './types';

export const validateInputForm = (inputData: IIinputformType) => {
  const errors: IInputformErrorsType = {};
  const { username, password } = inputData;

  if (isEmpty(username)) {
    errors.usernameError = 'Please enter your username'
  }

  if (isEmpty(password)) {
    errors.passwordError = 'Please enter your password'
  }

  return errors;
}
