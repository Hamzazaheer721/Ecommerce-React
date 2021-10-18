import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const ToastContainer = styled.div`
  background-color: ${(props) => props.theme.color.lightGreen};
  border-radius: 8px;
  width: 100%;
  height: 70px;
  margin-bottom: 10%;
  text-align: left;
  padding: 5px 10px;
`
export const CheckIcon = styled(FontAwesomeIcon)`
  background-color: ${(props) => props.theme.color.green};
  padding: 4px;
  font-size: 20px;
  border-radius: 50%;
  color: white;
  font-weight: 900;
`
