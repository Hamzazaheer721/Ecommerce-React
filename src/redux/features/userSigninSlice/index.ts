import { createSlice, PayloadAction } from '@reduxjs/toolkit';
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
    addUserAction: (state = initialState, action: PayloadAction<IUserLoginRtnData>) => {
      const { payload } = action;
      state.user = payload;
    }
  }
})
export const { addUserAction } = userSigninSlice.actions;
