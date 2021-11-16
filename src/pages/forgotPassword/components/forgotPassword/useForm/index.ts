import {
  useRef,
  useState,
  useCallback,
  useEffect,
  ChangeEvent,
  MouseEvent
} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { isObjectEmpty } from '../../../../../general/helper'
import { clearForgotPaswordSliceHelperStates } from '../../../../../redux/features/forgotPasswordSlice'
import { forgotPassword } from '../../../../../redux/features/forgotPasswordSlice/apiAction'
import { openModal } from '../../../../../redux/features/modalSlice'
import { RootState } from '../../../../../redux/store'
import { validateError } from './helper'
import { IForgotPasswordErrorsType } from './types'

const useForm = () => {
  const dispatch = useDispatch()

  const { success: forgotPasswordSuccess, message: forgotPasswordMessage } =
    useSelector((state: RootState) => state.forgotPassword)

  const usernameRef = useRef<HTMLInputElement>(null)

  const [username, setUsername] = useState<string>('')
  const [error, setError] = useState<IForgotPasswordErrorsType>({})
  const { usernameError } = error

  useEffect(() => () => {
      dispatch(clearForgotPaswordSliceHelperStates())
  }, [])

  useEffect(() => {
    forgotPasswordSuccess &&
      forgotPasswordMessage &&
      dispatch(
        openModal({
          modalType: 'success',
          description: forgotPasswordMessage,
          nextScreen: '/reset-password'
        })
      )
  }, [forgotPasswordMessage, forgotPasswordSuccess])

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      e.preventDefault()
      const { value } = e.target
      setUsername(value)
    },
    [username]
  )

  const makeApiCall = useCallback(async () => {
    dispatch(forgotPassword(username))
  }, [forgotPasswordMessage, forgotPasswordSuccess, username])

  const handleSubmit = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()
      const checkError = validateError(username)
      setError(checkError)
      isObjectEmpty(checkError) && makeApiCall()
    },
    [username]
  )

  return {
    usernameRef,
    username,
    handleChange,
    handleSubmit,
    usernameError,
    forgotPasswordSuccess,
    forgotPasswordMessage
  }
}

export default useForm
