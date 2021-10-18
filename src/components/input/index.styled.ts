import styled from 'styled-components';

export const Label = styled.p`
  font-size: 1rem;
  position: absolute;
  opacity: 0.6;
  left: 2rem;
  pointer-events: none;
  transition: all .22s;
  top: 50%;
  transform: translateY(-50%);
  display: block;
  transition: top 200ms ease-in, left 200ms ease-in, font-size 200ms ease-in;
`

export const InputField = styled.input`
  outline: none;
  border: none;
  width: 100%;
  height: 100%;
  padding: 12px;
  background-color: transparent;
  &:focus ~ ${Label} {
    top: 0;
    left: 0.8rem;
    font-size: 0.8rem;
  }
`;

export const InputContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  border: ${(props) => props.theme.borderColor.gray};
  background-color: ${(props) => props.theme.color.white};
  border-radius: 8px;
  transition: 0.4s;

  &:focus, &:hover, &:active{
    border: ${(props) => props.theme.borderColor.black};
  }

`;
