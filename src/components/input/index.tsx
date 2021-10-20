/* eslint-disable no-unused-vars */
import {
  ChangeEvent,
  forwardRef,
  memo,
  MutableRefObject,
  useCallback,
  useRef,
  useState
} from 'react'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
// import debounce from 'lodash/debounce'
import {
  faEye,
  faEyeSlash
} from '@fortawesome/pro-light-svg-icons'
import {
  InputContainer,
  InputField,
  Label,
  PhoneInputField,
  Prefix,
  Suffix
} from './index.styled'

interface InputProps {
  label?: string
  value?: string
  name?: string
  prefix?: IconProp
  suffix?: IconProp
  typePassword?: boolean
  phoneField?: boolean
  // eslint-disable-next-line no-unused-vars
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

const Input = memo(
  forwardRef<HTMLInputElement, InputProps>(
    (
      {
        label,
        value = '',
        name,
        handleChange,
        typePassword = false,
        prefix,
        suffix,
        phoneField,
        ...props
      },
      inputRef
    ) => {
      const localRef = useRef<HTMLInputElement>(null)
      const [showPassword, setShowPassword] = useState(false)
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
      const handleEyeChange = useCallback(() => {
        setShowPassword((prevState) => !prevState)
      }, [showPassword])

      return (
        <InputContainer hasValue={!!value}>
          {!phoneField && (
            <InputField
              {...props}
              name={name}
              value={value}
              type={
                typePassword && !showPassword
                  ? 'password'
                  : 'text'
              }
              ref={(_ref) => {
                if (_ref) {
                  (
                    localRef as MutableRefObject<HTMLInputElement>
                  ).current = _ref
                }
                if (inputRef) {
                  if (typeof inputRef === 'function') { inputRef(_ref) }
                  if (typeof inputRef === 'object') {
                    // eslint-disable-next-line no-param-reassign
                    inputRef.current = _ref
                  }
                }
              }}
              onChange={handleChange}
            />
          )}
          {
            phoneField && (
              <PhoneInputField placeholder="" country="pk" value={value} />
            )
          }
          {prefix && <Prefix icon={prefix} phoneField={!!phoneField} />}
          <Label hasValue={!!value} phoneField={!!phoneField}>{label}</Label>
          {typePassword && (
            <Suffix
              onClick={handleEyeChange}
              icon={!showPassword ? faEye : faEyeSlash}
            />
          )}
          {!typePassword && suffix && (
            <Suffix icon={suffix} />
          )}
        </InputContainer>
      )
    }
  )
)

export default Input
