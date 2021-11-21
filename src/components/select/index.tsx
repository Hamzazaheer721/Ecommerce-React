/* eslint-disable array-callback-return */
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
  options?: any
}
const Select: FC<ISelectProps> = memo(
  ({ prefix, handleChange, label, options }) => {
    const { Option } = SelectField
    return (
      <SelectContainer>
        <SelectField onChange={handleChange}>
          {options?.map((option: any) => (
            <Option key={option.value} value={option.value}>
              {option.label}
            </Option>
          ))}
        </SelectField>
        {prefix && <Prefix icon={prefix} />}
        <Label>{label}</Label>
      </SelectContainer>
    )
  }
)

export default Select
