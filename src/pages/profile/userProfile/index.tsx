/* eslint-disable no-undef */
import { memo, useRef } from 'react'
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
  SelectiveCardContainer,
  CardImage,
  CardTitle,
  SimpoleIcon,
  DeleteLinkText
} from './index.styled'
import ProfileImage from '../profileImage'
import Input from '../../../components/input'
import useUserProfileForm from '../useUserProfileForm'
import { MapContainer } from '../../../styles/global'

const UserProfile = memo(() => {
  const { handleChange, handlePhoneChange, handleSubmit } = useUserProfileForm()
  const nameField = useRef<HTMLInputElement>(null)
  const emailField = useRef<HTMLInputElement>(null)
  const phoneField = useRef<HTMLInputElement>(null)

  return (
    <Container>
      <LeftContainer>
        <ProfileImage />
        <Title>Adnan Shakir</Title>
      </LeftContainer>
      <RightContainer>
        <InputFieldsContainer>
          <InputContainer>
            <Input
              ref={nameField}
              name="name"
              label="Your Name"
              prefix={faUser}
              value={nameField && nameField.current?.value}
              handleChange={handleChange}
            />
          </InputContainer>
          <InputContainer>
            <Input
              ref={emailField}
              name="email"
              label="Email"
              prefix={faEnvelope}
              value={emailField && emailField.current?.value}
              handleChange={handleChange}
            />
          </InputContainer>
        </InputFieldsContainer>
        <InputFieldsContainer>
          <InputContainer>
            <Input
              label="WhatsApp Number"
              store
              phonefield
              prefix={faWhatsapp}
              value={phoneField && phoneField.current?.value}
              handlePhoneChange={handlePhoneChange}
            />
          </InputContainer>
          <InputContainer>
            <Input name="password" prefix={faKey} value="******" typePassword />
          </InputContainer>
        </InputFieldsContainer>
        <button onClick={handleSubmit} type="button">
          submit
        </button>
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
  )
})
export default UserProfile
