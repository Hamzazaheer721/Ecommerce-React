import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const CategoriesContainer = styled.div`
  display: flex;
  /* height: 100px; */
  justify-content: space-evenly;
  /* border: 1px solid black; */
  margin: auto;
`

export const CategoryContainer = styled.span`
  width: 20%;
  /* background: red; */
  text-align: center;
  justify-content: center;
  align-items: center;
`

export const FashionCategoryIcon = styled(FontAwesomeIcon)`
  color: white;
  padding: 14px;
  border-radius: 50%;
  font-size: 60px;
  background-color: ${(props) => props.theme.color.yellow};
`
export const CategoryLabel = styled.p`
  margin-top: 8px;
  margin-bottom: 0;
  font-weight: 600;
  font-size: 14px;
`
export const FoodCategoryIcon = styled(FontAwesomeIcon)`
  color: white;
  padding: 14px;
  border-radius: 50%;
  font-size: 60px;
  background-color: ${(props) => props.theme.color.primary};
`

export const GroceryCategoryIcon = styled(FontAwesomeIcon)`
  color: white;
  padding: 14px;
  border-radius: 50%;
  font-size: 60px;
  background-color: ${(props) => props.theme.color.red};
`
export const MoreCategoryIcon = styled(FontAwesomeIcon)`
  color: white;
  padding: 14px;
  border-radius: 50%;
  font-size: 60px;
  background-color: ${(props) => props.theme.color.green};
`
