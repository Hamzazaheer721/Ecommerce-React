import styled from 'styled-components'

export const LoginHeader = styled.h3`
  font-size: 24px;
  color: ${(props) => props.theme.color.primary};
  text-transform: capitalize;
  font-weight: 600;
  white-space: nowrap;
`

export const LoginDescription = styled.p`
  font-size: 14px;
  margin-bottom: 20%;
  font-weight: 600;
  /* padding: 0 30px; */
`
export const LoginFooter = styled.p`
  font-size: 14px;
  margin-top: 20%;
  white-space: nowrap;
  span {
    font-weight: 700;
  }
`

export const LoginSubFooter = styled.p`
  font-size: 14px;
  margin-top: 5%;
  text-decoration: underline;
`
