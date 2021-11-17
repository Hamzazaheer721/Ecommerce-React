import { CheckboxChangeEvent } from 'antd/lib/checkbox'
import { FC, memo } from 'react'
import { CheckboxContainer, CustomCheckBox } from './index.styled'

interface ICheckboxInterface {
  // eslint-disable-next-line no-unused-vars
  handleChange: (e: CheckboxChangeEvent) => void
  name: string
  label: string
}
const Checkbox: FC<ICheckboxInterface> = memo(
  ({ handleChange, label, name }) => (
    <CheckboxContainer>
      <CustomCheckBox name={name} onChange={handleChange}>
        {label}
      </CustomCheckBox>
    </CheckboxContainer>
  )
)

export default Checkbox
