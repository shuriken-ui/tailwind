import type { SwitchThinVariant } from './switch-thin.types'

export const color = {
  primary: 'nui-switch-thin-primary',
  info: 'nui-switch-thin-info',
  success: 'nui-switch-thin-success',
  warning: 'nui-switch-thin-warning',
  danger: 'nui-switch-thin-danger',
  dark: 'nui-switch-thin-dark',
  black: 'nui-switch-thin-black',
} as const satisfies SwitchThinVariant<'color'>
