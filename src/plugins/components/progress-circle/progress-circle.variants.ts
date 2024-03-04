import type { ProgressCircleVariant } from './progress-circle.types'

export const color = {
  light: 'text-muted-500 dark:text-muted-400',
  dark: 'text-muted-900 dark:text-muted-100',
  black: 'text-black dark:text-white',
  primary: 'text-primary-500',
  info: 'text-info-500',
  success: 'text-success-500',
  warning: 'text-warning-500',
  danger: 'text-danger-500',
} as const satisfies ProgressCircleVariant<'color'>
