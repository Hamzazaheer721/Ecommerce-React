import { FC, memo } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { HeaderContainer, Title } from './index.styled'

interface IHeaderProps {
  icon: IconProp
  title: string
}

const PanelHeader: FC<IHeaderProps> = memo(({ icon, title }: IHeaderProps) => (
  <HeaderContainer>
    <FontAwesomeIcon icon={icon} />
    <Title>{title}</Title>
  </HeaderContainer>
))

export default PanelHeader
