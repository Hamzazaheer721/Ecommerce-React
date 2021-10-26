import { FC, memo, useMemo } from 'react'
import { faCheck, faTimes } from '@fortawesome/pro-light-svg-icons'
import { faInfo } from '@fortawesome/free-solid-svg-icons'
import { filterColor } from './helper'
import { IColorObjectProp } from './types'
import {
  ToastContainer,
  Icon,
  TitleContainer,
  CrossIcon,
  Description,
  LinkText
} from './index.styled'

interface IToastProps {
  toastType: 'success' | 'error' | 'info'
  description?: string
  linkType?: 'send' | 'resend'
}

const ToastComponent: FC<IToastProps> = memo(
  ({ toastType, description, linkType }: IToastProps) => {
    const colors: IColorObjectProp = useMemo(
      () => filterColor(toastType),
      [toastType]
    )
    return (
      <ToastContainer colors={colors}>
        <h2>
          {toastType === 'success' && <Icon icon={faCheck} colors={colors} />}
          {toastType === 'error' && <Icon icon={faTimes} colors={colors} />}
          {toastType === 'info' && <Icon icon={faInfo} colors={colors} />}
        </h2>
        <TitleContainer colors={colors}>
          {toastType === 'success' && (
            <>
              <h2>
                Congratulation
                <CrossIcon icon={faTimes} />
              </h2>
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
              <h2>
                Error
                <CrossIcon icon={faTimes} />
              </h2>
              <Description>
                {description}
                {!description && (
                  <>
                    <span>Password </span>
                    doesn`t match!
                  </>
                )}
                {linkType === 'send' && (
                  <LinkText>Send Activation Link</LinkText>
                )}
                {linkType === 'resend' && (
                  <LinkText>Resend Activation Link</LinkText>
                )}
              </Description>
            </>
          )}
          {toastType === 'info' && (
            <>
              <h2>
                Info
                <CrossIcon icon={faTimes} />
              </h2>
              <Description>
                {description}
                {!description && <>Enter your New Password!</>}
              </Description>
            </>
          )}
        </TitleContainer>
      </ToastContainer>
    )
  }
)
export default ToastComponent
