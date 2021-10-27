import {
  useRef,
  useMemo,
  useState,
  useEffect,
  MouseEvent,
  useCallback,
  ChangeEvent
} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import produce from 'immer'
import { clearResendStates } from '../../../../../redux/features/resendActivationLinkSlice'
import { clearActivationMessageStates } from '../../../../../redux/features/activationSlice'
import { IActivationThunkArgType } from '../../../../../redux/features/activationSlice/types'
import { RootState } from '../../../../../redux/store'
import {
  clearAllStates,
  clearMessageStates
} from '../../../../../redux/features/userSignupSlice'
import { checkError, initialState } from './helper'
import { IActivationErrorType, IActivationType } from './types'
import { isObjectEmpty } from '../../../../../general/helper'
import { activateAccount } from '../../../../../redux/features/activationSlice/apiAction'
import { addUserAction } from '../../../../../redux/features/userSigninSlice'
import { resendActivationCode } from '../../../../../redux/features/resendActivationLinkSlice/apiAction'

const useForm = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const [activationData, setActivationData] =
    useState<IActivationType>(initialState)
  const { activation_code } = activationData

  const [error, setError] = useState<Partial<IActivationErrorType>>({})

  const registerState = useSelector((state: RootState) => state.registerUser)
  const loginState = useSelector((state: RootState) => state.user)
  const activationState = useSelector((state: RootState) => state.activation)
  const { loading, message, success, user } = activationState
  const resendState = useSelector((state: RootState) => state.resendActivation)
  const {
    loading: resendStateLoading,
    message: resendStateMessage,
    success: resendStateSuccess
  } = resendState

  const activationCodeRef = useRef<HTMLInputElement>(null)

  const email = useMemo(() => {
    setActivationData({ ...activationData, email: registerState.email })
    return registerState.email
  }, [registerState])

  // keeping online message in state for activation page and going back if email doesn't exist
  useEffect(() => {
    registerState.message && dispatch(clearMessageStates())
    !registerState.email && history.goBack()
  }, [])

  // dispatching user in redux and clearing all registerStates after going to home page
  const dispatchUser = useCallback(() => {
    user &&
      dispatch(addUserAction(user)) &&
      history.push('/') &&
      dispatch(clearAllStates())
  }, [activationState, loginState, registerState])

  // dispatching user if we have success message
  useEffect(() => {
    success && message && !loading && dispatchUser()
  }, [activationState, loginState])

  // updating the error message for the activation screen if error has been sent
  useEffect(() => {}, [])

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target
      setActivationData({ ...activationData, [name]: value })
    },
    [activationData]
  )

  // submitting activation page data
  const makeApiCall = useCallback(async () => {
    const newData: IActivationThunkArgType = produce(
      activationData,
      (draft) => {
        draft.activation_code = draft.activation_code.toUpperCase().trim()
        return draft
      }
    )
    dispatch(activateAccount(newData))
    dispatch(clearResendStates())
  }, [activationData, loading])

  const handleSubmit = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()
      const errorCheck = checkError(activation_code.trim())
      setError(errorCheck)
      isObjectEmpty(errorCheck) && makeApiCall()
    },
    [activationData, error]
  )

  const handleClick = useCallback(
    (e: MouseEvent<HTMLHeadingElement>) => {
      e.preventDefault()
      dispatch(resendActivationCode(email))
      dispatch(clearActivationMessageStates())
    },
    [email]
  )

  return {
    email,
    handleSubmit,
    handleClick,
    handleChange,
    error,
    activationData,
    success,
    message,
    resendStateLoading,
    resendStateMessage,
    resendStateSuccess,
    activationCodeRef
  }
}

export default useForm
