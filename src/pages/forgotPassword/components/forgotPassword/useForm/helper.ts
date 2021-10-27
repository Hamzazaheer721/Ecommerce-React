import { isEmpty } from '../../../../../general/validations';
import { IForgotPasswordErrorsType } from './types';

export const validateError = (username: string): IForgotPasswordErrorsType => {
  const error: IForgotPasswordErrorsType = {};
  if (isEmpty(username)) error.usernameError = 'Please enter your Whatsapp Number/Email'
  return error;
}
