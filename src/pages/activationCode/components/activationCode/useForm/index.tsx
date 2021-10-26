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
import { RootState } from '../../../../../redux/store'
import { clearMessageStates } from '../../../../../redux/features/userSignupSlice'
import { checkError, initialState } from './helper'
import { IActivationErrorType, IActivationType } from './types'
import { isObjectEmpty } from '../../../../../general/helper'
import { activateAccount } from '../../../../../redux/features/activationSlice/apiAction'

const useForm = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const [activationData, setActivationData] =
    useState<IActivationType>(initialState)
  const { activation_code } = activationData

  const [error, setError] = useState<Partial<IActivationErrorType>>({})

  const registerState = useSelector((state: RootState) => state.registerUser)
  const activationState = useSelector((state: RootState) => state.activation)
  const { loading, message } = activationState

  const email = useMemo(() => {
    setActivationData({ ...activationData, email: registerState.email })
    return registerState.email
  }, [registerState])

  useEffect(() => {
    registerState.message && dispatch(clearMessageStates())
    !registerState.email && history.goBack()
  }, [])

  useEffect(() => {
    message && !loading && history.push('/login')
  }, [activationState])

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target
      setActivationData({ ...activationData, [name]: value })
    },
    [activationData]
  )

  const makeApiCall = useCallback(async () => {
    dispatch(activateAccount(activationData))
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
    activationData
  }
}

export default useForm
