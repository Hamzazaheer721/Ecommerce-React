import styled, { createGlobalStyle } from 'styled-components'
import { device } from './devices'

interface ISecondLayoutProps {
  secondLayout?: boolean
}
export const GlobalStyle = createGlobalStyle`
  html, body, #root {
    margin: 0;
    padding: 0;
    min-height: 100%;
    font-family: "Roboto", sans-serif;
    background-color: #F2F4FF;
    font-size: 16px;
  }
`
export const LoginViewContainer = styled.div<ISecondLayoutProps>`
  margin: 0 auto;
  width: 35%;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-height: ${({ secondLayout }) => (secondLayout ? '' : '100vh')};

  @media ${device.tablet} {
    width: 50%;
  }

  @media ${device.mobile} {
    width: 100%;
    padding: ${({ secondLayout }) => (secondLayout ? '0 15px' : '0 51px')};
  }

  @media ${device.tiny} {
    width: 100%;
    padding: ${({ secondLayout }) => (secondLayout ? '0 15px' : '0 51px')};
  }
`
export const InputFieldsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
  width: 100%;
`

export const InputContainer = styled.div`
  width: 100%;
  border: none;
  outline: none;
  margin-bottom: 21px;
`

export const ButtonContainer = styled.div`
  height: 40px;
  margin: 10px 0;
  width: 100%;
  .ant-btn {
    color: ${(props) => props.theme.color.white};
    background: linear-gradient(270deg, #1a87bb, #1b9bd7);
    border: none;
    border-radius: 20px;
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

export const MapContainer = styled.div<{ height: string }>`
  height: ${({ height }) => height};
`

export const InputFieldsSecondaryLayout = styled.div`
  padding: 0 15px;
  width: 100%;
`
