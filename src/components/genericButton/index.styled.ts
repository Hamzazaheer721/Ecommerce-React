import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'antd/dist/antd.css'
import Button from 'antd/es/button'

export const CustomButton = styled(Button)<{
  color?: any
}>``

export const IconStyler = styled(FontAwesomeIcon)`
  font-size: 1.2rem;
  margin-right: 7px;
`
export const ButtonContainer = styled.div`
  height: 40px;
  min-width: 250px;
  .ant-btn {
    color: ${(props) => props.theme.color.white};
    background: linear-gradient(270deg, #1a87bb, #1b9bd7);
    border: none;
    border-radius: 20px;
    width: 100%;
    font-size: 1rem;
    height: 100%;
    &:hover,
    &:focus,
    &:active {
      color: ${(props) => props.theme.color.white};
      background: linear-gradient(270deg, #1a87bb, #1b9bd7);
    }
  }
`
export const SecondaryButtonContainer = styled.div`
  /* min-width: 64px; */
  margin: 12px 0;
  height: 40px;
  min-width: 250px;
  .ant-btn {
    color: ${(props) => props.theme.color.white};
    background: linear-gradient(270deg, #0c215a, #243d82);
    border: none;
    border-radius: 20px;
    width: 100%;
    font-size: 1rem;
    height: 100%;
    &:hover,
    &:focus,
    &:active {
      color: ${(props) => props.theme.color.white};
      background: linear-gradient(270deg, #0c215a, #243d82);
    }
  }
`
