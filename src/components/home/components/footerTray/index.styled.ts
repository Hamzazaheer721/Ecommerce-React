import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const IconsStyle = styled(FontAwesomeIcon)`
  height: 30px;
  padding: 2px;
  :hover {
    color: ${(props) => props.theme.color.primary};
    transition: 1s;
    padding: 0;
  }
`

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
`
