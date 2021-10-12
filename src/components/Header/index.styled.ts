import styled from 'styled-components'
import { ArrowLeftOutlined } from '@ant-design/icons'

export const HeaderContainer = styled.div`
  width: 100%;
  padding: 20px 10px;
  background-color: white;
  display: flex;
`
export const HeaderIconContainer = styled.div`
  flex-grow: 1;
`

export const HeaderInputContainer = styled.div`
  flex-grow: 9;
`

export const HeaderRightIconsContainer = styled.div`
  flex-grow: 2;
`
export const ArrowLeftIcon = styled(ArrowLeftOutlined)`
  &.anticon {
    svg {
      fill: ${(props) => props.theme.color.primary};
      margin: auto 10px;
    }
  }
`
