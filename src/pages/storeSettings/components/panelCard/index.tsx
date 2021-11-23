/* eslint-disable no-unused-vars */
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FC, memo } from 'react'
import { PanelCardContainer } from './index.styled'

interface IPanelCardProps {
  title: string
  description: string
  icon: IconProp
  grayColor: boolean
  currencyText?: boolean
  switchButton?: boolean
}

const PanelCard: FC<IPanelCardProps> = memo(({ title, grayColor }) => {
  console.info('hey')
  return (
    <PanelCardContainer $grayColor={!!grayColor}>
      <div>{title}</div>
    </PanelCardContainer>
  )
})

export default PanelCard
