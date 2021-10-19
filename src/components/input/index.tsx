/* eslint-disable no-unused-vars */
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
  ChangeEvent,
  forwardRef, memo, MutableRefObject, useRef
} from 'react';
// import debounce from 'lodash/debounce'
import { InputContainer, InputField, Label, Prefix, Suffix } from './index.styled';

interface InputProps {
  label?: string
  value?: string
  name?: string
  prefix?: IconProp
  suffix?: IconProp
  type?: 'password'
  // eslint-disable-next-line no-unused-vars
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

const Input = memo(forwardRef<HTMLInputElement, InputProps>(({
  label, value = '', name, handleChange, type, prefix, suffix, ...props
}, inputRef) => {
  const localRef = useRef<HTMLInputElement>(null);
  // const [_value, setValue] = useState<typeof value>(value);

  // useEffect(() => {
  //   // setValue(value)
  // }, [value])

  // add debounce here later
  // const handleInputDebounce = (e: ChangeEvent<HTMLInputElement>) => {
  //   if (handleChange) handleChange(e);
  // }

  // const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
  //   setValue(e.target.value)
  //   handleInputDebounce(e);
  // }, [_value])
  return (
    <InputContainer>
      <InputField
        {...props}
        name={name}
        value={value}
        type={type === 'password' ? 'password' : 'text'}
        ref={(_ref) => {
          if (_ref) (localRef as MutableRefObject<HTMLInputElement>).current = _ref;
          if (inputRef) {
            if (typeof inputRef === 'function') inputRef(_ref)
            if (typeof inputRef === 'object') {
              // eslint-disable-next-line no-param-reassign
              inputRef.current = _ref;
            }
          }
        }}
        onChange={handleChange}
      />
      {prefix && (
        <Prefix icon={prefix} />
      )}
      <Label hasValue={!!value}>
        {label}
      </Label>
      {
        suffix && (
          <Suffix icon={suffix} />
        )
      }
    </InputContainer>
  )
}));

export default Input;
