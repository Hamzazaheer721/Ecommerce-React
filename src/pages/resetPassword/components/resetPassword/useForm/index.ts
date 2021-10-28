import {
  useRef,
  useState,
  useCallback,
  useEffect,
  MouseEvent,
  ChangeEvent
} from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { isObjectEmpty } from '../../../../../general/helper'
import { RootState } from '../../../../../redux/store'
import { IResetPasswordInitialState, validateErrors } from './helper'
import { IResetPasswordErrorTypes, IResetPasswordStateTypes } from './types'

const useForm = () => {
  const history = useHistory()
  const [resetPasswordData, setResetPasswordData] =
    useState<IResetPasswordStateTypes>(IResetPasswordInitialState)
  const [errors, setErrors] = useState<Partial<IResetPasswordErrorTypes>>({})
  const { passwordError, confirmationPasswordError, activationCodeError } =
    errors

  const { username } = useSelector((state: RootState) => state.forgotPassword)

  useEffect(() => {
    !username && history.goBack()
  }, [])

  const activationRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const confirmPasswordRef = useRef<HTMLInputElement>(null)

  const makeApiCall = useCallback(() => {}, [])

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
  }, [])

  const handleSubmit = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()
      const checkErrors = validateErrors(resetPasswordData)
      setErrors(errors)
      isObjectEmpty(checkErrors) && makeApiCall()
    },
    [errors, resetPasswordData]
  )

  return {
    resetPasswordData,
    errors,
    setResetPasswordData,
    activationRef,
    passwordRef,
    confirmPasswordRef,
    handleChange,
    handleSubmit,
    passwordError,
    confirmationPasswordError,
    activationCodeError
  }
}

export default useForm
