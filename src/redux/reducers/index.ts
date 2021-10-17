import { combineReducers } from 'redux';
import { userSignupSlice } from '../features/userSignupSlice';

export const reducer = combineReducers({
  userLogin: userSignupSlice.reducer
})
