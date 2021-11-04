import styled from 'styled-components'

export const FieldsSectionContainer = styled.div`
  flex: 1 1 75%;
  display: flex;
  flex-direction: column;
  padding: 10px 20px 0 20px;
  gap: 20px;
`
export const SingleInputContainer = styled.div`
  border: none;
  outline: none;
  width: 100%;
`

export const InputsContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
  flex-wrap: wrap;
`

export const InputContainer = styled.div<{ single?: boolean }>`
  border: none;
  outline: none;
  flex: 1 1 45%;
`
export const CheckboxContainer = styled.div`
  display: flex;
  align-items: baseline;
`

export const CustomCheckBox = styled.input`
  margin: 0;
  box-shadow: 0px 3px 6px #00000029;
  border: 0.5px solid #4e98e2;
  border-radius: 3px;
`
export const CheckboxPlaceholder = styled.p`
  color: #606060;
  text-align: left;
  letter-spacing: 0px;
  padding-left: 6px;
  padding-top: 10px;
  font-size: 12px;
`
