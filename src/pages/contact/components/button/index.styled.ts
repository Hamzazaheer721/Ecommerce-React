import styled from 'styled-components'
import { device } from '../../../../styles/devices'

export const ButtonContainerInner = styled.div`
  height: 40px;
  width: 50%;
  padding: 0 20px;
  margin: auto;
  @media ${device.mobile} {
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
