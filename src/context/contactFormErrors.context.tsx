import produce from 'immer'
import { ElementType, memo, createContext, Dispatch, useReducer } from 'react'
import { IContactFormErrorType } from '../pages/contact/useContactField/types'

/// /////////////////////
/// ////// TYPES //////
/// //////////////////

export enum IContactActionKind {
  // eslint-disable-next-line no-unused-vars
  SET = 'SET'
}

interface IAction {
  type: IContactActionKind
  payload: Partial<IContactFormErrorType>
}

export const initialValue: Partial<IContactFormErrorType> = {}

/// ////////////////////
/// ///// ACTIONS /////
/// //////////////////

export const setContactFormErrors = (
  dispatch: Dispatch<IAction>,
  errors: Partial<IContactFormErrorType>
) => {
  dispatch({
    type: IContactActionKind.SET,
    payload: errors
  })
}

/// //////////////////
/// //// REDUCERS ///
/// ////////////////

const Reducer = (
  state: Partial<IContactFormErrorType>,
  action: IAction
): Partial<IContactFormErrorType> => {
  const { payload, type } = action
  switch (type) {
    case IContactActionKind.SET:
      return produce(state, (draft) => {
        draft = payload
        return draft
      })
    default:
      return state
  }
}

/// ////////////////
/// // CONTEXTS ///
/// //////////////

export const ContactFormErrorStateContext = createContext<
  Partial<IContactFormErrorType>
>({})
export const ContactFormErrorDispatchContext = createContext<Dispatch<IAction>>(
  () => {}
)

/// //////////////////
/// /// PROVIDER ////
/// ////////////////

const ContactFormErrorProvider: ElementType = memo(({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialValue)
  return (
    <ContactFormErrorStateContext.Provider value={state}>
      <ContactFormErrorDispatchContext.Provider value={dispatch}>
        {children}
      </ContactFormErrorDispatchContext.Provider>
    </ContactFormErrorStateContext.Provider>
  )
})

export default ContactFormErrorProvider
