export const key = 'text' as const

export const defaultConfig = {
  textXS: 'xs',
  textSM: 'sm',
  textMD: 'base',
  textLG: 'lg',
  textXL: 'xl',
  text2XL: '2xl',
  text3XL: '3xl',
  text4XL: '4xl',
  text5XL: '5xl',
  text6XL: '6xl',
  text7XL: '7xl',
  text8XL: '8xl',
  text9XL: '9xl',
  textLight: 'light',
  textNormal: 'normal',
  textMedium: 'medium',
  textSemibold: 'semibold',
  textBold: 'bold',
  textExtrabold: 'extrabold',
  textLeadNone: 'none',
  textLeadNormal: 'normal',
  textLeadTight: 'tight',
  textLeadSnug: 'snug',
  textLeadLoose: 'loose',
}

export type TextConfig = typeof defaultConfig
export interface TextPluginConfig {
  [key]: TextConfig
}
