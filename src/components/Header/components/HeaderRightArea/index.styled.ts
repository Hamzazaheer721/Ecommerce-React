import styled from 'styled-components'
import {
  SearchOutlined,
  BellOutlined
} from '@ant-design/icons'

export const Container = styled.div`
  text-align: right;
  padding-right: 20px;
`

export const SearchIconStyle = styled(SearchOutlined)`
  &.anticon {
    svg {
      fill: ${(props) => props.theme.color.primary};
      margin: auto 10px;
      font-size: 1.1rem;
    }
  }
`
export const BellhIconStyle = styled(BellOutlined)`
  &.anticon {
    svg {
      fill: ${(props) => props.theme.color.primary};
      margin: auto 10px;
      font-size: 1.1rem;
    }
  }
`

export const ProfileImage = styled.img`
  border-radius: 50%;
  height: auto;
  width: 1.4rem;
  margin-top: -7px;
  margin-left: 10px;
`
