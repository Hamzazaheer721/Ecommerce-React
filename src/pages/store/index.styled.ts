import styled from 'styled-components'
import { device } from '../../styles/devices'

export const StoreContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-height: 1200px;
  @media ${device.tablet} {
    flex-direction: column;
  }

  @media ${device.mobile} {
    flex-direction: column;
  }

  @media ${device.tiny} {
    flex-direction: column;
  }
`
