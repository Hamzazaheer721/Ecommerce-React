import styled, { css } from 'styled-components'

export const LoginHeader = styled.h3`
  font-size: 24px;
  color: ${(props) => props.theme.color.primary};
  text-transform: capitalize;
  font-weight: 600;
  white-space: nowrap;
  margin-bottom: 0;
  margin-top: 5%;
`

export const LoginDescription = styled.p`
  font-size: 16px;
  margin-bottom: 10%;
  margin-top: 13px;
  font-weight: 500;
`
export const LoginFooter = styled.p`
  font-size: 14px;
  margin-top: 30px;
  white-space: nowrap;
  span {
    font-weight: 700;
    cursor: pointer;
    color: black;
  }
`

export const LoginSubFooter = styled.p`
  font-size: 14px;
  margin-top: 15%;
  text-decoration: underline;
  color: black;
`

export const EmptyErrorState = styled.p<{marginTop?: string, lessenLineHeight?: string}>`
  font-size: 12px;
  margin: 5px 0;
  margin-top : ${({marginTop}) => marginTop};
  color: red;
  ${({lessenLineHeight}) => lessenLineHeight && css`
    &{
      line-height: ${lessenLineHeight};
    }
  `}
`

export const MarginDiv = styled.div<{ $height?: string }>`
  visibility: hidden;
  height: ${({ $height }) => $height || '15px'};
`

export const LinkSpan = styled.span`
  color: ${(props) => props.theme.color.black};
`
