/* eslint-disable react/jsx-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
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
  Prefix,
  ButtonContainer
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
      centered
    >
      <ModalContentContainer>
        <Title>Add Discount</Title>

        <InputContainer>
          <SelectField defaultValue="Amount">
            <Option value="Amount">Amount</Option>
            <Option value="Discount">Discount</Option>
          </SelectField>

          <Prefix icon={faMoneyBill} />
          <Label>Type</Label>
        </InputContainer>
        <ButtonContainer>
          <DoneButton
            type="button"
            onClick={() =>
              dispatch(toggleModalStates({ modalType: 'discount' }))
            }
          >
            OK
          </DoneButton>
        </ButtonContainer>
      </ModalContentContainer>
    </CustomizeModal>
  )
}

export default CustomizeDiscountModal
