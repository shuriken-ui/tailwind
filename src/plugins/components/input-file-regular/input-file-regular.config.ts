export const key = 'inputFileRegular' as const

export const defaultConfig = {
  inner: {
    size: 'full',
    font: 'sans',
    duration: '300',
  },
  placeholder: {
    font: 'sans',
    text: 'muted-400',
    textSize: 'xs',
  },
  text: {
    text: 'muted-400',
  },
  error: {
    text: 'danger-600',
    textSize: '[0.65rem]',
    font: 'sans',
    fontWeight: 'medium',
    border: 'danger-500',
  },
  white: {
    inner: {
      bg: 'white',
      bgDark: 'muted-800',
      border: 'muted-300',
      borderDark: 'muted-700',
      text: 'muted-600',
      textDark: 'muted-200',
      textPlaceholder: 'muted-300',
      textPlaceholderDark: 'muted-500',
    },
    addon: {
      bg: 'muted-50',
      bgDark: 'muted-800',
      border: 'muted-300',
      borderDark: 'muted-700',
      text: 'muted-400',
    },
  },
  whiteContrast: {
    inner: {
      bg: 'white',
      bgDark: 'muted-900/75',
      border: 'muted-300',
      borderDark: 'muted-800',
      text: 'muted-600',
      textDark: 'muted-200',
      textPlaceholder: 'muted-300',
      textPlaceholderDark: 'muted-600',
    },
    addon: {
      bg: 'muted-50',
      bgDark: 'muted-950',
      border: 'muted-300',
      borderDark: 'muted-800',
      text: 'muted-400',
    },
  },
  colorFocus: 'primary-500',
  rounded: {
    default: 'md',
    smooth: 'lg',
    curved: 'xl',
    full: 'full',
  },
  hasNotIcon: {
    sm: 'xs',
    md: '[0.825rem]',
    lg: 'sm',
  },
  hasIcon: {
    sm: {
      text: 'xs',
      iconSize: '3',
    },
    md: {
      text: '[0.825rem]',
      iconSize: '4',
    },
    lg: {
      text: 'sm',
      iconSize: '5',
    },
  },
  hover: 'primary-500',
  focusWhitin: 'primary-500',
}

export type InputFileRegularConfig = typeof defaultConfig
export interface InputFileRegularPluginConfig {
  [key]: InputFileRegularConfig
}
