import type { InputHelpTextVariant } from './input-help-text.types'

export const color = {
  default: 'text-inherit',
  'default-contrast': 'text-inherit',
  muted: 'text-muted-500 dark:text-muted-400',
  'muted-contrast': 'text-muted-500 dark:text-muted-400',
  primary: 'text-primary-500',
  info: 'text-info-500',
  success: 'text-success-500',
  warning: 'text-warning-500',
  danger: 'text-danger-500',
  light: 'text-muted-100',
  dark: 'text-muted-900 dark:text-muted-100',
  black: 'text-black dark:text-white',
  none: '',
} as const satisfies InputHelpTextVariant<'color'>
