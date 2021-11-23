/* eslint-disable no-unused-vars */
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FC, memo } from 'react'

interface IPanelCardProps {
  title: string
  description: string
  icon: IconProp
  grayColor: boolean
  currencyText?: boolean
  switchButton?: boolean
}

const PanelCard: FC<IPanelCardProps> = memo(({ title }) => {
  console.info('hey')
  return (
    <>
      <div>{title}</div>
    </>
  )
})

export default PanelCard
