import { useSelector, useDispatch } from 'react-redux'
import { faMoneyBill } from '@fortawesome/pro-light-svg-icons'
import { Select } from 'antd'

import {
  ModalContentContainer,
  DoneButton,
  CustomizeModal,
  Title,
  InputContainer,
  SelectField,
  Label,
  Prefix
} from './index.styled'
import { RootState } from '../../../../redux/store'
import { toggleModalStates } from '../../../../redux/features/modalSlice'

const { Option } = Select

const CustomizeDiscountModal = () => {
  const dispatch = useDispatch()

  const { modalVisibility } = useSelector((state: RootState) => state.modal)
  return (
    <CustomizeModal
      width={300}
      footer={null}
      closable={false}
      visible={modalVisibility}
    >
      <ModalContentContainer>
        <Title>Add Discount</Title>

        <InputContainer>
          <SelectField>
            <Option value="Amount">Amount</Option>
            <Option value="Discount">Discount</Option>
          </SelectField>

          <Prefix icon={faMoneyBill} />
          <Label>Type</Label>
        </InputContainer>

        <DoneButton
          type="button"
          onClick={() => dispatch(toggleModalStates({ modalType: 'discount' }))}
        >
          OK
        </DoneButton>
      </ModalContentContainer>
    </CustomizeModal>
  )
}

export default CustomizeDiscountModal
