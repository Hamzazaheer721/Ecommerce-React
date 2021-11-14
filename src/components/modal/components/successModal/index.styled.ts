import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Modal } from 'antd'

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

export const Description = styled.p``

export const DoneButton = styled.button`
  background: ${(props) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    props.theme.gradientButton.green};
  color: white;
  border: none;
  border-radius: 20px;
  font-size: 16px;
  font-weight: 500;
  height: 40px;
  width: 156px;
  padding: 0;
`
export const ModalContainer = styled(Modal)`
  .ant-modal-content {
    border-radius: 20px;
  }
`
