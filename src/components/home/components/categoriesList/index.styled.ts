import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const CategoriesContainer = styled.div`
  display: flex;
  /* height: 100px; */
  justify-content: space-evenly;
  /* border: 1px solid black; */
  margin: auto;
  padding: 0.8rem 0 0.5rem 0;
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
  width: 3.75rem !important;
  height: 3.75rem !important;
  text-align: center;
  vertical-align: middle;
  padding: 10px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.color.yellow};
`
export const CategoryLabel = styled.p`
  margin-top: 7px;
  margin-bottom: 0;
  font-weight: 500;
  font-size: 14px;
`
export const FoodCategoryIcon = styled(FontAwesomeIcon)`
  color: white;
  width: 60px !important;
  height: 60px !important;
  text-align: center;
  vertical-align: middle;
  padding: 14px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.color.primary};
`

export const GroceryCategoryIcon = styled(FontAwesomeIcon)`
  color: white;
  width: 60px !important;
  height: 60px !important;
  text-align: center;
  vertical-align: middle;
  padding: 14px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.color.red};
`
export const MoreCategoryIcon = styled(FontAwesomeIcon)`
  color: white;
  width: 60px !important;
  height: 60px !important;
  text-align: center;
  vertical-align: middle;
  padding: 14px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.color.green};
`
