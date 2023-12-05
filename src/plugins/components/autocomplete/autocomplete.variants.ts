import type { AutocompleteVariant } from './autocomplete.types'

export const rounded = {
  none: '',
  sm: 'nui-autocomplete-rounded',
  md: 'nui-autocomplete-smooth',
  lg: 'nui-autocomplete-curved',
  full: 'nui-autocomplete-full',
} as const satisfies AutocompleteVariant<'rounded'>

export const size = {
  sm: 'nui-autocomplete-sm',
  md: 'nui-autocomplete-md',
  lg: 'nui-autocomplete-lg',
} as const satisfies AutocompleteVariant<'size'>

export const contrast = {
  default: 'nui-autocomplete-default',
  'default-contrast': 'nui-autocomplete-default-contrast',
  muted: 'nui-autocomplete-muted',
  'muted-contrast': 'nui-autocomplete-muted-contrast',
} as const satisfies AutocompleteVariant<'contrast'>
