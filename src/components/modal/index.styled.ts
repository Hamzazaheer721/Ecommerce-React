import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const ModalContentContainer = styled.div`
  text-align: center;
`

export const NotificationIcon = styled(FontAwesomeIcon)`
  width: 40px !important;
  height: 40px !important;
  align-items: center;
  vertical-align: middle;
  border-radius: 50%;
  padding: 8px;
  border: 3px solid ${(props) => props.theme.color.green};
  color: ${(props) => props.theme.color.green};
`
export const Title = styled.p`
  font-size: 18px;
  font-weight: 600;
  margin-top: 10px;
  margin-bottom: 0;
`
export const DoneButton = styled.button`
  padding: 4px 25px;
  background-color: ${(props) => props.theme.color.green};
  color: white;
  border: none;
  border-radius: 25px;
  font-size: 16px;
  font-weight: 500;
  float: right;
`
