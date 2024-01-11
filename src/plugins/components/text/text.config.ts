export const key = 'text' as const

export const defaultConfig = {
  size: {
    xs: 'xs',
    sm: 'sm',
    md: 'base',
    lg: 'lg',
    xl: 'xl',
    xxl: '2xl',
    xxxl: '3xl',
    xxxxl: '4xl',
    xxxxxl: '5xl',
    xxxxxxl: '6xl',
    xxxxxxxl: '7xl',
    xxxxxxxxl: '8xl',
    xxxxxxxxxl: '9xl',
  },
  weight: {
    light: 'light',
    normal: 'normal',
    medium: 'medium',
    semibold: 'semibold',
    bold: 'bold',
    extrabold: 'extrabold',
  },
  lead: {
    none: 'none',
    normal: 'normal',
    tight: 'tight',
    snug: 'snug',
    loose: 'loose',
  },
}

export type TextConfig = typeof defaultConfig
export interface TextPluginConfig {
  [key]: TextConfig
}
