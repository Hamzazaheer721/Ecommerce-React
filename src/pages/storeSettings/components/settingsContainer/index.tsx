import { FC, memo } from 'react'
import PanelCard from '../panelCard'
import { panelCardBlock } from '../panelCard/helper'
import { IPanelCardType } from '../panelCard/types'
import { PanelSettingsContainer } from './index.styled'

const SettingsContainer: FC = memo(() => (
  <PanelSettingsContainer>
    {panelCardBlock.map((_card: IPanelCardType) => (
      <PanelCard
        checkboxes={_card.checkboxes}
        title={_card.title}
        icon={_card.icon}
        currencyText={_card.currencyText}
        description={_card.description}
        grayColor={_card.grayColor}
        switchButton={_card.switchButton}
      />
    ))}
  </PanelSettingsContainer>
))

export default SettingsContainer
