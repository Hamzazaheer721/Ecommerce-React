import { useMemo, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { RootState } from '../../../../../redux/store'

const useForm = () => {
  const registerState = useSelector((state: RootState) => state.registerUser)
  const email = useMemo(() => registerState.user.email, [registerState])
  const history = useHistory()

  useEffect(() => {
    !registerState.user.email && history.goBack()
  }, [])

  return { email }
}

export default useForm
