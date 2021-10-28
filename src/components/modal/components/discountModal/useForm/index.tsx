import { useState, useCallback } from 'react'

const useForm = () => {
  const [discountType, setdiscountType] = useState<string>('Amount')
  const handleChange = useCallback(
    // i'll change any type
    (value: any) => {
      setdiscountType(value)
    },
    [discountType]
  )
  return { handleChange, discountType }
}

export default useForm
