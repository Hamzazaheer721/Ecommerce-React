/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-confusing-arrow */
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
    padding: 0 55px;
  }

  @media ${device.mobile} {
    width: 100%;
    padding: 0 55px;
  }

  @media ${device.tiny} {
    width: 100%;
    padding: 0 15px;
  }
`

export const InputContainer = styled.div`
  /* min-width: 250px; */
  width: 100%;
  border: none;
  outline: none;
`
export const ButtonContainer = styled.div<{
  isPrimary: 'visitor' | 'company'
  theme: any
}>`
  height: 50px;
  width: 100%;
  .ant-btn {
    color: ${(props) => props.theme.color.white};
    background: ${({ isPrimary, theme }) =>
      isPrimary === 'visitor'
        ? theme.gradientButton.primary
        : theme.gradientButton.secondary};
    border: none;
    border-radius: 30px;
    width: 100%;
    font-size: 1rem;
    height: 100%;
    &:hover,
    &:focus,
    &:active {
      color: ${(props) => props.theme.color.white};
      background: ${({ isPrimary, theme }) =>
        isPrimary === 'visitor'
          ? theme.gradientButton.primary
          : theme.gradientButton.secondary};
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
  margin-top: 5px;
`

export const InputFieldsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
  width: 100%;
`

export const CheckboxSection = styled.div`
  display: flex;
  flex-direction: column;
`
export const CheckboxContainer = styled.div`
  margin-top: 6px;
  display: flex;
  align-items: baseline;
  line-height: 5px;
`

export const CheckboxError = styled.div`
  display: flex;
`

export const CustomCheckBox = styled.input`
  box-shadow: 0px 3px 6px #00000029;
  border: 0.5px solid #4e98e2;
  border-radius: 3px;
`
export const CheckboxPlaceholder = styled.p`
  color: #606060;
  text-align: left;
  letter-spacing: 0px;
  padding-left: 6px;
  font-size: 12px;
  span {
    color: ${(props) => props.theme.color.primary};
    cursor: pointer;
  }
`
export const UserButton = styled(FontAwesomeIcon)``
