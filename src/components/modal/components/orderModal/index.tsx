/* eslint-disable no-console */
import { Modal } from 'antd'
import {
  faPause,
  faClipboardCheck,
  faBoxOpen
} from '@fortawesome/pro-light-svg-icons'
import { useSelector } from 'react-redux'
import {
  ModalContentContainer,
  Title,
  Icon,
  Status,
  BorderLine,
  PendingContainer,
  ConfirmedContainer,
  ProcessingContainer
} from './index.styled'
import { RootState } from '../../../../redux/store'
// import { IOrderModalStatusType } from './types'
// import { toggleModalStates } from '../../../../redux/features/modalSlice'

const OrderModal = () => {
  // const dispatch = useDispatch()

  const { modalVisibility } = useSelector((state: RootState) => state.modal)

  const statusHandler = (status: string) => {
    // eslint-disable-next-line prefer-template
    console.log('status : ' + status)
  }

  return (
    <Modal footer={null} closable={false} visible={modalVisibility}>
      <ModalContentContainer>
        {/* // onClick={() => dispatch(toggleModalStates({ modalType: 'order' }))} */}
        <Title>Select the order status</Title>
        <PendingContainer
          colors="red"
          onClick={() => statusHandler('pendding')}
        >
          <Icon icon={faPause} />
          <Status>Pending</Status>
        </PendingContainer>
        <BorderLine />
        <ConfirmedContainer
          colors="red"
          onClick={() => statusHandler('pendding')}
        >
          <Icon icon={faClipboardCheck} />
          <Status>Confirmed</Status>
        </ConfirmedContainer>
        <BorderLine />

        <ProcessingContainer
          colors="red"
          onClick={() => statusHandler('pendding')}
        >
          <Icon icon={faBoxOpen} />
          <Status>Processing</Status>
        </ProcessingContainer>
        <BorderLine />
      </ModalContentContainer>
    </Modal>
  )
}

export default OrderModal
