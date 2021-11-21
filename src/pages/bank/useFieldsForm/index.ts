import { useState, useCallback, ChangeEvent, MouseEvent } from 'react'
import { useDispatch } from 'react-redux'
import { IInputFormInitialValue } from './helper'
import { IInputFormType } from './types'
import { updateBankInfo } from '../../../redux/features/updateBankInfo/apiActions'

const useBankForm = () => {
  const [inputData, setInputData] = useState<IInputFormType>(
    IInputFormInitialValue
  )

  const dispatch = useDispatch()
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target
      setInputData({ ...inputData, [name]: value })
    },
    [inputData]
  )
  const handlePhoneChange = useCallback(
    (_val, _data) => {
      console.info('phone data', _val)
      const { dialCode } = _data
      setInputData({
        ...inputData,
        acc_holder_mobile_number: `+${dialCode}${_val}`
        // eslint-disable-next-line prefer-template
      })
    },
    [inputData]
  )
  const handleSubmit = useCallback(
    async (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()
      console.info('this data going to dispatch', inputData)
      dispatch(updateBankInfo(inputData))
    },
    [inputData]
  )

  return { handleChange, handlePhoneChange, handleSubmit, inputData }
}

export default useBankForm
