/* eslint-disable no-unused-vars */
export enum IBankActionTypeEnum {
  DEPOSIT = 'DEPOSIT',
  WITHDRAW = 'WITHDRAW',
  BANKRUPT = 'BANKRUPT'
}

interface IDepositeAction {
  type: IBankActionTypeEnum.DEPOSIT,
  payload: number
}

interface IWithdrawAction {
  type: IBankActionTypeEnum.WITHDRAW,
  payload: number,
}

interface IBankruptActon {
  type: IBankActionTypeEnum.BANKRUPT
}

export type IBankActions = IDepositeAction | IWithdrawAction | IBankruptActon
