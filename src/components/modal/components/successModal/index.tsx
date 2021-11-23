/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable no-param-reassign */
import { memo, FC, useCallback } from 'react'
import 'antd/dist/antd.css'
import { faCheck } from '@fortawesome/pro-light-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { closeModal } from '../../../../redux/features/modalSlice'
import { RootState } from '../../../../redux/store'
import {
  NotificationIcon,
  ModalContentContainer,
  Title,
  DoneButton,
  Description,
  ModalContainer
} from './index.styled'

const SuccessModal: FC = memo(() => {
  const dispatch = useDispatch()
  const history = useHistory()

  const { modalVisibility, nextScreen, description, callbackOnOK } =
    useSelector((state: RootState) => state.modal)

  const toggleModalState = useCallback(() => {
    dispatch(closeModal())
    nextScreen && history.push(nextScreen)
    callbackOnOK && callbackOnOK()
  }, [modalVisibility, nextScreen, history])

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
          <Title>Done</Title>
          <Description>
            {description ? (
              <>{description}</>
            ) : (
              <>Reset Code/Link has been sent on your WhatsApp and Email.</>
            )}
          </Description>
          <DoneButton type="button" onClick={toggleModalState}>
            OK
          </DoneButton>
        </ModalContentContainer>
      </ModalContainer>
    </>
  )
})

export default SuccessModal
