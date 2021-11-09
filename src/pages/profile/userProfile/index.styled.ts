import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { device } from '../../../styles/devices'

export const Container = styled.div`
  /* padding: 0 15px; */
  margin: 15px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  @media ${device.mobile} {
    flex-direction: column;
  }
  @media ${device.tiny} {
    flex-direction: column;
  }
`
export const LeftContainer = styled.div`
  /* padding: 0 15px; */
  flex: 0.25;
  text-align: center;

  @media ${device.mobile} {
    flex: 1;
  }
  @media ${device.tiny} {
    flex: 1;
  }
`

export const RightContainer = styled.div`
  /* padding: 0 15px; */
  flex: 0.75;

  @media ${device.mobile} {
    flex: 1;
  }
  @media ${device.tiny} {
    flex: 1;
  }
`
export const Title = styled.h3`
  font-weight: 600;
  margin-top: 10px;
`

export const InputContainer = styled.div`
  /* min-width: 250px; */
  border: none;
  outline: none;
  flex: 1 1 50%;
`
export const InputFieldsContainer = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: flex-start; */
  /* margin-bottom: 20px; */
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 0 0 20px 0;
  gap: 20px;
  @media ${device.mobile} {
    flex-direction: column;
    ${InputContainer} {
      flex: 1 1 100%;
    }
  }

  @media ${device.tiny} {
    flex-direction: column;
    ${InputContainer} {
      flex: 1 1 100%;
    }
  }
`

export const LinkText = styled.h4`
  color: ${(props) => props.theme.color.primary};
  cursor: pointer;
`

export const DeleteLinkText = styled.h4`
  color: ${(props) => props.theme.color.red};
  margin-top: 10px;
  cursor: pointer;
`
export const LinkIcon = styled(FontAwesomeIcon)`
  color: ${(props) => props.theme.color.primary};
  margin-right: 5px;
  cursor: pointer;
`
export const SimpoleIcon = styled(FontAwesomeIcon)`
  margin-right: 5px;
  cursor: pointer;
  color: black;
`

export const AddressPaymentContainer = styled.div`
  background-color: white;
  box-shadow: 0px 3px 5px #0000001a;
  padding: 13px;
  border-radius: 5px;
  margin: 20px 0;

  @media ${device.tiny} {
    padding: 6px;
  }
`
export const MapIcon = styled(FontAwesomeIcon)`
  color: ${(props) => props.theme.color.darkGray};
  cursor: pointer;
  font-size: 18px;
  margin: 5px 8px 0 5px;
`
export const AddressPaymentTitle = styled.span`
  font-size: 16px;
  font-weight: 600;

  @media ${device.tiny} {
    font-size: 13px;
    width: 100%;
  }
`
export const ShippingAddress = styled.span`
  font-size: 12px;
  font-weight: 500;
  background-color: ${(props) => props.theme.storeColor.lightBlue};
  padding: 5px 4px;
  border-radius: 4px;
  float: right;
  border: 0.5px solid #9adbf9;

  @media ${device.tiny} {
    float: none;
  }
`
export const StreetAddress = styled.div`
  margin: 5px 5px 10px 5px;
`
export const Address = styled.span`
  font-size: 16px;
  color: ${(props) => props.theme.color.darkGray};
`
export const TitleContainer = styled.div`
  font-size: 16px;
  color: ${(props) => props.theme.color.darkGray};
`

export const OfficeTitle = styled.span`
  font-size: 14px;
  font-weight: 500;
  background-color: ${(props) => props.theme.storeColor.lightBlue};
  padding: 4px 9px;
  border-radius: 4px;
  border: 0.5px solid #9adbf9;
  margin-right: 10px;
`

export const MapImage = styled.img`
  width: 100%;
  height: 200px;
  margin: 10px 0 0 0;
`
export const SelectiveCardContainer = styled.div`
  display: flex;
  padding: 6px;
  width: 100%;
`

export const CardImage = styled.img`
  width: 35px;
  height: 20px;
  margin: auto;
`
export const CardTitle = styled.p`
  font-size: 15px;
  font-weight: 600;
  margin: 0 7px;
  flex: 4;
  span {
    color: ${(props) => props.theme.color.darkGray};
    font-size: 14px;
  }
`
