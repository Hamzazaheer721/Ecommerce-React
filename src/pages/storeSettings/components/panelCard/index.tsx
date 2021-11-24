/* eslint-disable no-unused-vars */
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC, memo } from 'react'
import SwitchButton from '../../../../components/switchButton'
import {
  PanelCardContainer,
  PanelCardLeftContainer,
  PanelCardRightContainer,
  PanelCardRightHeaderContainer
} from './index.styled'

interface IPanelCardProps {
  title: string
  description: string
  icon: IconProp
  grayColor: boolean
  currencyText?: boolean
  switchButton?: boolean
}

const PanelCard: FC<IPanelCardProps> = memo(
  ({ title, grayColor, icon, switchButton, currencyText }) => {
    // eslint-disable-next-line no-console
    console.info('hey')
    return (
      <PanelCardContainer $grayColor={!!grayColor}>
        <PanelCardLeftContainer>
          <FontAwesomeIcon icon={icon} />
        </PanelCardLeftContainer>
        <PanelCardRightContainer>
          <PanelCardRightHeaderContainer>
            <>{title}</>
            <>
              {switchButton && <SwitchButton size="small" />}
              {currencyText && <span>PKR</span>}
            </>
          </PanelCardRightHeaderContainer>
        </PanelCardRightContainer>
      </PanelCardContainer>
    )
  }
)

export default PanelCard
