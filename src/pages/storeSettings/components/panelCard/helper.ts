import {
  faBatteryEmpty,
  faFileInvoiceDollar,
  faMoneyBill
} from '@fortawesome/pro-light-svg-icons'
import { IPanelCardType } from './types'

export const panelCardBlock: IPanelCardType[] = [
  {
    icon: faBatteryEmpty,
    title: 'Status',
    switchButton: true,
    currencyText: false,
    description: 'Enable/Disable store on our listings page.',
    grayColor: false,
    checkboxes: false
  },
  {
    icon: faMoneyBill,
    title: 'Cash on Delivery',
    switchButton: true,
    currencyText: false,
    description: 'Enable/Disable cash on delivery for orders.',
    grayColor: true,
    checkboxes: false
  },
  {
    icon: faFileInvoiceDollar,
    title: 'Service Charges',
    switchButton: true,
    currencyText: false,
    description:
      'A charge of 10% (incl. VAT) transaction fee will be levied per order. Enable/ Disable whether this would be charged on the customer side.',
    grayColor: false,
    checkboxes: false
  },
  {
    icon: faMoneyBill,
    title: 'Bussiness Currency',
    currencyText: true,
    switchButton: false,
    description:
      'A currency conversion fee will apply to your transactions if your currency is different than your payout currency.',
    grayColor: true,
    checkboxes: false
  },
  {
    checkboxes: true,
    title: 'Service Options',
    icon: faFileInvoiceDollar,
    grayColor: false,
    currencyText: false,
    switchButton: false
  }
]
