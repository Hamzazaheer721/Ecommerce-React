import styled from 'styled-components'

export const Container = styled.div<{
  changeBackground: boolean
}>`
  display: flex;
  justify-content: between;
  /* width: 100%; */
  word-wrap: break-word;
  white-space: initial;
  padding: 2px 10px;

  background-color: ${({ changeBackground }) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    changeBackground && '#f8f8f8'};
  :hover {
    background-color: #f8f8f8;
  }
`

export const NameArea = styled.span`
  padding-top: 10px;
  margin-top: 5px;
  flex-grow: 1;
`

export const Name = styled.span`
  padding: 0px 10px 6px 10px;
  border-radius: 50%;
  font-size: 150%;
  color: white;
`

export const NotificationArea = styled.p`
  width: 150px;
  flex-grow: 11;
  margin-bottom: 0.5rem;
`
export const OrderTitle = styled.p`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 2px;
  margin-top: 8px;
  color: #6e6e6e;
`
export const OrderDescriptioon = styled.p`
  color: ${(props) => props.theme.color.darkGray};
  font-size: 14px;
  margin-bottom: 0;
  line-height: 18px;
`
