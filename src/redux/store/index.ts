/* eslint-disable implicit-arrow-linebreak */
import { configureStore } from '@reduxjs/toolkit'
// import logger from 'redux-logger'
import storage from 'redux-persist/lib/storage'
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist'
import { reducers } from '../reducers'

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
    })
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
