import type { ProgressCircleVariant } from './progress-circle.types'

export const color = {
  primary: 'text-primary-500',
  info: 'text-info-500',
  success: 'text-success-500',
  warning: 'text-warning-500',
  danger: 'text-danger-500',
} as const satisfies ProgressCircleVariant<'color'>
