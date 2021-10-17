import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
`

export const Card = styled.div`
  margin: 10px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  width: 350px;
`

export const CardHeader = styled.div`
  width: 100%;
  height: 250px;
  object-fit: cover;
`

export const CardHeaderImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`

export const SubHeader = styled.span`
  position: absolute;
  z-index: 2;
  top: 8%;
  background: #cccccc;
  border-radius: 50px;
  font-size: 12px;
  margin: 0;
  color: #fff;
  padding: 2px 10px;
  text-transform: uppercase;
  cursor: pointer;
`

export const SubHeaderIcons = styled.span`
  position: absolute;
  z-index: 2;
  top: 6%;
  left: 10%;
`

export const CardBody = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  min-height: 250px;
`

export const CardBodyImage = styled.img`
  width: 80px;
  height: 80px;
  position: absolute;
  top: 35%;
  border-radius: 10px;
`
export const Tag = styled.span`
  background: #cccccc;
  border-radius: 50px;
  font-size: 12px;
  margin: 0;
  color: #fff;
  padding: 2px 10px;
  text-transform: uppercase;
  cursor: pointer;
`
