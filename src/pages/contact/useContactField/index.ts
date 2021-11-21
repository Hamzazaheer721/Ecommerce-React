import produce from 'immer'
import { MouseEvent, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'

const useContactFields = () => {
  const locationFieldsState = useSelector(
    (state: RootState) => state.currentAddressLocation
  )
  const {is_online} = locationFieldsState;

  const contactFieldsState = useSelector(
    (state: RootState) => state.contactFields
  )

  const handleSubmit = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    e.stopPropagation()

    const _loc: typeof locationFieldsState = produce(locationFieldsState, (draft) => draft)
    const _newLoc = {..._loc.address}
    const _loc_data = {..._newLoc, is_online: _loc.is_online}
    const _cont_data: typeof contactFieldsState = produce(contactFieldsState, (draft) => draft)
    const _updatedData = {..._loc, ..._cont_data}

    console.info('My data is ', _loc_data)
    console.info('updated Data: ', _updatedData)
  }, [])

  return { handleSubmit, is_online, locationFieldsState, contactFieldsState }
}

export default useContactFields
