import styled from 'styled-components'
import { Menu } from 'antd'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { device } from '../../../../styles/devices'

export const CustomMenu = styled(Menu)`
  .ant-dropdown-menu-item:hover,
  .ant-dropdown-menu-submenu-title:hover {
    background-color: white !important;
  }

  .ant-dropdown-menu-item,
  .ant-dropdown-menu-submenu-title {
    padding: 1px 1px;
  }
  width: 350px;

  @media ${device.mobile} {
    width: 100vw;
  }

  @media ${device.tiny} {
    width: 100vw;
  }
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  padding-right: 20px;
  @media ${device.tiny} {
    padding-right: 2px;
  }
`

export const SearchIconStyle = styled(FontAwesomeIcon)`
  fill: ${(props) => props.theme.color.primary};
  margin: 0 10px 0 10px;
  font-size: 1.2rem;

  @media ${device.tiny} {
    margin: 2px 7px 0 1px;
    font-size: 1.2rem;
  }
`

export const BellhIconStyle = styled(FontAwesomeIcon)`
  fill: ${(props) => props.theme.color.primary};
  margin-left: 10px;
  margin-right: 10px;
  font-size: 1.2rem;

  @media ${device.tiny} {
    margin: 0 2px;
  }
`

export const ProfileImage = styled.img`
  border-radius: 50%;
  width: 1.6rem;
  margin-left: 4px;
  margin-top: -6px;
  cursor: pointer;
`
export const ButtonContainer = styled.div`
  width: 100%;
  text-align: center;
  padding: 10px 0 7px 0;
`

export const IconContainer = styled.div`
  margin-right: 15px;
`

export default {}
