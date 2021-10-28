import { IResetPasswordStateTypes } from './types';

export const IResetPasswordInitialState : IResetPasswordStateTypes = {
  username: '',
  activation_code: '',
  password: '',
  password_confirmation: ''
}
