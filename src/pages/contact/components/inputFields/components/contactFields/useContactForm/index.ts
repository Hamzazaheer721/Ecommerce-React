import { ChangeEvent, useCallback } from 'react';
import { useSelector } from 'react-redux'
import { IContactType } from '../../../../../../../redux/features/contactFieldsSlice/types';
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
    const {name, value} = e.target
    const _key : keyof IContactType = name as keyof IContactType
    // eslint-disable-next-line no-console
    console.info('key => ', _key, value)
  }, [contactFieldsState])

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
