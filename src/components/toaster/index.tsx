import { FC, memo, useMemo, MouseEvent } from 'react'
import { faCheck, faTimes } from '@fortawesome/pro-light-svg-icons'
import { faInfo } from '@fortawesome/free-solid-svg-icons'
import { filterColor, htmlTexts } from './helper'
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
  // eslint-disable-next-line no-unused-vars
  handleClick?: (e: MouseEvent<HTMLHeadingElement>) => void
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
                  <>Your Account has been successfully activated!</>
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
                    (Resend Activation Link?)
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
                {description ? (
                  <>
                    {description.trim().toLowerCase() ===
                    htmlTexts.forgotPassword.trim().toLowerCase() ? (
                      <>
                        Enter your
                        <b> WhatsApp Number </b>
                        or
                        <b> Email Address</b>
                        <>.</>
                      </>
                    ) : (
                      <>
                        {description.trim().toLowerCase() ===
                        htmlTexts.resetPassword.trim().toLowerCase() ? (
                          <>
                            Enter your
                            <b> New Password!</b>
                          </>
                        ) : (
                          { description }
                        )}
                      </>
                    )}
                  </>
                ) : (
                  <>
                    <> Enter your New Password</>
                  </>
                )}
              </Description>
            </>
          )}
        </RightContainer>
      </ToastContainer>
    )
  }
)
export default ToastComponent
