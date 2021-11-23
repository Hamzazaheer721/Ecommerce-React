import styled from 'styled-components'
import { Title } from './components/header/index.styled'

export const Container = styled.div`
  .ant-collapse > .ant-collapse-item > .ant-collapse-header {
    background-color: white;
  }
  
  .ant-collapse {
    background-color: transparent;
  }

  .ant-collapse-header, .ant-collapse-item{
    border-radius: 8px; /* It is wrapping border radius of ant-collapse-header */
  }

  .ant-collapse-item-active{
    .ant-collapse-header{
      border-radius: 0px;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
    }
    .ant-collapse-content{
      border-radius: 0px;
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
    }
    ${Title}{
      color: ${(props) => props.theme.color.primary};
    }
  }

  .ant-collapse-item {
    border: none;
    margin: 18px;
    box-shadow: 0px 3px 5px #0000001a;
  }

  .ant-collapse-content {
    border-top: none !important;
  }
`
