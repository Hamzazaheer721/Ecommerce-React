import { useState, useCallback } from 'react'

const useForm = () => {
  const [discountType, setdiscountType] = useState<string>('Amount')
  const handleChange = useCallback(
    (value: any) => {
      setdiscountType(value)
    },
    [discountType]
  )
  return { handleChange, discountType }
}

export default useForm
