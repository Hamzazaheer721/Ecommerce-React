import { FC, memo } from 'react'
import { faUser, faBuilding } from '@fortawesome/pro-light-svg-icons'
import {
  LoginHeader,
  LoginDescription,
  LoginFooter
} from '../../styles/typography'
import { LoginViewContainer } from '../../styles/global'
import {
  ButtonContainer,
  SecondaryButtonContainer
} from '../../components/genericButton/index.styled'
import CustomButton from '../../components/genericButton'
import ToastComponent from '../../components/toaster'

const ViewComponent: FC = memo(() => (
  <LoginViewContainer>
    <LoginHeader>Get Started Free</LoginHeader>
    <LoginDescription>
      Its time to enjoy ultimate shoping experience through WhatsApp
    </LoginDescription>
    <ToastComponent toastType="info" />
    <ButtonContainer>
      <CustomButton label="Customer" icon={faUser} type="button" color="red" />
    </ButtonContainer>
    <SecondaryButtonContainer>
      <ButtonContainer>
        <CustomButton
          label="Company"
          icon={faBuilding}
          type="button"
          color="red"
        />
      </ButtonContainer>
    </SecondaryButtonContainer>
    <LoginFooter>
      Already on WhatsPays?
      <span> Login</span>
    </LoginFooter>
  </LoginViewContainer>
))

export default ViewComponent
