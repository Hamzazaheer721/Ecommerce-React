import styled from 'styled-components'
import { device } from '../../../../styles/devices'

export const ButtonLayout = styled.div`
  padding: 0 30%;
  margin-bottom: 5px0;

  @media ${device.mobile} {
    padding: 0 10%;
  }

  @media ${device.tiny} {
    padding: 0 5%;
  }
`
