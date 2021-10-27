import styled from 'styled-components'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const ModalContentContainer = styled.div`
  text-align: center;
`
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
