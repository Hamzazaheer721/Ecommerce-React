import { memo } from 'react'
import {
  faUser,
  faKey,
  faEnvelope,
  faKeySkeleton,
  faMapMarkerAlt,
  faMapMarkedAlt,
  faMoneyCheckEdit
} from '@fortawesome/pro-light-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

import {
  Container,
  LeftContainer,
  RightContainer,
  InputContainer,
  InputFieldsContainer,
  Title,
  LinkText,
  KeyIcon,
  AddressPaymentContainer,
  MapIcon,
  AddressPaymentTitle,
  ShippingAddress,
  StreetAddress,
  Address,
  OfficeTitle,
  MapImage,
  SelectiveCardContainer,
  CardImage,
  CardTitle
} from './index.styled'
import ProfileImage from '../profileImage'
import Input from '../../../components/input'

const UserProfile = memo(() => (
  <Container>
    <LeftContainer>
      <ProfileImage />
      <Title>Adnan Shakir</Title>
    </LeftContainer>
    <RightContainer>
      <InputFieldsContainer>
        <InputContainer>
          <Input label="Your Name" prefix={faUser} />
        </InputContainer>
        <InputContainer>
          <Input label="Email" prefix={faEnvelope} />
        </InputContainer>
      </InputFieldsContainer>

      <InputFieldsContainer>
        <InputContainer>
          <Input label="WhatsApp Number" phonefield prefix={faWhatsapp} />
        </InputContainer>
        <InputContainer>
          <Input label="Password" prefix={faKey} typePassword />
        </InputContainer>
      </InputFieldsContainer>
      <LinkText>
        <KeyIcon icon={faKeySkeleton} />
        Change Password
      </LinkText>
      <AddressPaymentContainer>
        <MapIcon icon={faMapMarkerAlt} />
        <AddressPaymentTitle>Address</AddressPaymentTitle>
        <ShippingAddress>Default Shipping Address</ShippingAddress>
        <StreetAddress>
          <OfficeTitle>Office</OfficeTitle>
          <Address>341-E2, Johar Town, Lahore </Address>
        </StreetAddress>
        <MapImage src="/images/map.png" />
        <LinkText>
          <KeyIcon icon={faMapMarkedAlt} />
          Manage Address
        </LinkText>
      </AddressPaymentContainer>

      <AddressPaymentContainer>
        <MapIcon icon={faMapMarkerAlt} />
        <AddressPaymentTitle>Payment Method</AddressPaymentTitle>
        <ShippingAddress>Default Payment Method</ShippingAddress>

        <SelectiveCardContainer>
          <CardImage src="/images/master-card-icon.png" />
          <CardTitle>
            Mastercard
            <br />
            <span>*****756</span>
          </CardTitle>
        </SelectiveCardContainer>
        <LinkText>
          <KeyIcon icon={faMoneyCheckEdit} />
          Manage Payment Method
        </LinkText>
      </AddressPaymentContainer>
    </RightContainer>
  </Container>
))

export default UserProfile
