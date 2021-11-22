import styled from 'styled-components'
import { device } from '../../../../styles/devices'

export const FieldsSectionContainer = styled.div`
  flex: 1 1 75%;
  display: flex;
  flex-direction: column;
  padding: 10px 20px 0 20px;
  gap: 20px;
`

export const InputsContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
  flex-wrap: wrap;

  @media ${device.mobile} {
    flex-direction: column;
  }

  @media ${device.tiny} {
    flex-direction: column;
  }
`
export const SingleInputContainer = styled.div`
  border: none;
  outline: none;
  width: 100%;
`
export const SingleInputWrapper = styled.div`
  width: 100%;
`
export const InputContainer = styled.div<{ single?: boolean }>`
  border: none;
  outline: none;
  flex: 1 1 45%;

  @media ${device.tablet} {
    flex: 1 1 100%;
  }

  @media ${device.mobile} {
    flex: 1 1 100%;
  }

  @media ${device.tiny} {
    flex: 1 1 100%;
  }
`
export const CheckboxContainer = styled.div`
  display: flex;
`

export const CustomCheckBox = styled.input`
  margin: 2.5px;
  box-shadow: 0px 3px 6px #00000029;
  border: 0.5px solid #4e98e2;
  border-radius: 3px;
`
export const CheckboxPlaceholder = styled.p`
  color: black;
  padding-left: 6px;
  font-size: 12px;
  span {
    color: ${(props) => props.theme.color.primary};
    cursor: pointer;
  }
`
export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 45%;
`
