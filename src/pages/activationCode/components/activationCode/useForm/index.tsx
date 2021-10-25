import { useMemo, useEffect, useCallback, useState, ChangeEvent } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { RootState } from '../../../../../redux/store'
import { initialState } from './helper'
import { IActivationErrorType, IActivationType } from './types'

const useForm = () => {
  const history = useHistory()

  const [activationData] = useState<IActivationType>(initialState)

  const [error] = useState<Partial<IActivationErrorType>>({})
  const registerState = useSelector((state: RootState) => state.registerUser)
  const email = useMemo(() => registerState.user.email, [registerState])

  useEffect(() => {
    !registerState.user.email && history.goBack()
  }, [])

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    console.info(e)
  }, [])

  const handleSubmit = useCallback(() => {}, [])

  return { email, handleSubmit, handleChange, error, activationData }
}

export default useForm
