import styled from 'styled-components'
import { device } from '../../styles/devices'

export const Container = styled.div``

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
  margin-bottom: 17px;
  text-align: left;

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
export const ButtonContainerInner = styled.div<{ secondLayout?: boolean }>`
  height: 40px;
  width: 100%;
  padding: 0 20px;
  margin: auto;
  margin-bottom: 20px;
  @media ${device.mobile} {
    width: 100%;
  }
  @media ${device.tiny} {
    width: 100%;
  }
  .ant-btn {
    color: ${(props) => props.theme.color.white};
    background: linear-gradient(270deg, #1a87bb, #1b9bd7);
    border: none;
    border-radius: 20px;
    width: 100%;
    font-size: 1rem;
    height: 100%;
    &:hover,
    &:focus,
    &:active {
      color: ${(props) => props.theme.color.white};
      background: linear-gradient(270deg, #1a87bb, #1b9bd7);
    }
  }
`
