/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable no-param-reassign */
import { memo, FC } from 'react'
import { Modal } from 'antd'
import 'antd/dist/antd.css'
import { faCheck } from '@fortawesome/pro-light-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { toggleModalStates } from '../../../../redux/features/modalSlice'
import { RootState } from '../../../../redux/store'
import {
  NotificationIcon,
  ModalContentContainer,
  Title,
  DoneButton,
  Description
} from './index.styled'

interface IModapProps {
  description?: string
}

const CustomizeModal: FC<IModapProps> = memo(({ description }: IModapProps) => {
  const dispatch = useDispatch()
  const { modalVisibility } = useSelector((state: RootState) => state.modal)
  return (
    <>
      <Modal footer={null} closable={false} visible={modalVisibility}>
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
          <DoneButton
            type="button"
            onClick={() =>
              dispatch(toggleModalStates({ modalType: 'success' }))
            }
          >
            OK
          </DoneButton>
        </ModalContentContainer>
      </Modal>
    </>
  )
})
export default CustomizeModal
