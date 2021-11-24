import { IconProp } from '@fortawesome/fontawesome-svg-core'

export type IPanelCardWithSwitch = {
  switchButton: true
  icon: IconProp
  title: string
  grayColor: boolean
  description: string
  currencyText: false
  checkboxes: false
}

export type IPanelCardWithoutSwitch = {
  currencyText: true
  icon: IconProp
  title: string
  grayColor: boolean
  description: string
  switchButton: false
  checkboxes: false
}

export type IPanelCardWithCheck = {
  icon: IconProp
  title: string
  grayColor: boolean
  description?: string
  currencyText: false
  switchButton: false
  checkboxes: true
}

export type IPanelCardType =
  | IPanelCardWithSwitch
  | IPanelCardWithoutSwitch
  | IPanelCardWithCheck
