export type IModalStateType = {
  modalVisibility: boolean
  modalType: 'success' | 'discount' | 'order' | 'alert' | ''
  description?: string
  nextScreen?: string
  methodType?: 'deactivateAccount' | ''
  callbackOnOK?: () => void
}
