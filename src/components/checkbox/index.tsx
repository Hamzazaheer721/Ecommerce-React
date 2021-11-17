import { CheckboxChangeEvent } from 'antd/lib/checkbox'
import { FC, memo } from 'react'
import { CheckboxContainer, CustomCheckBox } from './index.styled'

interface ICheckboxInterface {
  // eslint-disable-next-line no-unused-vars
  handleChange: (e: CheckboxChangeEvent) => void
  name: string
  label: string
  borderRadius?: string
  border?: string
}
const Checkbox: FC<ICheckboxInterface> = memo(
  ({ handleChange, label, name, border, borderRadius }) => (
    <CheckboxContainer>
      <CustomCheckBox
        name={name}
        onChange={handleChange}
        borderRadius={borderRadius}
        border={border}
      >
        {label}
      </CustomCheckBox>
    </CheckboxContainer>
  )
)

export default Checkbox
