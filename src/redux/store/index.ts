import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import { userSignupSlice } from '../features/userSignupSlice';
import { userSigninSlice } from '../features/userSigninSlice/index';

export const store = configureStore({
  reducer: {
    user: userSigninSlice.reducer,
    registerUser: userSignupSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    getDefaultMiddleware().concat(logger)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
