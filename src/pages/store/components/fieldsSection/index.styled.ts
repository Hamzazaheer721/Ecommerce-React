import styled from 'styled-components';
import { device } from '../../../../styles/devices';

export const FieldsSectionContainer = styled.div`
  flex: 1 1 75%;
  background-color: bisque;
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
`
export const SingleInputContainer = styled.div`
  border:none;
  outline:none;
  width: 100%;
`
export const InputContainer = styled.div<{single? : boolean}>`
  border: none;
  outline: none;
  flex: 1 1 40%;
  @media ${device.mobile}{
    flex: 1 1 100%;
  }
  
`
