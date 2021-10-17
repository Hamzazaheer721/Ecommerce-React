import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'antd/dist/antd.css'
import Button from 'antd/es/button';

export const Container = styled.div`
  min-width: 64px;
  height: 40px;
  .ant-btn{
    color: ${(props) => props.theme.color.white};
    background: linear-gradient(270deg,#1A87BB, #1B9BD7);
    border: none;
    border-radius: 20px;
    width: 100%;
    font-size: 1rem;
    height: 100%;
    &:hover, &:focus, &:active {
      color: ${(props) => props.theme.color.white};
      background: linear-gradient(270deg,#1A87BB, #1B9BD7);
    }
  }
`
export const CustomButton = styled(Button)`
`

export const IconStyler = styled(FontAwesomeIcon)`
  font-size: 1.2rem;
  margin-right: 7px;
`
