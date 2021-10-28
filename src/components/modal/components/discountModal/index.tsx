import { memo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { faMoneyBill } from '@fortawesome/pro-light-svg-icons'
import { Select } from 'antd'

import useForm from './useForm'

import {
  ModalContentContainer,
  DoneButton,
  CustomizeModal,
  Title,
  InputContainer,
  SelectField,
  Label,
  Prefix,
  ButtonContainer,
  InputField,
  Suffix
} from './index.styled'
import { RootState } from '../../../../redux/store'
import { openModal } from '../../../../redux/features/modalSlice'

const DiscountModal = memo(() => {
  const dispatch = useDispatch()
  const { Option } = Select

  const { modalVisibility } = useSelector((state: RootState) => state.modal)

  const { handleChange, discountType } = useForm()
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
          <SelectField defaultValue="Amount" onChange={handleChange}>
            <Option value="Amount">Amount</Option>
            <Option value="Percentage">Percentage</Option>
          </SelectField>

          <Prefix icon={faMoneyBill} />
          <Label>Type</Label>
        </InputContainer>
        <InputContainer>
          <InputField />

          <Prefix icon={faMoneyBill} />
          <Label>Value</Label>
          <Suffix>{discountType === 'Percentage' ? 'PER' : 'PKR'}</Suffix>
        </InputContainer>
        <ButtonContainer>
          <DoneButton
            type="button"
            onClick={() => dispatch(openModal({ modalType: 'discount' }))}
          >
            OK
          </DoneButton>
        </ButtonContainer>
      </ModalContentContainer>
    </CustomizeModal>
  )
})

export default DiscountModal
