import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const ToastContainer = styled.div`
  background-color: ${(props) => props.theme.color.lightGreen};
  border-radius: 8px;
  width: 90%;
  /* height: 70px; */
  margin-bottom: 10%;
  text-align: left;
  padding: 5px 10px;
  display: flex;
  margin: 15px auto;
`
export const CheckIcon = styled(FontAwesomeIcon)`
  background-color: ${(props) => props.theme.color.darkGreen};
  padding: 3.5px;
  font-size: 18px;
  border-radius: 50%;
  color: white;
`
export const TitleContainer = styled.p`
  h2 {
    color: ${(props) => props.theme.color.darkGreen};
    font-size: 16px;
    font-weight: 700;
    margin: 4px 0 0 5px;
  }
  width: 100%;
`

export const CrossIcon = styled(FontAwesomeIcon)`
  color: black;
  float: right;
  margin-right: 5px;
  cursor: pointer;
`
export const Description = styled.p`
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 0;
  opacity: 0.9;
  margin-left: 5px;
`
