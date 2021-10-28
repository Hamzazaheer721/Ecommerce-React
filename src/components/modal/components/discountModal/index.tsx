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
  ButtonContainer,
  InputField,
  Suffix
} from './index.styled'
import { RootState } from '../../../../redux/store'
import { toggleModalStates } from '../../../../redux/features/modalSlice'
import useForm from './useForm'

const { Option } = Select

// function handleChange(value: any) {
//   console.log(`selected ${value}`)
// }
const CustomizeDiscountModal = () => {
  const dispatch = useDispatch()

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
