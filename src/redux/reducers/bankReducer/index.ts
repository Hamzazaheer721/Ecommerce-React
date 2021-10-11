import { IBankActions, IBankActionTypeEnum } from '../../actions/bankActions/types';

const initialValue: number = 0;

const bankReducer = (state: number = initialValue, action: IBankActions) => {
  const { type } = action;
  switch (type) {
    case IBankActionTypeEnum.DEPOSIT:
      return state + action.payload;
    case IBankActionTypeEnum.WITHDRAW:
      return state - action.payload;
    case IBankActionTypeEnum.BANKRUPT:
      return 0;
    default:
      return state;
  }
}
export default bankReducer;
