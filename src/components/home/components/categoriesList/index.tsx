import {
  faTshirt,
  faUtensils,
  faShoppingBag,
  faListUl
} from '@fortawesome/pro-light-svg-icons'
import {
  CategoriesContainer,
  CategoryContainer,
  FashionCategoryIcon,
  CategoryLabel,
  FoodCategoryIcon,
  GroceryCategoryIcon,
  MoreCategoryIcon
} from './index.styled'

const CategoriesComponent = () => (
  <>
    <CategoriesContainer>
      <CategoryContainer>
        <FashionCategoryIcon icon={faTshirt} />
        <CategoryLabel>Fashion</CategoryLabel>
      </CategoryContainer>
      <CategoryContainer>
        <FoodCategoryIcon icon={faUtensils} />
        <CategoryLabel>Food</CategoryLabel>
      </CategoryContainer>
      <CategoryContainer>
        <GroceryCategoryIcon icon={faShoppingBag} />
        <CategoryLabel>Grocery</CategoryLabel>
      </CategoryContainer>
      <CategoryContainer>
        <MoreCategoryIcon icon={faListUl} />
        <CategoryLabel>More</CategoryLabel>
      </CategoryContainer>
    </CategoriesContainer>
  </>
)

export default CategoriesComponent
