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

const useForm = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const [activationData, setActivationData] =
    useState<IActivationType>(initialState)
  const { activation_code } = activationData

  const [error, setError] = useState<Partial<IActivationErrorType>>({})

  const registerState = useSelector((state: RootState) => state.registerUser)
  const email = useMemo(() => {
    setActivationData({ ...activationData, email: registerState.email })
    return registerState.email
  }, [registerState])

  useEffect(() => {
    registerState.message && dispatch(clearMessageStates())
    !registerState.email && history.goBack()
  }, [])

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target
      setActivationData({ ...activationData, [name]: value })
    },
    [activationData]
  )

  const makeApiCall = useCallback(async () => {}, [])

  const handleSubmit = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()
      const errorCheck = checkError(activation_code)
      setError(errorCheck)
      !Object.keys(errorCheck).length &&
        !Object.keys(error).length &&
        makeApiCall()
    },
    [activationData]
  )

  return { email, handleSubmit, handleChange, error, activationData }
}

export default useForm
