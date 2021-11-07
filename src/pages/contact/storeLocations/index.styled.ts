import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Container = styled.div`
  margin: 10px 20px 20px 20px;
  padding: 15px;
  border: 1px solid ${(props) => props.theme.color.primary};
  border-style: dashed;
  background-color: ${(props) => props.theme.locationCard.lightBlue};
  border-radius: 6px;
`

export const CardTitle = styled.p`
  font-size: 15px;
  font-weight: 500;
  line-height: 18px;
  margin: 0 7px;
  color: black;
  flex: 4;
  span {
    color: ${(props) => props.theme.color.darkGray};
    font-size: 12px;
  }
`
export const SelectiveCardContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`
export const LinkText = styled.h4`
  color: ${(props) => props.theme.color.primary};
  margin-top: 10px;
  cursor: pointer;
`

export const LinkIcon = styled(FontAwesomeIcon)`
  color: ${(props) => props.theme.color.primary};
  margin-right: 5px;
  cursor: pointer;
`
export const CustomCheckBox = styled.input`
  margin: 2px 0 0 0;
  box-shadow: 0px 3px 6px #00000029;
  border: 0.5px solid #4e98e2;
  border-radius: 3px;
  height: 20px;
  width: 20px;
`

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const LeftContainer = styled.p`
  margin-bottom: 0;
`

export const RightContainer = styled.p`
  margin-bottom: 0;
`

export const MultipleStoreContainer = styled.div`
  display: flex;
`
