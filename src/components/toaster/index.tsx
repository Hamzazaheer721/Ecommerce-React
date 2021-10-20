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
  toastType: 'success' | 'error' | 'info',
  description?: string
}

const ToastComponent: FC<IToastProps> = memo(({ toastType, description }: IToastProps) => {
  // I will memoize it later
  // const colors = useMemo(() => {
  //   filterColor(toastType)
  // }, [toastType])

  const colorsRef = useRef<IColorObjectProp>(filterColor(toastType))

  return (
    <ToastContainer colors={colorsRef.current}>
      <h2>
        {toastType === 'success' && (
          <CheckIcon icon={faCheck} colors={colorsRef.current} />
        )}
        {toastType === 'error' && (
          <CheckIcon icon={faTimes} colors={colorsRef.current} />
        )}
        {toastType === 'info' && (
          <CheckIcon icon={faInfo} colors={colorsRef.current} />
        )}
      </h2>
      <TitleContainer colors={colorsRef.current}>
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
            {description}
            {!description && <span>Your Account has been successfully activated!</span>}
          </Description>
        )}
        {toastType === 'error' && (
          <Description>
            {description}
            {!description && (
              <>
                <span>Password </span>
                {' '}
                doesn`t match!
                {' '}
              </>
            )}
          </Description>
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
})
export default ToastComponent
