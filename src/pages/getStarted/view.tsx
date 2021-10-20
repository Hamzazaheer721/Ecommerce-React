/* eslint-disable no-undef */
import { FC, memo } from 'react'
import {
  faUser,
  faBuilding
} from '@fortawesome/pro-light-svg-icons'
import { Link } from 'react-router-dom'

import {
  LoginHeader,
  LoginDescription,
  LoginFooter
} from '../../styles/typography'
import { LoginViewContainer } from '../../styles/global'
import CustomButton from '../../components/genericButton'
import {
  ButtonContainer,
  SecondaryButtonContainer
} from '../../components/genericButton/index.styled'

const ViewComponent: FC = memo(() => (
  <LoginViewContainer>
    <LoginHeader>Get Started Free</LoginHeader>
    <LoginDescription>
      Its time to enjoy ultimate shoping experience through
      WhatsApp
    </LoginDescription>
    <Link to="/register/customer">
      <ButtonContainer>
        <CustomButton
          label="Customer"
          icon={faUser}
          type="button"
          color="red"
        />
      </ButtonContainer>
    </Link>
    <Link to="/register/company">
      <SecondaryButtonContainer>
        <CustomButton
          label="Company"
          icon={faBuilding}
          type="button"
          color="red"
        />
      </SecondaryButtonContainer>
    </Link>
    <LoginFooter>
      Already on WhatsPays?
      <span> Login</span>
    </LoginFooter>
  </LoginViewContainer>
))

export default ViewComponent
