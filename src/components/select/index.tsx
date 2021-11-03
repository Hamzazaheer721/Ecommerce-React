import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FC, memo } from 'react'
import { SelectContainer, Label, Prefix, SelectField } from './index.styled'

interface ISelectProps {
  handleChange?: (
    // eslint-disable-next-line no-unused-vars
    value: any,
    // eslint-disable-next-line no-unused-vars
    option: any
  ) => void
  prefix?: IconProp
  label?: string
}
const Select: FC<ISelectProps> = memo(({ prefix, handleChange, label }) => {
  const { Option } = SelectField
  return (
    <SelectContainer>
      <SelectField defaultValue="Amount" onChange={handleChange}>
        <Option value=""> Amount</Option>
      </SelectField>
      {prefix && <Prefix icon={prefix} />}
      <Label>{label}</Label>
    </SelectContainer>
  )
})

export default Select
