import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IColorObjectProp } from './types'

interface IToastContainerProp {
  colorProp: IColorObjectProp
}

interface ITitleContainerProp {
  colorProp: IColorObjectProp
}

export const ToastContainer = styled.div<IToastContainerProp>`
  background-color: ${(props) => props.colorProp.backgroundColor};
  border-radius: 8px;
  width: 90%;
  /* height: 70px; */
  margin-bottom: 10%;
  text-align: left;
  padding: 5px 10px;
  display: flex;
  margin: 15px auto;
`
export const CheckIcon = styled(FontAwesomeIcon)<IToastContainerProp>`
  background-color: ${(props) => props.colorProp.statusColor};
  padding: 0 3px;
  font-size: 22px;

  border-radius: 50%;
  color: white;
`
export const TitleContainer = styled.p<ITitleContainerProp>`
  h2 {
    color: ${(props) => props.colorProp.statusColor};
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
  font-weight: 500;
  margin-bottom: 0;
  opacity: 1;
  margin-left: 5px;
  span {
    font-weight: 600;
  }
`
