import { Modal } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { ModalContentContainer } from './index.styled'
import { RootState } from '../../../../redux/store'
import { toggleModalStates } from '../../../../redux/features/modalSlice'

const CustomizeDiscountModal = () => {
  const dispatch = useDispatch()

  const { modalVisibility } = useSelector((state: RootState) => state.modal)
  return (
    <Modal footer={null} closable={false} visible={modalVisibility}>
      {' '}
      <ModalContentContainer
        onClick={() => dispatch(toggleModalStates({ modalType: 'discount' }))}
      >
        discount modal
      </ModalContentContainer>
    </Modal>
  )
}

export default CustomizeDiscountModal
