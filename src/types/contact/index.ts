import { IContactType } from '../../redux/features/contactFieldsSlice/types';
import { IGeoAddressType } from '../geoLocation';

export type IContactPayloadArg = IGeoAddressType & {is_online: boolean} & IContactType
