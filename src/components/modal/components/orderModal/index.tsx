/* eslint-disable no-console */
import { useState, useContext, memo } from 'react'
import {
  faPause,
  faClipboardCheck,
  faBoxOpen,
  faBoxCheck,
  faTimes,
  faMoneyBillWave
} from '@fortawesome/pro-light-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { ThemeContext } from 'styled-components'

import {
  ModalContentContainer,
  Title,
  Icon,
  Status,
  BorderLine,
  PendingContainer,
  ConfirmedContainer,
  ProcessingContainer,
  CompletedContainer,
  CancelledContainer,
  RefundContainer,
  CustomizeModal,
  DoneButton
} from './index.styled'
import { toggleModalStates } from '../../../../redux/features/modalSlice'

import { RootState } from '../../../../redux/store'
import { IOrderModalStatusType } from './types'

const OrderModal = memo(() => {
  const dispatch = useDispatch()

  const { modalVisibility } = useSelector((state: RootState) => state.modal)

  const [buttonState, setButtonState] = useState<IOrderModalStatusType>({
    statusType: ''
  })

  const handleChange = (_val: IOrderModalStatusType) => {
    setButtonState(_val)
  }
  const theme = useContext(ThemeContext)

  return (
    <CustomizeModal
      width={300}
      footer={null}
      closable={false}
      visible={modalVisibility}
    >
      <ModalContentContainer>
        <Title>Select the order status</Title>
        <PendingContainer
          color="red"
          onClick={() => handleChange({ statusType: 'pending' })}
          isSelected={buttonState.statusType === 'pending'}
        >
          <Icon icon={faPause} />
          <Status>Pending</Status>
        </PendingContainer>
        <BorderLine />
        <ConfirmedContainer
          color={theme.modalColor.skyBlue}
          onClick={() => handleChange({ statusType: 'confirmed' })}
          isSelected={buttonState.statusType === 'confirmed'}
        >
          <Icon icon={faClipboardCheck} />
          <Status>Confirmed</Status>
        </ConfirmedContainer>
        <BorderLine />
        <ProcessingContainer
          color={theme.modalColor.purple}
          onClick={() => handleChange({ statusType: 'processing' })}
          isSelected={buttonState.statusType === 'processing'}
        >
          <Icon icon={faBoxOpen} />
          <Status>Processing</Status>
        </ProcessingContainer>
        <BorderLine />
        <CompletedContainer
          color={theme.modalColor.green}
          onClick={() => handleChange({ statusType: 'completed' })}
          isSelected={buttonState.statusType === 'completed'}
        >
          <Icon icon={faBoxCheck} />
          <Status>Completed</Status>
        </CompletedContainer>
        <BorderLine />
        <CancelledContainer
          color={theme.modalColor.orange}
          onClick={() => handleChange({ statusType: 'cancelled' })}
          isSelected={buttonState.statusType === 'cancelled'}
        >
          <Icon icon={faTimes} />
          <Status>Cancelled</Status>
        </CancelledContainer>
        <BorderLine />
        <RefundContainer
          color={theme.color.yellow}
          onClick={() => handleChange({ statusType: 'refund' })}
          isSelected={buttonState.statusType === 'refund'}
        >
          <Icon icon={faMoneyBillWave} />
          <Status>Refund</Status>
        </RefundContainer>
        <DoneButton
          type="button"
          onClick={() => dispatch(toggleModalStates({ modalType: 'order' }))}
        >
          OK
        </DoneButton>
      </ModalContentContainer>
    </CustomizeModal>
  )
})

export default OrderModal
