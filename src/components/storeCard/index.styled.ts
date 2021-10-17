/* eslint-disable implicit-arrow-linebreak */
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const CardContainer = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-right: auto;
  margin-left: auto;
  max-width: 350px;
`

export const GroupContainer = styled.div`
  position: relative;
  border-radius: 7px;
  row-gap: 0.25rem;
  /* cursor: pointer; */
`

export const HeaderArea = styled.div`
  width: 100%;
  /* height: 12.5rem; */
  /* min-height: 2.5rem; */
  /* aspect-ratio: 1/1; this will in query */
  border-radius: 7px;
  overflow: hidden;
`

export const SubHeaderArea = styled.div`
  display: flex;
  position: absolute;
  margin-top: 2rem;
  justify-content: between;
  width: 100%;
`

export const BadgeArea = styled.span`
  color: white;
  margin-left: 5px;
  font-size: 12px;
`
export const BadgeAreaWraper = styled.div`
  background-color: ${(props) => props.theme.color.primary};
  padding: 2px;
  width: 28%;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
`

export const IconArea = styled.div`
  /* display: inline-flex; */
  padding-left: 1rem;
  padding-right: 1rem;
  float: right;
  width: 100%;
`

export const TimeArea = styled.div`
  position: absolute;
  right: 1rem;
  bottom: 2rem;
  /* bottom: 9rem; this for query */
  text-align: right;
  background-color: gray;
  background: rgba(0, 0, 0, 0.8);
  color: ${(props) => props.theme.color.primary};
  background-color: ${(props) =>
    props.theme.color.lightBlue};
  border-radius: 3px;
  padding: 0 14px;
  border-radius: 6px;
`
export const IconStyle = styled(FontAwesomeIcon)`
  font-size: 22px;
  padding: 3px 5px 3px 5px;
  background-color: white;
  margin-left: 3px;
  margin-right: 3px;
  border-radius: 50%;
  cursor: pointer;
`

export const RatingIconStyle = styled(FontAwesomeIcon)`
  font-size: 22px;
  padding: 3px 5px 3px 5px;
  margin-left: 3px;
  margin-right: 3px;
  border-radius: 50%;
  cursor: pointer;
  color: ${(props) => props.theme.color.yellow};
`

export const IconContainer = styled.div`
  /* padding: 3px; */
  /* background-color: white; */
  float: right;
`

export const CardImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 200px;
`
export const ProfileContainer = styled.div`
  display: flex;
`
export const ProfileImage = styled.img`
  position: absolute;
  width: 5rem;
  margin-left: 1rem;
  height: 5rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  top: 79%;
  border-radius: 7px;
  flex: 5;
`

export const ProfileSubContainer = styled.div`
  width: 100%;
  justify-content: space-between;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
`

export const ProductName = styled.h5`
  font-size: 16px;
  position: absolute;
  margin-top: 4px;
  margin-left: 32%;
  flex: 8;
  font-weight: 600;
`
export const RatingArea = styled.span`
  display: inline-flex;
  padding-right: 1rem;
  padding-left: 1rem;
  position: absolute;
  right: 0;
  margin-top: 4px;
`
export const Description = styled.p`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`
export const ButtonsContainer = styled.p`
  width: 100%;
`
