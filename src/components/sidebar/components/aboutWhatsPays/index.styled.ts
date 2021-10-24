import styled from 'styled-components'

export const AboutWhatsPaysContainer = styled.div`
  padding: 14px 0;
  background-color: ${(props) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    props.theme.sidebarColor.aboutBannerBackground};
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  span {
    font-size: 16px;
    font-weight: 700;
    vertical-align: middle;
  }
`

export const WhatsText = styled.span`
  color: ${(props) => props.theme.sidebarColor.darkBlue};
`
export const PaysText = styled.span`
  color: ${(props) => props.theme.sidebarColor.lightBlue};
`

export const WhatsPaysImage = styled.img`
  width: 50%;
`
