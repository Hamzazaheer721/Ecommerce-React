import styled from 'styled-components'

export const Title = styled.span`
  margin-left: 10px;
`
export const HeaderContainer = styled.div`

  .ant-collapse-content, .ant-collapse-content-active{
    ${Title}{
      color: red !important
    }
  }
`
