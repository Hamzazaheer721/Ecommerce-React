import styled from 'styled-components'
import { device } from '../../../../styles/devices'

export const Container = styled.div`
  margin: 15px 15px 0 15px;
  text-align: center;
`
export const DealImage = styled.img`
  height: 123px;
  box-shadow: 0px 3px 10px #00000014;
  border-radius: 10px;
  object-fit: cover;

  @media ${device.mobile} {
    width: 100px;
  }
  @media ${device.tiny} {
    width: 70px;
  }
`
