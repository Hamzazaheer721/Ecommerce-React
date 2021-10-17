import styled from 'styled-components'
import { device } from '../../../../styles/devices'

export const LogoutButton = styled.button`
  padding: 8px 80px;
  border-radius: 20px;
  margin-bottom: 20px;
  color: white;
  background-color: #ff3e2c;
  border: none;
  @media ${device.tablet} {
  }
`

export const WrapContainer = styled.div`
  text-align: center;
`
