/* eslint-disable no-undef */
import { FC, memo, useState } from 'react'
import {
  faUser,
  faBuilding
} from '@fortawesome/pro-light-svg-icons'
import { Link } from 'react-router-dom'
import CustomizeModal from '../../components/modal'

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

const ViewComponent: FC = memo(() => {
  // eslint-disable-next-line operator-linebreak
  const [isModalVisible, setIsModalVisible] =
    useState(false)

  const showModal = () => {
    setIsModalVisible(true)
  }

  const closeModal: () => void = () => {
    setIsModalVisible(false)
  }

  return (
    <LoginViewContainer>
      <LoginHeader>Get Started Free</LoginHeader>
      <LoginDescription>
        Its time to enjoy ultimate shoping experience
        through WhatsApp
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
      <button type="button" onClick={showModal}>
        open modal
      </button>
      {isModalVisible && (
        <CustomizeModal
          openModal={isModalVisible}
          closeModal={closeModal}
        />
      )}
      <LoginFooter>
        Already on WhatsPays?
        <span> Login</span>
      </LoginFooter>
    </LoginViewContainer>
  )
})

export default ViewComponent
