import { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { HeaderContainer, Title } from './index.styled'

interface IHeaderProps {
  icon: IconProp
  title: string
}

const Header: FC<IHeaderProps> = ({ icon, title }: IHeaderProps) => (
  <HeaderContainer>
    <FontAwesomeIcon icon={icon} />
    <Title>{title}</Title>
  </HeaderContainer>
)

export default Header
