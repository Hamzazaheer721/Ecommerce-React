/* eslint-disable no-unused-vars */
import {
  ChangeEvent,
  forwardRef, memo, MutableRefObject, useRef
} from 'react';
// import debounce from 'lodash/debounce'
import { InputContainer, InputField, Label } from './index.styled';

interface InputProps {
  label?: string
  value?: string
  name?: string
  // eslint-disable-next-line no-unused-vars
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

const Input = memo(forwardRef<HTMLInputElement, InputProps>(({
  label, value = '', name, handleChange, ...props
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
        type="text"
      />
      <Label>{label}</Label>
    </InputContainer>
  )
}));

export default Input;
