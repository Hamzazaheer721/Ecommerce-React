import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { device } from '../../../../styles/devices'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 35%;
  padding: 0 1.5rem;

  @media ${device.tablet} {
    width: 50%;
    padding: 0 2.5rem;
  }

  @media ${device.mobile} {
    width: 100%;
    padding: 0 55px;
  }

  @media ${device.tiny} {
    width: 100%;
    padding: 0 55px;
  }
`

export const InputContainer = styled.div`
  /* min-width: 250px; */
  width: 100%;
  border: none;
  outline: none;
`
export const ButtonContainer = styled.div`
  height: 50px;
  width: 100%;
  .ant-btn {
    color: ${(props) => props.theme.color.white};
    background: linear-gradient(270deg, #1a87bb, #1b9bd7);
    border: none;
    border-radius: 30px;
    width: 100%;
    font-size: 1rem;
    height: 100%;
    &:hover,
    &:focus,
    &:active {
      color: ${(props) => props.theme.color.white};
      background: linear-gradient(270deg, #1a87bb, #1b9bd7);
    }
  }
`

export const HeadingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  text-align: center;
`
export const Heading = styled.div`
  color: ${(props) => props.theme.color.primary};
  font-size: 30px;
  font-weight: 700;
`

export const SubHeading = styled.div`
  color: ${(props) => props.theme.color.secondary};
  font-size: 16px;
  letter-spacing: 0.7px;
  margin-top: 13px;
  white-space: nowrap;
`

export const InputFieldsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
  width: 100%;
`
export const MarginDiv = styled.div`
  visibility: hidden;
  height: 15px;
`

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: baseline;
`

export const CheckboxPlaceholder = styled.p`
  color: #606060;
  text-align: left;
  letter-spacing: 0px;
  padding-left: 6px;
  padding-top: 10px;
  font-size: 12px;
  transform: translateY(2%) !important;

  @media ${device.mobile} {
    transform: translateY(-15%) !important;
  }

  @media ${device.tiny} {
    transform: translateY(-14%) !important;
  }
`
export const UserButton = styled(FontAwesomeIcon)``

export const LinkText = styled.span`
  color: black;
`
