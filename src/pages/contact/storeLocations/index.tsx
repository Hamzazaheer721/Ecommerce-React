import { memo } from 'react'
import { faPlus, faTasks } from '@fortawesome/pro-light-svg-icons'
import {
  Container,
  CardTitle,
  SelectiveCardContainer,
  LinkText,
  LinkIcon,
  CustomCheckBox,
  FooterContainer,
  RightContainer,
  LeftContainer,
  MultipleStoreContainer
} from './index.styled'

const StoreLocations = memo(() => (
  <Container>
    <SelectiveCardContainer>
      <MultipleStoreContainer>
        <CustomCheckBox type="checkbox" name="remember" />
        <CardTitle>
          Multiple Store Locations
          <br />
          <span>
            Select all your srores & locations for managing deliviries
          </span>
        </CardTitle>
      </MultipleStoreContainer>

      <FooterContainer>
        <LeftContainer>
          <LinkText>
            <LinkIcon icon={faPlus} />
            Add New Branch
          </LinkText>
        </LeftContainer>

        <RightContainer>
          <LinkText>
            <LinkIcon icon={faTasks} />
            Manage Branch
          </LinkText>
        </RightContainer>
      </FooterContainer>
    </SelectiveCardContainer>
  </Container>
))

export default StoreLocations
