import Drawer from 'antd/lib/drawer'
import styled from 'styled-components'
import {
  CloseOutlined,
  StepForwardOutlined
} from '@ant-design/icons'

export const CustomDrawer = styled(Drawer)`
  .ant-drawer-body {
    padding: 0;
  }
  .ant-drawer-content {
    border-radius: 0px 15px 15px 0px;
    background: #ffffff 0% 0% no-repeat padding-box;
  }
`
export const Header = styled.p`
  background-color: #1b9bd7;
  padding: 10px;
  margin-bottom: 27px;
`

export const CrossIcon = styled(CloseOutlined)`
  color: #1b9bd7;
  float: right;
  padding: 5px;
  background-color: white;
  border-radius: 50%;
`

export const HeaderArea = styled.p`
  /* flex-shrink: 0; */
  display: flex;
  padding: 6px;
  width: 100%;
`

export const HeaderAreaImage = styled.img`
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  flex: 1;
`

export const HeaderAreaH1 = styled.h1`
  font-size: 100%;
  font-weight: 500;
  color: white;
  margin: 0 7px;
  flex: 4;
`

export const ListArea = styled.p`
  display: flex;
  color: #000000;

  &:hover {
    color: #1b9bd7;
  }
  &p:focus {
    color: #1b9bd7;
  }
`

export const ListIcon = styled(StepForwardOutlined)`
  flex: 1;
  margin-right: 5%;
  padding: 5px;
`

export const ListTitle = styled.p`
  flex: 4;
  margin-bottom: 0;
`

export default {}
