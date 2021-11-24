/* eslint-disable no-unreachable */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable no-param-reassign */
import { memo, FC, useCallback, useEffect } from 'react'
import 'antd/dist/antd.css'
import { faCheck } from '@fortawesome/pro-light-svg-icons'
import { useDispatch, useSelector } from 'react-redux'

// import { useHistory } from 'react-router-dom'
import { closeModal, openModal } from '../../../../redux/features/modalSlice'
import { deactivateUser } from '../../../../redux/features/deactivateUserSlice/apiActions'
import { deleteUser } from '../../../../redux/features/deleteUserSlice/apiActions'
import { RootState } from '../../../../redux/store'
import {
  NotificationIcon,
  ModalContentContainer,
  Title,
  DoneButton,
  Description,
  ModalContainer,
  CancelButton
} from './index.styled'

const AlertModal: FC = memo(() => {
  const dispatch = useDispatch()

  const { modalVisibility, description, methodType } = useSelector(
    (state: RootState) => state.modal
  )
  const { deactivateStatus } = useSelector(
    (state: RootState) => state.deactivateUser
  )
  const { deleteUserStatus } = useSelector(
    (state: RootState) => state.deleteUser
  )

  const cancelModalState = useCallback(() => {
    dispatch(closeModal())
  }, [])

  const methodHandler = useCallback(() => {
    switch (methodType) {
      case 'deactivateAccount':
        return dispatch(deactivateUser())
      case 'deleteAccount': {
        const user = localStorage.getItem('user')
        const { email } = user && JSON.parse(String(user))
        return dispatch(deleteUser(email))
      }
      default:
        return null
    }
  }, [])

  useEffect(() => {
    if (deleteUserStatus) {
      cancelModalState()
      dispatch(
        openModal({
          modalType: 'success',
          description: 'Successfully deleted & Logged Out',
          nextScreen: '/login'
        })
      )
    }
  }, [deleteUserStatus])

  useEffect(() => {
    if (deactivateStatus) {
      dispatch(
        openModal({
          modalType: 'success',
          description: 'Successfully deactivated & Logged Out',
          nextScreen: '/login'
        })
      )
    }
  }, [deactivateStatus])

  return (
    <>
      <ModalContainer
        centered
        footer={null}
        closable={false}
        visible={modalVisibility}
      >
        <ModalContentContainer>
          <NotificationIcon icon={faCheck} />
          <Title>Are You Sure</Title>
          <Description>
            {description ? (
              <>{description}</>
            ) : (
              <>Reset Code/Link has been sent on your WhatsApp and Email.</>
            )}
          </Description>
          <CancelButton type="button" onClick={cancelModalState}>
            Cancel
          </CancelButton>
          <DoneButton type="button" onClick={methodHandler}>
            Yes
          </DoneButton>
        </ModalContentContainer>
      </ModalContainer>
    </>
  )
})

export default AlertModal
