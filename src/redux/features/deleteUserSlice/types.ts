export type IDeleteUserPayloadRtn = {
  success: boolean
  data: []
  message: string
}

export type IDeleteUserRejectPayload = {
  success: boolean
  message: string
}

export type IDeleteUserStateType = {
  loading: boolean
  deleteUserStatus: boolean
  success: boolean
  message: string
}
