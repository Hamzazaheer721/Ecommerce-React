import styled from 'styled-components'
import { device } from '../../styles/devices'

export const Container = styled.div``

// export const InputContainer = styled.div`
//   height: 100%;
//   width: 100%;
//   position: relative;
//   border: ${(props) => props.theme.borderColor.gray};
//   background-color: ${(props) => props.theme.color.white};
//   border-radius: 8px;
//   transition: 0.4s;
//   padding: 5px;
//   margin-bottom: 15px;

//   p {
//     top: 0;
//     left: 0.8rem;
//     font-size: 0.8rem;
//     background: white;
//     opacity: 1;
//     color: ${(props) => props.theme.color.lightGray};
//   }

//   @media ${device} {
//     font-size: 1rem;
//   }

//   @media ${device.tiny} {
//     font-size: 1rem;
//   }
// `
export const InputsContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
  flex-wrap: wrap;
`
export const InputContainer = styled.div<{ single?: boolean }>`
  border: none;
  outline: none;
  flex: 1 1 45%;

  @media ${device.tablet} {
    flex: 1 1 100%;
  }

  @media ${device.mobile} {
    flex: 1 1 100%;
  }

  @media ${device.tiny} {
    flex: 1 1 100%;
  }
`
