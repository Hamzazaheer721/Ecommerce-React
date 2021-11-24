import { Switch } from 'antd'
import styled from 'styled-components'

export const SwitchContainer = styled.div`
  .ant-switch-checked {
    background-color: ${(props) => props.theme.color.green} !important;
  }
`

export const CustomSwitch = styled(Switch)``
