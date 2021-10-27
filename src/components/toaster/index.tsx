import { FC, memo, useMemo } from 'react'
import { faCheck, faTimes } from '@fortawesome/pro-light-svg-icons'
import { faInfo } from '@fortawesome/free-solid-svg-icons'
import { filterColor } from './helper'
import { IColorObjectProp } from './types'
import {
  ToastContainer,
  Icon,
  RightContainer,
  CrossIcon,
  Description,
  LinkText,
  LeftContainer,
  Heading
} from './index.styled'

interface IToastProps {
  toastType: 'success' | 'error' | 'info'
  description?: string
  linkType?: 'send' | 'resend'
  handleClick?: () => void
}

const ToastComponent: FC<IToastProps> = memo(
  ({ toastType, description, linkType, handleClick }: IToastProps) => {
    const colors: IColorObjectProp = useMemo(
      () => filterColor(toastType),
      [toastType]
    )

    return (
      <ToastContainer colors={colors}>
        <LeftContainer>
          {toastType === 'success' && <Icon icon={faCheck} colors={colors} />}
          {toastType === 'error' && <Icon icon={faTimes} colors={colors} />}
          {toastType === 'info' && <Icon icon={faInfo} colors={colors} />}
        </LeftContainer>
        <RightContainer colors={colors}>
          {toastType === 'success' && (
            <>
              <Heading>
                Congratulation
                <CrossIcon icon={faTimes} />
              </Heading>
              <Description>
                {description}
                {!description && (
                  <span>Your Account has been successfully activated!</span>
                )}
              </Description>
            </>
          )}
          {toastType === 'error' && (
            <>
              <Heading>
                Error
                <CrossIcon icon={faTimes} />
              </Heading>
              <Description>
                {description}
                {!description && (
                  <>
                    <span>Password </span>
                    doesn`t match!
                  </>
                )}
                {linkType === 'send' && (
                  <LinkText onClick={handleClick}>
                    Send Activation Link
                  </LinkText>
                )}
                {linkType === 'resend' && (
                  <LinkText onClick={handleClick}>
                    Resend Activation Link
                  </LinkText>
                )}
              </Description>
            </>
          )}
          {toastType === 'info' && (
            <>
              <Heading>
                Info
                <CrossIcon icon={faTimes} />
              </Heading>
              <Description>
                {description}
                {!description && <>Enter your New Password!</>}
              </Description>
            </>
          )}
        </RightContainer>
      </ToastContainer>
    )
  }
)
export default ToastComponent
