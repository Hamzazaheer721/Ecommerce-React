import styled from 'styled-components';

export const Container = styled.div`
  height: 400px;
  width: 500px; 
  border: 3px solid black;
  position: absolute;
  display: flex;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
export const WelcomeText = styled.h1`
  color: black;
  font-size : 20px; 
`
