import { MouseEvent, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'

const useContactFields = () => {
  const locationFieldsState = useSelector(
    (state: RootState) => state.currentAddressLocation
  )

  const contactFieldsState = useSelector(
    (state: RootState) => state.contactFields
  )

  const handleSubmit = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    e.stopPropagation()
  }, [])

  return { handleSubmit, locationFieldsState, contactFieldsState }
}

export default useContactFields
