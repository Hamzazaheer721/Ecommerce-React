import { configureStore } from '@reduxjs/toolkit';
import { userSignupSlice } from '../features/userSignupSlice';

export const store = configureStore({
  reducer: {
    userSignup: userSignupSlice.reducer
  }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
