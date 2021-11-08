import styled from 'styled-components'
import { Tabs } from 'antd'
import { device } from '../../styles/devices'

export const TabsContainer = styled(Tabs)`
  .ant-tabs-tab-btn:focus {
    color: white !important;
    opacity: 1 !important;
  }

  .ant-tabs-tab-btn:hover {
    color: white !important;
    opacity: 1 !important;
  }

  .ant-tabs-tab-btn {
    color: white !important;
    opacity: 0.8 !important;
  }

  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    opacity: 1 !important;
  }

  .ant-tabs-tab {
    padding: 20px 0;
  }

  .ant-tabs-tab + .ant-tabs-tab {
    margin: 0 0 0 82px;
  }

  .ant-tabs-tab.ant-tabs-tab-active {
    border-bottom: 3px solid white !important;
    z-index: 2;
  }

  @media ${device.tiny} {
    .ant-tabs-tab + .ant-tabs-tab {
      margin: 0 0 0 62px;
    }
  }
`
