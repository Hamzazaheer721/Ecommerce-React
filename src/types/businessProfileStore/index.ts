export interface IStoreProfileErrors {
  nameError: string
  whatsappError: string
  business_urlError: string
  industryError: string
  industry_typeError: string
  descriptionError: string
}

export type IStoreProfileErrorType = Partial<IStoreProfileErrors>
