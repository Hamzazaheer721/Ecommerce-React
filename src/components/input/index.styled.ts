import styled from 'styled-components'
import { Input } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PhoneInput from 'react-phone-input-2'
import { device } from '../../styles/devices'
import 'react-phone-input-2/lib/style.css'

const { TextArea } = Input

export const Label = styled.p<{
  hasValue: boolean
  $phonefield?: boolean
  $textArea?: boolean
}>`
  color: #c5c5c5;
  font-size: 1rem;
  position: absolute;
  opacity: 0.6;
  left: ${({ $phonefield }) => ($phonefield ? '6.5rem' : '3rem')};
  pointer-events: none;
  transition: all 0.22s;
  top: ${({ $textArea }) => ($textArea ? '1.8rem' : '50%')};
  transform: translateY(-50%);
  display: block;
  transition: top 200ms ease-in, left 200ms ease-in, font-size 200ms ease-in;
  padding: 0 7px;
  ${({ hasValue }) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    hasValue &&
    `
      top: 0;
      left: 0.8rem;
      font-size: 0.8rem;
      background: linear-gradient(180deg, #F2F4FF 50%, white 50%);
      opacity: 1;
      color: #999999;
   `}

  @media ${device.mobile} {
    font-size: 14px;
    left: ${({ $phonefield }) => ($phonefield ? '5.6rem' : '2.2rem')};
    ${({ hasValue }) =>
      // eslint-disable-next-line implicit-arrow-linebreak
      hasValue &&
      `
      left: 0.5rem;
      font-size: 0.8rem;
   `}
  }
  @media ${device.tiny} {
    font-size: 11.5px;
    left: ${({ $phonefield }) => ($phonefield ? '5.3rem' : '2.2rem')};
    ${({ hasValue }) =>
      // eslint-disable-next-line implicit-arrow-linebreak
      hasValue &&
      `
      left: 0.5rem;
      font-size: 0.8rem;
   `}
  }
`
export const PhoneInputField = styled(PhoneInput)`
  :focus ~ ${Label} {
    top: 0;
    left: 0.8rem;
    font-size: 0.8rem;
    background: linear-gradient(180deg, #f2f4ff 50%, white 50%);
    opacity: 1;
    color: ${(props) => props.theme.color.lightGray};
  }

  @media ${device.mobile} {
    padding-left: 2.5rem;
    :focus ~ ${Label} {
      left: 0.5rem;
      font-size: 0.8rem;
    }
  }

  @media ${device.tiny} {
    padding-left: 2.5rem;
    :focus ~ ${Label} {
      left: 0.5rem;
      font-size: 0.8rem;
    }
  }
`

export const TextAreaField = styled(TextArea)`
  outline: none;
  border: none;
  width: 100%;
  height: 100%;
  background-color: transparent;
  padding-left: 3rem;
  padding-right: 3rem;

  :focus ~ ${Label} {
    top: 0;
    left: 0.8rem;
    font-size: 0.8rem;
    background: linear-gradient(180deg, #f2f4ff 50%, white 50%);
    opacity: 1;
    color: ${(props) => props.theme.color.lightGray};
  }

  @media ${device.mobile} {
    padding-left: 2.5rem;
    :focus ~ ${Label} {
      left: 0.5rem;
      font-size: 0.8rem;
    }
  }

  @media ${device.tiny} {
    padding-left: 2.5rem;
    :focus ~ ${Label} {
      left: 0.5rem;
      font-size: 0.8rem;
    }
  }
`
export const InputField = styled.input`
  outline: none;
  border: none;
  width: 100%;
  height: 100%;
  background-color: transparent;
  padding-left: 3rem;
  padding-right: 3rem;

  :focus ~ ${Label} {
    top: 0;
    left: 0.8rem;
    font-size: 0.8rem;
    background: linear-gradient(180deg, #f2f4ff 50%, white 50%);
    opacity: 1;
    color: ${(props) => props.theme.color.lightGray};
  }

  @media ${device.mobile} {
    padding-left: 2.5rem;
    :focus ~ ${Label} {
      left: 0.5rem;
      font-size: 0.8rem;
    }
  }

  @media ${device.tiny} {
    padding-left: 2.5rem;
    :focus ~ ${Label} {
      left: 0.5rem;
      font-size: 0.8rem;
    }
  }
`

export const InputContainer = styled.div<{
  hasValue: boolean
  store?: boolean
}>`
  height: 100%;
  width: 100%;
  position: relative;
  border: ${(props) => props.theme.borderColor.gray};
  background-color: ${(props) => props.theme.color.white};
  border-radius: 8px;
  transition: 0.4s;
  padding: 13px;

  input:-webkit-autofill,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
    /* -webkit-text-fill-color: #0b233b; */
  }

  /* Used for positioning flag when it is used outside */
  ${({ store }) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    store &&
    `
    .react-tel-input{
      top: 3px;
      @media ${device.tiny}{
        top: 0px
      }
      @media ${device.mobile}{
        top: 0px
      }
    }  
  `}

  ${({ hasValue }) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    hasValue &&
    `
    border: 1px solid black;
  `}

  .ant-input:focus, 
  .ant-input-focused {
    border: none;
    outline: none;
    box-shadow: none;
  }

  .react-tel-form,
  .form-control {
    border: none;
    height: 100%;
    width: 100%;
    background-color: transparent;
    display: block;
  }
  .flag-dropdown {
    background: transparent;
    border: none;
  }
  .selected-flag {
    padding-left: 2rem;
  }
  .form-control {
    margin-left: 1rem;
  }
  .country-list::-webkit-scrollbar {
    width: 8px;
  }

  /* Track */
  .country-list::-scrollbar-track {
    background: transparent;
  }

  /* Handle */
  .country-list::-webkit-scrollbar-thumb {
    background: #686868;
    border-radius: 8px;
    min-height: 10px;
  }

  /* Handle on hover */
  .country-list::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  &:focus,
  &:focus-within,
  &:active,
  &:hover {
    border: ${(props) => props.theme.borderColor.black};
  }
  &:focus-within {
    p {
      top: 0;
      left: 0.8rem;
      font-size: 0.8rem;
      background: linear-gradient(180deg, #f2f4ff 50%, white 50%);
      opacity: 1;
      color: ${(props) => props.theme.color.lightGray};
    }
  }

  @media ${device.mobile} {
    font-size: 1rem;
    .selected-flag {
      padding-left: 1.5rem;
    }
    .form-control {
      margin-left: 0.3rem;
    }
  }

  @media ${device.tiny} {
    font-size: 1rem;
    .selected-flag {
      padding-left: 1.2rem;
    }
    .form-control {
      margin-left: 0;
    }
  }
`

export const Prefix = styled(FontAwesomeIcon)<{
  $phonefield?: boolean
  $textArea?: boolean
}>`
  position: absolute;
  left: 1rem;
  top: ${({ $textArea }) => ($textArea ? '1.8rem' : '50%')};
  transform: translateY(-50%);
  font-size: 1.2rem;
  ${({ $phonefield }) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    $phonefield &&
    `
    z-index: 2;
  `}
  @media ${device.mobile} {
    font-size: 1rem;
  }

  @media ${device.tiny} {
    font-size: 1rem;
  }
`

export const Suffix = styled(FontAwesomeIcon)<{ $secondSuffix?: boolean }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.4rem;
  right: ${({ $secondSuffix }) => ($secondSuffix ? '3rem' : '1rem')};
  width: 12px;
  cursor: pointer;
  @media ${device.mobile} {
    font-size: 1rem;
    right: ${({ $secondSuffix }) => ($secondSuffix ? '2.5rem' : '1rem')};
  }

  @media ${device.tiny} {
    font-size: 1rem;
    right: ${({ $secondSuffix }) => ($secondSuffix ? '2.5rem' : '1rem')};
  }
`
export const SecondSuffix = styled(FontAwesomeIcon)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.6rem;
  right: 1rem;
  width: 12px;
  color: ${(props) => props.theme.color.primary};
  cursor: pointer;
  @media ${device.mobile} {
    font-size: 1rem;
  }

  @media ${device.tiny} {
    font-size: 1rem;
  }
`
export const SuffixText = styled.div`
  position: absolute;
  top: 50%;
  right: 7.2rem;
  transform: translateY(-50%);
  font-size: 0.9rem;
  color: ${(props) => props.theme.color.black};
  font-weight: bold;
  width: 12px;

  @media ${device.mobile} {
    font-size: 0.72rem;
    right: 5.8rem;
  }

  @media ${device.tiny} {
    font-size: 0.72rem;
    right: 5.6rem;
  }
`
