import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { device } from '../../../../styles/devices'

export const Container = styled.div`
  margin: 20px 20px 20px 20px;
  padding: 15px;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25'   xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='14' ry='14' stroke='%231B9BD7FF' stroke-width='3' stroke-dasharray='6%2c 8' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
  border-radius: 8px;
  /* border: 1px solid ${(props) => props.theme.color.primary}; */
  /* border-style: dashed; */
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
  @media ${device.mobile} {
    font-size: 12px;
  }
  @media ${device.tiny} {
    font-size: 12px;
  }
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
