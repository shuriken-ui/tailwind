export const key = 'textarea' as const

export const defaultConfig = {
  labelFloat: {
    text: 'primary-500',
    size: '5',
    duration: '300',
  },
  errorText: {
    text: 'danger-600',
    textSize: '[0.65rem]',
    font: 'sans',
    fontWeight: 'medium',
  },
  textarea: {
    size: 'full',
    focusVisible: {
      labelFloat: {
        text: 'primary-500',
        textDark: 'primary-500',
      },
    },
    placeload: {
      size: 'full',
      space: '2',
    },
    rounded: {
      default: 'md',
      smooth: 'lg',
      curved: 'xl',
    },
    default: {
      bg: 'white',
      bgDark: 'muted-900/75',
      border: 'muted-300',
      borderDark: 'muted-700',
      text: 'muted-600',
      textDark: 'muted-200',
      textPlaceholder: 'muted-300',
      textPlaceholderDark: 'muted-500',
    },
    defaultContrast: {
      bg: 'white',
      bgDark: 'muted-950/75',
      border: 'muted-300',
      borderDark: 'muted-800',
      text: 'muted-600',
      textDark: 'muted-200',
      textPlaceholder: 'muted-300',
      textPlaceholderDark: 'muted-600',
    },
    muted: {
      bg: 'muted-100',
      bgDark: 'muted-900/75',
      border: 'muted-200',
      borderDark: 'muted-700',
      text: 'muted-600',
      textDark: 'muted-200',
      textPlaceholder: 'muted-300',
      textPlaceholderDark: 'muted-500',
    },
    mutedContrast: {
      bg: 'muted-100',
      bgDark: 'muted-950/75',
      border: 'muted-100',
      borderDark: 'muted-800',
      text: 'muted-600',
      textDark: 'muted-200',
      textPlaceholder: 'muted-300',
      textPlaceholderDark: 'muted-600',
    },
    notLoading: {
      text: 'muted-300',
      textDark: 'muted-600',
    },
    error: {
      border: 'danger-500',
      borderDark: 'danger-500',
    },
    focus: {
      border: 'primary-500',
      duration: '300',
    },
    sm: {
      size: '[2rem]',
      text: 'xs',
      textLabel: 'xs',
      labelFloat: 'xs',
    },
    md: {
      size: '[2.5rem]',
      text: 'sm',
      textLabel: 'sm',
      labelFloat: {
        text: 'xs',
        textFocusVisible: 'xs',
        textPlaceholderShown: '[0.825rem]',
      },
    },
    lg: {
      size: '[3rem]',
      text: 'sm',
      textLabel: 'sm',
      labelFloat: {
        text: 'xs',
        textFocusVisible: 'xs',
        textPlaceholderShown: '[0.825rem]',
      },
    },
    addon: {
      border: 'muted-300',
      borderDark: 'muted-700',
      bg: 'muted-50',
      bgDark: 'muted-900/50',
      size: 'full',
      space: '2',
    },
  },
}

export type TextareaConfig = typeof defaultConfig
export interface TextareaPluginConfig {
  [key]: TextareaConfig
}
