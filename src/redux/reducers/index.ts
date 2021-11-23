import { combineReducers } from 'redux'
import { contactFieldSlice } from '../features/contactFieldsSlice/index'
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
import { updateBasicInfoSlice } from '../features/updateBasicInfoSlice'
import { contactFormSlice } from '../features/apiCallFeatures/contactFormSlice'

export const reducers = combineReducers({
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
  deactivateUser: deactivateUserSlice.reducer,
  contactFields: contactFieldSlice.reducer,
  updateBasicInfo: updateBasicInfoSlice.reducer,
  contactForm: contactFormSlice.reducer
})
