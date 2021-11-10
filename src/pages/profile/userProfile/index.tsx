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
  // MapImage,
  SelectiveCardContainer,
  CardImage,
  CardTitle,
  SimpoleIcon,
  DeleteLinkText
} from './index.styled'
import ProfileImage from '../profileImage'
import Input from '../../../components/input'
import useUserProfileForm from '../useUserProfileForm'

const UserProfile = memo(() => {
  const { handleChange, handlePhoneChange } = useUserProfileForm()

  const nameField = useRef<HTMLInputElement>(null)
  const emailField = useRef<HTMLInputElement>(null)
  const phoneField = useRef<HTMLInputElement>(null)
  const passwordField = useRef<HTMLInputElement>(null)

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
              ref={phoneField}
              name="phone"
              label="WhatsApp Number"
              store
              phonefield
              prefix={faWhatsapp}
              value={phoneField && phoneField.current?.value}
              handlePhoneChange={handlePhoneChange}
            />
          </InputContainer>
          <InputContainer>
            <Input
              ref={passwordField}
              name="password"
              label="Password"
              prefix={faKey}
              value={passwordField && passwordField.current?.value}
              typePassword
              handleChange={handleChange}
            />
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
          <MapComponent
            height="300px"
            zoom={15}
            propsLat={59.955413}
            propsLong={30.337844}
          />
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
