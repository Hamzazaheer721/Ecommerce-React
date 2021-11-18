/* eslint-disable implicit-arrow-linebreak */
import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from 'redux'
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist'
import { currentGeoLocationSlice } from '../features/geoLocatonSlice/index'
import { userSignupSlice } from '../features/userSignupSlice'
import { userSigninSlice } from '../features/userSigninSlice/index'
import { activationSlice } from '../features/activationSlice'
import { ModalSlice } from '../features/modalSlice'
import { resendActivationLinkSlice } from '../features/resendActivationLinkSlice'
import { forgotPasswordSlice } from '../features/forgotPasswordSlice'
import { resetPasswordSlice } from '../features/resetPasswordSlice'
import { updateUserProfileSlice } from '../features/updateUserProfileSlice/index'
import { geoAddressSlice } from '../features/geoAddressSlice'
import { updateBankInfoSlice } from '../features/updateBankInfo'
import { deactivateUserSlice } from '../features/deactivateUserSlice'

const reducers = combineReducers({
  user: userSigninSlice.reducer,
  registerUser: userSignupSlice.reducer,
  activation: activationSlice.reducer,
  modal: ModalSlice.reducer,
  resendActivation: resendActivationLinkSlice.reducer,
  forgotPassword: forgotPasswordSlice.reducer,
  resetPassword: resetPasswordSlice.reducer,
  currentGeoLocation: currentGeoLocationSlice.reducer,
  updateUserProfile: updateUserProfileSlice.reducer,
  currentAddressLocation: geoAddressSlice.reducer,
  updateBankInfo: updateBankInfoSlice.reducer,
  deactivateUser: deactivateUserSlice.reducer
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['registerUser', 'forgotPassword'] // only registerUser will be persisted
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    }).concat(logger)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
