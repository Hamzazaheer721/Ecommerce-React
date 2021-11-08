import { memo, useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { faSave } from '@fortawesome/pro-light-svg-icons'
import { ButtonContainerInner } from './index.styled'
import ButtonComponent from '../../../components/genericButton'
import { ButtonContainer } from '../../../styles/global'

const Button = memo(() => {
  const theme = useContext(ThemeContext)

  return (
    <ButtonContainer>
      <ButtonContainerInner>
        <ButtonComponent
          icon={faSave}
          label="Save"
          color={theme.color.primary}
        />
      </ButtonContainerInner>
    </ButtonContainer>
  )
})

export default Button
