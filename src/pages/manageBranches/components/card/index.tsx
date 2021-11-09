import { memo, useContext } from 'react'
import {
  faCog,
  faPen,
  faTrashAlt,
  faMapMarkerAlt
} from '@fortawesome/pro-light-svg-icons'
import { ThemeContext } from 'styled-components'
import {
  Container,
  MultipleStoreContainer,
  PlaceIcon,
  CardTitle,
  IconsContainer,
  Icon,
  AntSwitch,
  CardContainer
} from './index.styled'
import { Cards } from './helper'
import { LoginViewContainer } from '../../../../styles/global'

const Card = memo(() => {
  const theme = useContext(ThemeContext)

  return (
    <Container>
      <LoginViewContainer secondLayout>
        {Cards.map((card: any, index: number) => (
          <CardContainer giveBackroundColor={!!(index % 2)}>
            <MultipleStoreContainer>
              <PlaceIcon icon={faMapMarkerAlt} />
              <CardTitle>
                {card.no}
                Roadies Exprress - Gulberg 3
                <br />
                <span>144/C,Eidhi Road, Gulberg, Lahore.</span>
                <br />
                <span>+92 321 7325147</span>
              </CardTitle>
            </MultipleStoreContainer>
            <IconsContainer>
              <Icon icon={faCog} />
              <AntSwitch size="small" />
              <Icon icon={faPen} PropsColor={theme.color.yellow} />
              <Icon icon={faTrashAlt} PropsColor={theme.color.red} />
            </IconsContainer>
          </CardContainer>
        ))}
      </LoginViewContainer>
    </Container>
  )
})

export default Card
