/* eslint-disable no-unused-vars */
import {
  ChangeEvent,
  forwardRef,
  memo,
  MutableRefObject,
  useCallback,
  useLayoutEffect,
  useRef,
  useState
} from 'react'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faEye, faEyeSlash } from '@fortawesome/pro-light-svg-icons'
import debounce from 'lodash/debounce'
import { DebouncedFunc } from 'lodash'
import {
  InputContainer,
  InputField,
  Label,
  PhoneInputField,
  Prefix,
  Suffix,
  SuffixText,
  TextAreaField,
  SecondSuffix
} from './index.styled'

interface CountryData {
  name: string
  dialCode: string
  countryCode: string
  format: string
}

interface InputProps {
  label: string
  value: string
  name: string
  prefix: IconProp
  suffix: IconProp
  typePassword: boolean
  phonefield: boolean
  readOnly: boolean
  secondSuffix: IconProp
  // eslint-disable-next-line no-unused-vars
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
  locationHandleChange: (e: ChangeEvent<HTMLInputElement>) => void

  handlePhoneChange?: (
    value: string,
    data: {} | CountryData,
    event: ChangeEvent<HTMLInputElement>,
    formattedValue: string
  ) => void
  store: boolean
  suffixText: string
  textArea: boolean
  autoComplete?: boolean
  debounceValue?: number
  setInitialValue?: boolean
}

const Input = memo(
  forwardRef<HTMLInputElement | null, Partial<InputProps>>(
    (
      {
        label,
        value = '',
        name,
        handleChange,
        typePassword = false,
        prefix,
        suffix,
        phonefield,
        readOnly,
        secondSuffix,
        handlePhoneChange,
        store,
        suffixText,
        textArea,
        autoComplete,
        debounceValue,
        setInitialValue,
        ...props
      },
      inputRef
    ) => {
      // const [_value, setValue] = useState<typeof value>(value)

      // useEffect(() => {
      //   setValue(value)
      // }, [value])

      // const handleInputDebounce = debounce(
      //   (e: ChangeEvent<HTMLInputElement>) => {
      //     if (handleChange) handleChange(e)
      //   },
      //   debounceValue
      // )

      // const handleInputChange = useCallback(
      //   (e: ChangeEvent<HTMLInputElement>) => {
      //     setValue(e.target.value)
      //     handleInputDebounce(e)
      //   },
      //   [_value]
      // )
      // console.error(handleInputChange)

      const localRef = useRef<HTMLInputElement>(null)
      const [showPassword, setShowPassword] = useState(false)
      const debouncedHandleChange =
        useRef<DebouncedFunc<(e: ChangeEvent<HTMLInputElement>) => void>>()

      useLayoutEffect(() => {
        if (handleChange && !debouncedHandleChange.current) {
          debouncedHandleChange.current = debounce(handleChange, debounceValue)
        }
      }, [])

      useLayoutEffect(() => {
        if (setInitialValue && localRef.current) {
          localRef.current.value = value
        }
      }, [value])

      const handleEyeChange = useCallback(() => {
        setShowPassword((prevState) => !prevState)
      }, [showPassword])

      return (
        <InputContainer hasValue={!!value} store={!!store}>
          {!phonefield && !textArea && (
            <InputField
              readOnly={readOnly}
              {...props}
              name={name}
              // value={debounceValue ? _value : value}
              placeholder=""
              type={typePassword && !showPassword ? 'password' : 'text'}
              ref={(element) => {
                if (element) {
                  // eslint-disable-next-line no-extra-semi
                  ;(localRef as MutableRefObject<HTMLInputElement>).current =
                    element
                }
                if (inputRef) {
                  if (typeof inputRef === 'function') {
                    inputRef(element)
                  }
                  if (typeof inputRef === 'object') {
                    // eslint-disable-next-line no-param-reassign
                    inputRef.current = element
                  }
                }
              }}
              // onChange={debounceValue ? handleInputChange : handleChange}
              onChange={
                debounceValue ? debouncedHandleChange.current : handleChange
              }
            />
          )}
          {textArea && (
            <TextAreaField
              readOnly={!!readOnly}
              {...props}
              name={name}
              value={value}
              rows={4}
              autoSize={{ minRows: 4, maxRows: 4 }}
            />
          )}
          {phonefield && (
            <PhoneInputField
              placeholder=""
              country="pk"
              value={value}
              onChange={handlePhoneChange}
            />
          )}

          {prefix && (
            <Prefix
              icon={prefix}
              $phonefield={!!phonefield}
              $textArea={!!textArea}
            />
          )}
          <Label
            hasValue={!!value}
            $phonefield={!!phonefield}
            $textArea={!!textArea}
          >
            {label}
          </Label>
          {typePassword && (
            <Suffix
              onClick={handleEyeChange}
              icon={!showPassword ? faEye : faEyeSlash}
            />
          )}
          {!typePassword && suffix && (
            <Suffix icon={suffix} $secondSuffix={!!secondSuffix} />
          )}
          {!typePassword && secondSuffix && (
            <SecondSuffix icon={secondSuffix} />
          )}
          {!typePassword && suffixText && <SuffixText>{suffixText}</SuffixText>}
        </InputContainer>
      )
    }
  )
)

export default Input
