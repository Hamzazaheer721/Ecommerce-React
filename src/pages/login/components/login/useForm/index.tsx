import {
  MouseEvent,
  ChangeEvent,
  useCallback,
  useEffect,
  useState
} from 'react'
import { AxiosResponse } from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import produce from 'immer'
import { addUserAction } from '../../../../../redux/features/userSigninSlice'
import { IUserLoginRtnResponse } from '../../../../../types/user'
import { SERVER_IP } from '../../../../../config/constants'
import { Instance } from '../../../../../config/axios'
// import { loginUser } from '../../../../../redux/features/userSigninSlice';
import { validateInputForm } from './helper'
import {
  IInputformType,
  IInputformErrorsType,
  IInputformInitialValue
} from './types'
import { RootState } from '../../../../../redux/store'

export const useFormLogin = () => {
  const dispatch = useDispatch()

  const [inputData, setInputData] = useState<IInputformType>(IInputformInitialValue)
  const { remember } = inputData

  const [errors, setErrors] = useState<IInputformErrorsType>({})

  const { user } = useSelector(
    (state: RootState) => state.user
  )

  useEffect(() => {
    if (user && remember) {
      localStorage.setItem(
        'token',
        JSON.stringify(user.auth_token)
      )
      localStorage.setItem('user', JSON.stringify(user))
    }
  }, [user])

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target
      name === 'remember'
        ? setInputData({
          ...inputData,
          [name]: e.target.checked
        })
        : setInputData({ ...inputData, [name]: value })
    },
    [inputData]
  )

  const makeApiCall = useCallback(async () => {
    const updatedData: Omit<IInputformType, 'remember'> = produce(inputData, (draft) => {
      // eslint-disable-next-line no-param-reassign
      delete draft.remember
      return draft
    })
    await Instance.post<any>(
      `${SERVER_IP}/user/login`,
      updatedData
    )
      .then((res: AxiosResponse<IUserLoginRtnResponse>) => {
        if (res.data) {
          dispatch(addUserAction(res.data.data))
        }
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error(error.response.data)
      })
  }, [inputData])

  const handleSubmit = useCallback(
    async (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()
      const validateErrors = validateInputForm(inputData)
      setErrors(validateErrors)
      if (!Object.keys(errors).length) makeApiCall()
    },
    [inputData, errors]
  )

  return {
    inputData,
    errors,
    handleChange,
    handleSubmit
  }
}
