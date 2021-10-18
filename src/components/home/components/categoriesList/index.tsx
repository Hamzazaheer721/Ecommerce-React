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
      </CategoryContainer>
      <CategoryContainer>
        <GroceryCategoryIcon icon={faShoppingBag} />
      </CategoryContainer>
      <CategoryContainer>
        <MoreCategoryIcon icon={faListUl} />
      </CategoryContainer>
    </CategoriesContainer>
  </>
)

export default CategoriesComponent
