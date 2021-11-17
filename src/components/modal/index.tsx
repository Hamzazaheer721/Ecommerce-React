import { memo, FC } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import SuccessModal from './components/successModal'
import DiscountModal from './components/discountModal'
import OrderModal from './components/orderModal'
import AlertModal from './components/alertModal'

const ModalView: FC = memo(() => {
  const { modalType } = useSelector((state: RootState) => state.modal)

  switch (modalType) {
    case 'success':
      return <SuccessModal />
    case 'discount':
      return <DiscountModal />
    case 'order':
      return <OrderModal />
    case 'alert':
      return <AlertModal />
    default:
      return null
  }
})
export default ModalView
