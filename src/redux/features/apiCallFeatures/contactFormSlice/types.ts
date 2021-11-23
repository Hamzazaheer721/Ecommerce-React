export interface IContactFormStateType {
  message: string
  success: boolean
  loading: boolean
}

export type IContactFormPayloadRtn = {
  message: string
  success: boolean
}

export type IContactFormErrorPayloadRtn = IContactFormPayloadRtn
