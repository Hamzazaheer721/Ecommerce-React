import { isEmpty } from '../../../../../general/validations';
import { IInputformType, IInputformErrorsType } from './types';

export const validateInputForm = (inputData: Omit<IInputformType, 'remember'>) => {
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
