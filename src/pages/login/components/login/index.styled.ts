import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { device } from '../../../../styles/devices';

export const Container = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 100%;
  position: absolute;
  transform : translate(-50%, -60%);
  left: 50%;
  top: 50%;
  overflow-y: hidden;
`

export const InputContainer = styled.div`
  min-width: 250px;
  width: 100%;
  border: none;
  outline: none;
`
export const ButtonContainer = styled.div`
  /* min-width: 64px; */
  height: 40px;
  min-width: 250px;
  .ant-btn{
    color: ${(props) => props.theme.color.white};
    background: linear-gradient(270deg,#1A87BB, #1B9BD7);
    border: none;
    border-radius: 20px;
    width: 100%;
    font-size: 1rem;
    height: 100%;
    &:hover, &:focus, &:active {
      color: ${(props) => props.theme.color.white};
      background: linear-gradient(270deg,#1A87BB, #1B9BD7);
    }
  }
`

export const HeadingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 80px;
  text-align:center;
`
export const Heading = styled.div`
  color: ${(props) => props.theme.color.primary};
  font-size: 30px;
  font-weight: 700;
`

export const SubHeading = styled.div`
  color : ${(props) => props.theme.color.secondary};
  font-size: 16px;
  letter-spacing: 0.7px; 
  margin-top: 13px;
`

export const InputFieldsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
  width: 100%;

  @media ${device.desktop} {
    width: 450px;
  }

  @media ${device.laptop} {
    padding: 0 300px;
  }

  @media ${device.tablet} {
    padding: 0 150px;
  }

  @media ${device.mobile} {
    width: 250px;
  }

  @media ${device.tiny} {
    width: 250px;
  }

`
export const MarginDiv = styled.div`
  visibility: hidden;
  height: 15px;
`
export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`

export const CustomCheckBox = styled.input`
  margin:0;
  box-shadow: 0px 3px 6px #00000029;
  border: 0.5px solid #4E98E2;
  border-radius: 3px;
`
export const CheckboxPlaceholder = styled.p`
  color: #606060;
  text-align: left;
  letter-spacing: 0px;
  padding-left: 6px;
  padding-top: 10px;
  font-size: 12px;
`
export const UserButton = styled(FontAwesomeIcon)`
`
