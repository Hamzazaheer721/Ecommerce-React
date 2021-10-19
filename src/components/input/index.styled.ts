/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable operator-linebreak */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

export const Label = styled.p<{ hasValue: boolean }>`
  color: #c5c5c5;
  font-size: 1rem;
  position: absolute;
  opacity: 0.6;
  left: 3rem;
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
`

export const InputField = styled.input`
  outline: none;
  border: none;
  width: 100%;
  height: 100%;
  padding: 14px;
  background-color: transparent;
  padding-left: 3rem;
  :focus ~ ${Label} {
    top: 0;
    left: 0.8rem;
    font-size: 0.8rem;
    background: linear-gradient(180deg, #f2f4ff 50%, white 50%);
    opacity: 1;
    color: ${(props) => props.theme.color.lightGray};
  }
`

export const InputContainer = styled.div<{ hasValue: boolean }>`
  height: 100%;
  width: 100%;
  position: relative;
  border: ${(props) => props.theme.borderColor.gray};
  background-color: ${(props) => props.theme.color.white};
  border-radius: 8px;
  z-index: 1;
  transition: 0.4s;

  ${({ hasValue }) => hasValue && `
    border: 1px solid black;
  `}

  &:focus,
  &:hover {
    border: ${(props) => props.theme.borderColor.black};
  }

`

export const Prefix = styled(FontAwesomeIcon)`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.4rem;
`

export const Suffix = styled(FontAwesomeIcon)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.4rem;
  right: 1rem;
  width: 12px;
`
