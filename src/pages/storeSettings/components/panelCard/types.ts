import { IconProp } from '@fortawesome/fontawesome-svg-core';

export type IPanelCardWithSwitch = {
  switchButton: true,
  icon: IconProp,
  title: string,
  grayColor: boolean,
  description: string
  currencyText: false
}

export type IPanelCardWithoutSwitch = {
  currencyText: true,
  icon: IconProp,
  title: string
  grayColor: boolean,
  description: string
  switchButton: false
}

export type IPanelCardType = IPanelCardWithSwitch | IPanelCardWithoutSwitch
