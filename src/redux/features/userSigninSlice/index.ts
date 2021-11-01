import { createSlice} from '@reduxjs/toolkit';
import { addUser } from './caseReducers';
import { IUserLoginRtnData } from '../../../types/user';

export interface ILoginUserTypes {
  user?: Partial<IUserLoginRtnData>

}

export const initialState: ILoginUserTypes = {
  user: {}
}

export const userSigninSlice = createSlice({
  name: 'user-signin',
  initialState,
  reducers: {
    addUser
  }
})

export const { addUser: addUserAction } = userSigninSlice.actions;
