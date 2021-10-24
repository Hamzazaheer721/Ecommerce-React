import { useState, useCallback, ChangeEvent } from 'react'
import {
  initialState
} from './helper'
import { IRegisterType } from './types'

const useForm = () => {
  const [registerData, setRegisterData] = useState<
    IRegisterType
  >(initialState)
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target
      name === 'checkbox'
        ? setRegisterData({
          ...registerData,
          [name]: e.target.checked
        })
        : setRegisterData({
          ...registerData,
          [name]: value
        })
    },
    [registerData]
  );

  return { registerData, handleChange }
}

export default useForm
