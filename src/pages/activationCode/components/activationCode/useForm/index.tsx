import {
  useMemo,
  useEffect,
  useCallback,
  useState,
  ChangeEvent,
  MouseEvent
} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import produce from 'immer'
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

  const email = useMemo(() => {
    setActivationData({ ...activationData, email: registerState.email })
    return registerState.email
  }, [registerState])

  useEffect(() => {
    registerState.message && dispatch(clearMessageStates())
    !registerState.email && history.goBack()
  }, [])

  const dispatchUser = useCallback(() => {
    user &&
      dispatch(addUserAction(user)) &&
      history.push('/') &&
      dispatch(clearAllStates())
  }, [activationState, loginState, registerState])

  useEffect(() => {
    // message && !loading && history.push('/login')
    success && message && !loading && dispatchUser()
  }, [activationState, loginState])

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target
      setActivationData({ ...activationData, [name]: value })
    },
    [activationData]
  )

  const makeApiCall = useCallback(async () => {
    const newData: IActivationThunkArgType = produce(
      activationData,
      (draft) => {
        // eslint-disable-next-line no-param-reassign
        draft.activation_code = draft.activation_code.toUpperCase()
        return draft
      }
    )
    dispatch(activateAccount(newData))
  }, [activationData, loading])

  const handleSubmit = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()
      const errorCheck = checkError(activation_code)
      setError(errorCheck)
      isObjectEmpty(errorCheck) && makeApiCall()
    },
    [activationData, error]
  )

  return {
    email,
    handleSubmit,
    handleChange,
    error,
    activationData,
    success,
    message
  }
}

export default useForm
