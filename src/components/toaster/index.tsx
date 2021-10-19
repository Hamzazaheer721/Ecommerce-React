import { FC, memo, useRef } from 'react'
import { faCheck, faTimes } from '@fortawesome/pro-light-svg-icons'
import { faInfo } from '@fortawesome/free-solid-svg-icons'
import { filterColor } from './helper'
import { IColorObjectProp } from './types'
import {
  ToastContainer,
  CheckIcon,
  TitleContainer,
  CrossIcon,
  Description
} from './index.styled'

interface IToastProps {
  toastType: 'success' | 'error' | 'info'
}

const ToastComponent: FC<IToastProps> = memo(({ toastType }: IToastProps) => {
  // I will memoize it later
  // const colorProp = useMemo(() => {
  //   filterColor(toastType)
  // }, [toastType])

  const colorPropRef = useRef<IColorObjectProp>(filterColor(toastType))

  return (
    <ToastContainer colorProp={colorPropRef.current}>
      <h2>
        {toastType === 'success' && (
          <CheckIcon icon={faCheck} colorProp={colorPropRef.current} />
        )}
        {toastType === 'error' && (
          <CheckIcon icon={faTimes} colorProp={colorPropRef.current} />
        )}
        {toastType === 'info' && (
          <CheckIcon icon={faInfo} colorProp={colorPropRef.current} />
        )}
      </h2>
      <TitleContainer colorProp={colorPropRef.current}>
        {toastType === 'success' && (
          <h2>
            Congratulation
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
            <span>Your Account has been successfully activated!</span>
          </Description>
        )}
        {toastType === 'error' && (
          <Description>
            <span>Password </span>
            doesn`t match!
          </Description>
        )}
        {toastType === 'info' && (
          <Description>Enter your New Password!</Description>
        )}
      </TitleContainer>
    </ToastContainer>
  )
})
export default ToastComponent
