/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable no-param-reassign */
import { memo, FC, useCallback } from 'react'
import 'antd/dist/antd.css'
import { faCheck } from '@fortawesome/pro-light-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
// import { useHistory } from 'react-router-dom'
import { closeModal } from '../../../../redux/features/modalSlice'
import { deactivateUser } from '../../../../redux/features/deactivateUserSlice/apiActions'
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
  // const history = useHistory()

  const { modalVisibility, description } = useSelector(
    (state: RootState) => state.modal
  )

  const cancelModalState = useCallback(() => {
    dispatch(closeModal())
  }, [modalVisibility])

  const successModalState = useCallback(() => {
    dispatch(deactivateUser())
  }, [])

  // const successModalState = useCallback(() => {
  //   dispatch(closeModal())
  //   nextScreen && history.push(nextScreen)
  // }, [modalVisibility, nextScreen, history])

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
          <DoneButton type="button" onClick={successModalState}>
            Yes
          </DoneButton>
        </ModalContentContainer>
      </ModalContainer>
    </>
  )
})

export default AlertModal
