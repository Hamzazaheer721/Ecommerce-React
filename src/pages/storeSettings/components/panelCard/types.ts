import { IconProp } from '@fortawesome/fontawesome-svg-core';

export type IPanelCardWithSwitch = {
  switchButton: true,
  icon: IconProp,
  Title: string,
  grayColor: boolean,
  description: string
}

export type IPanelCardWithoutSwitch = {
  currencyText: true,
  icon: IconProp,
  Title: string
  grayColor: boolean,
  description: string
}

export type IPanelCardType = IPanelCardWithSwitch | IPanelCardWithoutSwitch
