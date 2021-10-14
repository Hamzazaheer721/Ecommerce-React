import styled from 'styled-components';
import Button from 'antd/es/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'antd/dist/antd.css'

export const Container = styled.div`
  display: block;
  min-width: 64px;
  width: 200px;
  .ant-btn{
    color: ${(props) => props.theme.color.white};
    background-color: ${(props) => props.theme.color.primary};
    border: none;
    border-radius: 20px;
    width: 100%;
    &:hover {
      color: ${(props) => props.theme.color.white};
      background-color: ${(props) => props.theme.color.primary};
    }
  }
`
export const CustomButton = styled(Button)`
`

export const IconStyler = styled(FontAwesomeIcon)`
  margin-right: 7px;
`
