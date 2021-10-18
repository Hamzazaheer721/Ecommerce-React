import styled, { createGlobalStyle } from 'styled-components'
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
  width: 30%;
  text-align: center;
  display: flex;
  /* align-items: center; */
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
  padding: 0 42px;

  @media ${device.tablet} {
    width: 50%;
  }

  @media ${device.mobile} {
    width: 100%;
  }

  @media ${device.tiny} {
    width: 100%;
  }
`
