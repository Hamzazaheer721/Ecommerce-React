/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable operator-linebreak */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import PhoneInput from 'react-phone-input-2';
import { device } from '../../styles/devices'
import 'react-phone-input-2/lib/style.css';

export const Label = styled.p<{ hasValue: boolean, phoneField?: boolean }>`
  color: #c5c5c5;
  font-size: 1rem;
  position: absolute;
  opacity: 0.6;
  left: ${({ phoneField }) => (phoneField ? '6.5rem' : '3rem')};
  pointer-events: none;
  transition: all 0.22s;
  top: 50%;
  transform: translateY(-50%);
  display: block;
  transition: top 200ms ease-in, left 200ms ease-in, font-size 200ms ease-in;
  padding: 0 7px;
  ${({ hasValue }) =>
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
    font-size: 12px;
    left: ${({ phoneField }) => (phoneField ? '4.8rem' : '2.2rem')};
    ${({ hasValue }) =>
    hasValue &&
    `
      left: 0.5rem;
      font-size: 0.8rem;
   `}
  }
  @media ${device.tiny} {
    font-size: 12px;
    left: ${({ phoneField }) => (phoneField ? '4.5rem' : '2.2rem')};
    ${({ hasValue }) =>
    hasValue &&
    `
      left: 0.5rem;
      font-size: 0.8rem;
   `}
  }
`
export const PhoneInputField = styled(PhoneInput)`

`;

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

export const InputContainer = styled.div<{ hasValue: boolean }>`
  height: 100%;
  width: 100%;
  position: relative;
  border: ${(props) => props.theme.borderColor.gray};
  background-color: ${(props) => props.theme.color.white};
  border-radius: 8px;
  transition: 0.4s;
  padding: 14px;

  input:-webkit-autofill,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
    /* -webkit-text-fill-color: #0b233b; */
  }

  ${({ hasValue }) =>
    hasValue &&
    `
    border: 1px solid black;
  `}

  .react-tel-form, .form-control {
    border: none;
    height:100%;
    width: 100%;
    background-color: transparent;
    display:block;
  }
  .flag-dropdown{
    background: transparent;
    border: none;
  }
  .selected-flag{
    padding-left: 2rem;
  }
  .form-control{
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
  &:focus-within{
    p{
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
  }

  @media ${device.tiny} {
    font-size: 1rem;
  }
  
`

export const Prefix = styled(FontAwesomeIcon)<{phoneField? : boolean}>`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.4rem;
  ${({ phoneField }) => phoneField && `
    z-index: 2;
  `}
  @media ${device.mobile} {
    font-size: 1rem;
  }

  @media ${device.tiny} {
    font-size: 1rem;
  }
`

export const Suffix = styled(FontAwesomeIcon)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.4rem;
  right: 1rem;
  width: 12px;

  @media ${device.mobile} {
    font-size: 1rem;
  }

  @media ${device.tiny} {
    font-size: 1rem;
  }
`
