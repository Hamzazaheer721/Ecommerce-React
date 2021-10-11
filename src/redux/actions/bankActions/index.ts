import { Dispatch } from 'redux'
import { IBankActions, IBankActionTypeEnum } from './types'

export const depositMoney = (money: number) => (dispatch : Dispatch<IBankActions>) => {
  dispatch({
    type: IBankActionTypeEnum.DEPOSIT,
    payload: money
  })
}

export const withdrawMoney = (money : number) => (dispatch : Dispatch<IBankActions>) => {
  dispatch({
    type: IBankActionTypeEnum.WITHDRAW,
    payload: money
  })
}

export const bankupt = () => (dispatch : Dispatch<IBankActions>) => {
  dispatch({
    type: IBankActionTypeEnum.BANKRUPT
  })
}
