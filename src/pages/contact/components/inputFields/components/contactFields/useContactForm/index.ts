import { ChangeEvent, useCallback } from 'react';
import { useSelector } from 'react-redux'
import { RootState } from '../../../../../../../redux/store/index'

const useContactForm = () => {
  const contactFieldsState = useSelector(
    (state: RootState) => state.contactFields
  )
  const { email, phone_number, mobile_number, website, ntn_num } =
    contactFieldsState;

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    e.stopPropagation();
  }, [])

  return {
    handleChange,
    email,
    phone_number,
    mobile_number,
    ntn_num,
    website
  }
}

export default useContactForm
