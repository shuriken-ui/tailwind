import type { SwitchBallVariant } from './switch-ball.types'

export const color = {
  primary: 'nui-switch-ball-primary',
  info: 'nui-switch-ball-info',
  success: 'nui-switch-ball-success',
  warning: 'nui-switch-ball-warning',
  danger: 'nui-switch-ball-danger',
} as const satisfies SwitchBallVariant<'color'>
