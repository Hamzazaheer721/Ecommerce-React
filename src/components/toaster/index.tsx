import { FC, memo, useMemo } from 'react'
import { faCheck, faTimes } from '@fortawesome/pro-light-svg-icons'
import { faInfo } from '@fortawesome/free-solid-svg-icons'
import { filterColor } from './helper'
import { IColorObjectProp } from './types'
import {
  ToastContainer,
  CheckIcon,
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
          {toastType === 'success' && (
            <CheckIcon icon={faCheck} colors={colors} />
          )}
          {toastType === 'error' && (
            <CheckIcon icon={faTimes} colors={colors} />
          )}
          {toastType === 'info' && <CheckIcon icon={faInfo} colors={colors} />}
        </h2>
        <TitleContainer colors={colors}>
          {linkType === 'send' && (
            <h2>
              send link here
              <CrossIcon icon={faTimes} />
            </h2>
          )}

          {toastType === 'error' && (
            <h2>
              Error
              <CrossIcon icon={faTimes} />
            </h2>
          )}
          {toastType === 'info' && (
            <h2>
              Info
              <CrossIcon icon={faTimes} />
            </h2>
          )}

          {toastType === 'success' && (
            <Description>
              {description}
              {!description && (
                <span>Your Account has been successfully activated!</span>
              )}
            </Description>
          )}
          {toastType === 'error' && (
            <div>
              <Description>
                {description}
                {!description && (
                  <>
                    <span>Password </span>
                    doesn`t match!
                  </>
                )}
              </Description>
              <Description>
                {linkType === 'resend' && <LinkText>resend link here</LinkText>}
              </Description>
              <Description>
                {linkType === 'send' && <LinkText>send link here</LinkText>}
              </Description>
            </div>
          )}
          {toastType === 'info' && (
            <Description>
              {description}
              {!description && <>Enter your New Password!</>}
            </Description>
          )}
        </TitleContainer>
      </ToastContainer>
    )
  }
)
export default ToastComponent
