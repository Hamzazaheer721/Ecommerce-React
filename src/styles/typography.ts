import styled from 'styled-components'

export const LoginHeader = styled.h3`
  font-size: 24px;
  color: ${(props) => props.theme.color.primary};
  text-transform: capitalize;
  font-weight: 600;
  white-space: nowrap;
  margin-bottom: 5px;
`

export const LoginDescription = styled.p`
  font-size: 16px;
  margin-bottom: 10%;
  font-weight: 500;
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

export const EmptyErrorState = styled.p`
  font-size: 14px;
  margin: 3px 0;
  color: red;
`
