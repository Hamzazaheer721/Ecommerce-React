import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const IconsStyle = styled(FontAwesomeIcon)`
  height: 26px;
  padding: 2px;
  color: ${(props) => props.theme.color.lightGray};
  :hover {
    color: ${(props) => props.theme.color.primary};
    transition: 1s;
    padding: 0;
  }
`

export const QRImage = styled.img`
  width: 50px;
  height: 50px;
  margin-top: -50px;
  border-radius: 50%;
`
export const QRImageContainer = styled.div``
export const Container = styled.div`
  width: 100%;
  padding: 10px 5px;
  position: fixed;
  bottom: 0%;
  background-color: white;
  ${IconsStyle} {
    width: 20%;
    text-align: center;
    display: inline-block;
    display: -moz-inline-box;
  }
  ${QRImageContainer} {
    width: 20%;
    text-align: center;
    display: inline-block;
    display: -moz-inline-box;
  }
`
