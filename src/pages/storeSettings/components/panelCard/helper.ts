import {
  faBatteryEmpty,
  faFileInvoiceDollar,
  faMoneyBill
} from '@fortawesome/pro-light-svg-icons'
import { IPanelCardType } from './types'

export const panelCardBlock: IPanelCardType[] = [
  {
    icon: faBatteryEmpty,
    Title: 'Status',
    switchButton: true,
    description: 'Enable/Disable store on our listings page.',
    grayColor: false
  },
  {
    icon: faMoneyBill,
    Title: 'Cash on Delivery',
    switchButton: true,
    description: 'Enable/Disable cash on delivery for orders.',
    grayColor: true
  },
  {
    icon: faFileInvoiceDollar,
    Title: 'Service Charges',
    switchButton: true,
    description:
      'A charge of 10% (incl. VAT) transaction fee will be levied per order. Enable/ Disable whether this would be charged on the customer side.',
    grayColor: false
  },
  {
    icon: faMoneyBill,
    Title: 'Bussiness Currency',
    currencyText: true,
    description:
      'A currency conversion fee will apply to your transactions if your currency is different than your payout currency.',
    grayColor: true
  }
]
