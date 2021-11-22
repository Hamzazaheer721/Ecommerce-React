import { useState, useCallback, ChangeEvent } from 'react'
import { IInputFormInitialValue } from './helper'
import { IInputFormType } from './types'

const useStoreForm = () => {
  const [inputData, setInputData] = useState<IInputFormType>(
    IInputFormInitialValue
  )

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target
      setInputData({ ...inputData, [name]: value })
    },
    [inputData]
  )

  return handleChange
}

export default useStoreForm
