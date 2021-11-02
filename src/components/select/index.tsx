import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FC, memo } from 'react'
import { InputContainer, Label, Prefix, SelectField } from './index.styled'

interface ISelectProps {
  handleChange?: (
    // eslint-disable-next-line no-unused-vars
    value: any,
    // eslint-disable-next-line no-unused-vars
    option: any
  ) => void
  prefix?: IconProp
}
const Select: FC<ISelectProps> = memo(({ prefix, handleChange }) => (
  <InputContainer>
    <SelectField defaultValue="Amount" onChange={handleChange} />
    {prefix && <Prefix icon={prefix} />}
    <Label>Type</Label>
  </InputContainer>
))

export default Select
