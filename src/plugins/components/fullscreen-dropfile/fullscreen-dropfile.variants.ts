import type { FullscreenDropfileVariant } from './fullscreen-dropfile.types'

export const color = {
  primary: 'nui-dropfile-primary',
  dark: 'nui-dropfile-dark',
  black: 'nui-dropfile-black',
} as const satisfies FullscreenDropfileVariant<'color'>
