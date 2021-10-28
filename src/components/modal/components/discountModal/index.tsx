import { memo } from 'react'
import { Modal } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { ModalContentContainer, DoneButton } from './index.styled'
import { RootState } from '../../../../redux/store'
import { openModal } from '../../../../redux/features/modalSlice'

const DiscountModal = memo(() => {
  const dispatch = useDispatch()

  const { modalVisibility } = useSelector((state: RootState) => state.modal)
  return (
    <Modal footer={null} closable={false} visible={modalVisibility}>
      {' '}
      <ModalContentContainer>
        discount modal
        <DoneButton
          type="button"
          onClick={() => dispatch(openModal({ modalType: 'discount' }))}
        >
          OK
        </DoneButton>
      </ModalContentContainer>
    </Modal>
  )
})

export default DiscountModal
