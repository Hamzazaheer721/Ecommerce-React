/* eslint-disable no-undef */
import { memo } from 'react'
import {
  faUser,
  faKey,
  faEnvelope,
  faKeySkeleton,
  faMapMarkerAlt,
  faMapMarkedAlt,
  faMoneyCheckEdit,
  faUserMinus
} from '@fortawesome/pro-light-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import MapComponent from '../../../components/map'
import {
  Container,
  LeftContainer,
  RightContainer,
  InputContainer,
  InputFieldsContainer,
  Title,
  LinkText,
  LinkIcon,
  AddressPaymentContainer,
  MapIcon,
  AddressPaymentTitle,
  ShippingAddress,
  StreetAddress,
  Address,
  OfficeTitle,
  // MapImage,
  SelectiveCardContainer,
  CardImage,
  CardTitle,
  SimpoleIcon,
  DeleteLinkText
} from './index.styled'
import ProfileImage from '../profileImage'
import Input from '../../../components/input'
import { MapContainer } from '../../../styles/global'

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
          <Input label="WhatsApp Number" store phonefield prefix={faWhatsapp} />
        </InputContainer>
        <InputContainer>
          <Input label="Password" prefix={faKey} typePassword />
        </InputContainer>
      </InputFieldsContainer>
      <LinkText>
        <LinkIcon icon={faKeySkeleton} />
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
        <MapContainer height="300px">
          <MapComponent
            height="300px"
            zoom={15}
            latLng={{
              lat: 59.955413,
              lng: 30.337844
            }}
          />
        </MapContainer>
        <LinkText>
          <LinkIcon icon={faMapMarkedAlt} />
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
          <LinkIcon icon={faMoneyCheckEdit} />
          Manage Payment Method
        </LinkText>
      </AddressPaymentContainer>
      <LinkText>
        <SimpoleIcon icon={faUserMinus} />
        Deactivate Account
      </LinkText>
      <DeleteLinkText>
        <SimpoleIcon icon={faUser} />
        Deactivate Account
      </DeleteLinkText>
    </RightContainer>
  </Container>
))
export default UserProfile
