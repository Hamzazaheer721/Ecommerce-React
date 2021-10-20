import { useState, memo } from 'react'
import { Modal, Button } from 'antd'
import 'antd/dist/antd.css'
import { faCheck } from '@fortawesome/pro-light-svg-icons'
import {
  NotificationIcon,
  ModalContentContainer,
  Title
} from './index.styled'

const CustomizeModal = memo(() => {
  // eslint-disable-next-line operator-linebreak
  const [isModalVisible, setIsModalVisible] =
    useState(false)

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleOk = () => {
    setIsModalVisible(false)
  }

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        footer={null}
        closable={false}
        visible={isModalVisible}
        onOk={handleOk}
      >
        <ModalContentContainer>
          <NotificationIcon icon={faCheck} />
          <Title>Done</Title>
          <p>
            Reset Code/Link has been sent on your WhatsApp
            and Email.
          </p>
          <button type="button" onClick={handleOk}>
            Some contents...
          </button>
        </ModalContentContainer>
      </Modal>
    </>
  )
})
export default CustomizeModal
