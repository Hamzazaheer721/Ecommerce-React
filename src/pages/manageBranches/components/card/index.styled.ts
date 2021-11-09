/* eslint-disable no-unneeded-ternary */
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Switch } from 'antd'
import { device } from '../../../../styles/devices'

export const Container = styled.div`
  padding-top: 20px;
  background-color: white;
`
export const CardContainer = styled.div<{ giveBackroundColor?: boolean }>`
  background-color: ${({ giveBackroundColor }) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    giveBackroundColor && '#f8f8f8'};
  :hover {
    background-color: #f8f8f8;
  }

  display: flex;
  padding: 20px 12px;
  flex-direction: column;
`
export const MultipleStoreContainer = styled.div`
  display: flex;
`
export const PlaceIcon = styled(FontAwesomeIcon)`
  margin: 2px 5px 0 0;

  font-size: 20px;
`
export const CardTitle = styled.p`
  font-size: 15px;
  font-weight: 500;
  line-height: 18px;
  margin: 0 5px;
  color: black;
  flex: 4;
  text-align: left;
  span {
    color: ${(props) => props.theme.color.darkGray};
    font-size: 12px;
  }
  @media ${device.tiny} {
    font-size: 14px;
    margin: 0 2px;
  }
`
export const IconsContainer = styled.div`
  align-self: flex-end;
  display: flex;
  gap: 15px;
  .ant-switch-checked {
    background-color: ${(props) => props.theme.color.green} !important;
  }
`
export const Icon = styled(FontAwesomeIcon)<{ PropsColor?: string }>`
  color: ${({ PropsColor }) => (PropsColor ? PropsColor : '')};
  font-size: 16px;
  cursor: pointer;
`
export const AntSwitch = styled(Switch)``
