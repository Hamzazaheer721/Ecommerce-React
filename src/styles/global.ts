import styled, {
  createGlobalStyle
} from 'styled-components'
import { device } from './devices'

export const GlobalStyle = createGlobalStyle`
  html, body, #root {
    margin: 0;
    padding: 0;
    min-height: 100%;
    font-family: "Roboto", sans-serif;
    background-color: #F2F4FF;
  }
`
export const LoginViewContainer = styled.div`
  margin: 0 auto;
  width: 35%;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;

  @media ${device.tablet} {
    width: 50%;
  }

  @media ${device.mobile} {
    width: 100%;
    padding: 0 60px;
  }

  @media ${device.tiny} {
    width: 100%;
    padding: 0 60px;
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
`
