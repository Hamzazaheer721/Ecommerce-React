import produce from 'immer'
import {
  useRef,
  useState,
  useMemo,
  useCallback,
  useEffect,
  MouseEvent,
  ChangeEvent
} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'

import { isObjectEmpty } from '../../../../../general/helper'
import { openModal } from '../../../../../redux/features/modalSlice'
import { clearAllResetPasswordSliceStates } from '../../../../../redux/features/resetPasswordSlice'
import { resetPassword, resetPasswordWithLink } from '../../../../../redux/features/resetPasswordSlice/apiAction'
import { RootState } from '../../../../../redux/store'
import { IResetPasswordInitialState, validateErrors } from './helper'
import {
  IResetPasswordErrorTypes,
  IResetPasswordLinkStateTypes,
  IResetPasswordStateTypes
} from './types'

const useForm = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  const { userId } = useParams<{ userId: string }>()
  const hasParams = useMemo<boolean>(() => !!userId, [userId])

  const [resetPasswordData, setResetPasswordData] =
    useState<IResetPasswordStateTypes>(IResetPasswordInitialState)
  const [errors, setErrors] = useState<Partial<IResetPasswordErrorTypes>>({})
  const { passwordError, confirmationPasswordError, activationCodeError } =
    errors

  const { username } = useSelector((state: RootState) => state.forgotPassword)
  const { message: resetPasswordMessage, success: resetPasswordSuccess } =
    useSelector((state: RootState) => state.resetPassword)

  const activationRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const confirmPasswordRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    !username && history.goBack()
  }, [])

  useEffect(() => {
    resetPasswordSuccess &&
      resetPasswordMessage &&
      dispatch(
        openModal({
          modalType: 'success',
          description: resetPasswordMessage,
          nextScreen: '/login'
        })
      ) &&
      dispatch(clearAllResetPasswordSliceStates())
  }, [resetPasswordMessage, resetPasswordSuccess])

  const makeApiCall = useCallback(() => {
    if (!hasParams) {
      const updatedData: Omit<IResetPasswordStateTypes, 'userId'> = produce(
        resetPasswordData,
        (draft) => {
          draft.username = username
          draft.activation_code = draft.activation_code?.trim().toUpperCase()
          delete draft.userId
          return draft
        }
      )
      dispatch(resetPassword(updatedData))
    } else {
      const updatedData: IResetPasswordLinkStateTypes = produce(
        resetPasswordData,
        (draft) => {
          draft.userId = userId
          delete draft.activation_code
          delete draft.username
          return draft
        }
      )
      dispatch(resetPasswordWithLink(updatedData))
    }
  }, [resetPasswordData, hasParams])

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      e.preventDefault()
      const { name, value } = e.target
      setResetPasswordData({ ...resetPasswordData, [name]: value })
    },
    [resetPasswordData]
  )

  const handleSubmit = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()
      const checkErrors = validateErrors(resetPasswordData, hasParams)
      setErrors(checkErrors)
      isObjectEmpty(checkErrors) && makeApiCall()
    },
    [errors, resetPasswordData]
  )

  return {
    errors,
    hasParams,
    resetPasswordData,
    setResetPasswordData,
    activationRef,
    passwordRef,
    confirmPasswordRef,
    handleChange,
    handleSubmit,
    passwordError,
    confirmationPasswordError,
    activationCodeError,
    resetPasswordMessage,
    resetPasswordSuccess
  }
}

export default useForm
