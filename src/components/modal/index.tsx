/* eslint-disable no-param-reassign */
import { memo, FC } from 'react'
import { Modal } from 'antd'
import 'antd/dist/antd.css'
import { faCheck } from '@fortawesome/pro-light-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { toggleModalStates } from '../../redux/features/modalSlice'
import { RootState } from '../../redux/store'
import {
  NotificationIcon,
  ModalContentContainer,
  Title,
  DoneButton
} from './index.styled'

const CustomizeModal: FC = memo(() => {
  const dispatch = useDispatch()
  const { modalVisibility } = useSelector((state: RootState) => state.modal)
  return (
    <>
      <Modal footer={null} closable={false} visible={modalVisibility}>
        <ModalContentContainer>
          <NotificationIcon icon={faCheck} />
          <Title>Done</Title>
          <p>Reset Code/Link has been sent on your WhatsApp and Email.</p>
          <DoneButton
            type="button"
            onClick={() => dispatch(toggleModalStates())}
          >
            OK
          </DoneButton>
        </ModalContentContainer>
      </Modal>
    </>
  )
})
export default CustomizeModal
