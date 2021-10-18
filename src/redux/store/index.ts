import { configureStore } from '@reduxjs/toolkit'
// import { userSignupSlice } from '../features/userSignupSlice';
import logger from 'redux-logger'
import { userSigninSlice } from '../features/userSigninSlice/index';

export const store = configureStore({
  reducer: {
    user: userSigninSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    getDefaultMiddleware().concat(logger)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
