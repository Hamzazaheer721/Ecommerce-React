/* eslint-disable no-unreachable */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable no-param-reassign */
import { memo, FC, useCallback, useEffect } from 'react'
import 'antd/dist/antd.css'
import { faCheck } from '@fortawesome/pro-light-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

// import { useHistory } from 'react-router-dom'
import { closeModal } from '../../../../redux/features/modalSlice'
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
  const { push } = useHistory()
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
  const user = localStorage.getItem('user')
  const { email } = JSON.parse(String(user))

  const cancelModalState = useCallback(() => {
    dispatch(closeModal())
  }, [])

  const methodHandler = useCallback(() => {
    switch (methodType) {
      case 'deactivateAccount':
        return dispatch(deactivateUser())
      case 'deleteAccount':
        return dispatch(deleteUser(email))
      default:
        return null
    }
  }, [])

  useEffect(() => {
    if (deactivateStatus) {
      cancelModalState()
      push('/login')
    }
  }, [deactivateStatus])

  useEffect(() => {
    if (deleteUserStatus) {
      cancelModalState()
      push('/login')
    }
  }, [deleteUserStatus])

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
