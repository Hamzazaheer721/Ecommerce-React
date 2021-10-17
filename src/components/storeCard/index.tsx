import { memo } from 'react'
import {
  faStar,
  faShareAlt,
  faHeart,
  faStoreAlt
} from '@fortawesome/pro-light-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import {
  CardContainer,
  GroupContainer,
  HeaderArea,
  SubHeaderArea,
  BadgeArea,
  IconArea,
  TimeArea,
  CardImage,
  ProfileContainer,
  ProfileImage,
  ProductName,
  RatingArea,
  IconStyle,
  IconContainer,
  BadgeAreaWraper,
  RatingIconStyle,
  Description,
  ButtonsContainer,
  ShopButton,
  ButtonIcon,
  WhatsAppButton
} from './index.styled'

const StoreCardComponent = memo(() => {
  const temArray = [
    {
      no: '1'
    },
    {
      no: '1'
    },
    {
      no: '1'
    },
    {
      no: '1'
    },
    {
      no: '1'
    }
  ]

  return (
    <div>
      {temArray.map((card) => (
        <>
          <CardContainer>
            <GroupContainer>
              <HeaderArea>
                <SubHeaderArea>
                  <BadgeAreaWraper>
                    <BadgeArea>
                      Top Rated
                      {card.no}
                    </BadgeArea>
                  </BadgeAreaWraper>
                  <IconArea>
                    <IconContainer>
                      <IconStyle
                        icon={faShareAlt}
                        style={{
                          paddingRight: '6px'
                        }}
                      />
                      <IconStyle icon={faHeart} />
                    </IconContainer>
                  </IconArea>
                </SubHeaderArea>
              </HeaderArea>
              <TimeArea>30 min</TimeArea>
              <CardImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
              <ProfileContainer>
                <ProfileImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
                <ProductName>WhatsPays Demo</ProductName>
                <RatingArea>
                  <RatingIconStyle icon={faStar} />
                  4.7
                </RatingArea>
              </ProfileContainer>
            </GroupContainer>
            <br />
            <br />
            <Description>
              Chinese, Pakistani, Bakery, Pizza, Coffee,
              Cake Chinese, Pakistani, Bakery, Pizza,
              Coffee, Cake
            </Description>
            <ButtonsContainer>
              <ShopButton>
                <ButtonIcon icon={faStoreAlt} />
                Shop
              </ShopButton>
              <WhatsAppButton>
                <ButtonIcon icon={faWhatsapp} />
                WhatsApp
              </WhatsAppButton>
            </ButtonsContainer>
          </CardContainer>
        </>
      ))}
    </div>
  )
})

export default StoreCardComponent
