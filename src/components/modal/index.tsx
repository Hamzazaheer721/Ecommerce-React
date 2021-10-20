import { useState, memo, FC } from 'react'
import { Modal, Button } from 'antd'
import 'antd/dist/antd.css'
import { faCheck } from '@fortawesome/pro-light-svg-icons'
import {
  NotificationIcon,
  ModalContentContainer,
  Title,
  DoneButton
} from './index.styled'

interface IModalProps {
  openModal: boolean
  closeModal: () => void
}

const CustomizeModal: FC<IModalProps> = memo(
  ({ openModal, closeModal }: IModalProps) => {
    // eslint-disable-next-line operator-linebreak
    const [, setIsModalVisible] = useState(false)

    const showModal = () => {
      setIsModalVisible(openModal)
    }

    return (
      <>
        <Button type="primary" onClick={showModal}>
          Open Modal
        </Button>
        <Modal
          footer={null}
          closable={false}
          visible={openModal}
          onOk={closeModal}
        >
          <ModalContentContainer>
            <NotificationIcon icon={faCheck} />
            <Title>Done</Title>
            <p>
              Reset Code/Link has been sent on your WhatsApp
              and Email.
            </p>
            <DoneButton type="button" onClick={closeModal}>
              OK
            </DoneButton>
          </ModalContentContainer>
        </Modal>
      </>
    )
  }
)
export default CustomizeModal
