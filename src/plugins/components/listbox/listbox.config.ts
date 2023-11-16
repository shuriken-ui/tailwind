export const key = 'listbox' as const

export const defaultConfig = {
  labelFloat: {
    text: 'primary-500',
    size: '5',
    duration: '300',
  },
  button: {
    size: 'full',
    text: 'sm',
    textPosition: 'start',
    font: 'sans',
    iconBox: {
      space: '2',
      size: '6',
      innerSize: '4',
    },
    placeholder: {
      text: 'muted-300',
      textDark: 'muted-500',
      textPosition: 'left',
    },
  },
  icon: {
    text: 'muted-400',
    duration: '300',
  },
  chevron: {
    inner: {
      size: '4',
      text: 'muted-400',
      duration: '300',
    },
  },
  options: {
    ringFocus: 'primary-500/50',
    space: '2',
    text: 'base',
    shadowSize: 'lg',
    shadow: 'muted-500/10',
    shadowDark: 'muted-800/10',
  },
  option: {
    duration: '300',
    iconBox: {
      text: 'muted-200',
      textDark: 'muted-400',
      innerSize: '5',
    },
    inner: {
      heading: {
        text: 'muted-800',
        textDark: 'white',
      },
      text: 'muted-400',
    },
    icon: {
      text: 'primary-600',
    },
    iconInner: {
      size: '4',
    },
    activeOrHover: {
      text: 'primary-600',
      textDark: 'primary-400',
      bg: 'primary-500/10',
    },
  },
  errorText: {
    text: 'danger-600',
    textSize: '[0.65rem]',
    font: 'sans',
    fontWeight: 'medium',
  },
  sm: {
    text: 'xs',
    icon: {
      size: '8',
      innerSize: '4',
    },
    placeload: {
      size: '8',
    },
    chevron: {
      size: '8',
      innerSize: '3',
    },
  },
  md: {
    text: '[0.825rem]',
    icon: {
      size: '10',
      innerSize: '[1.15rem]',
    },
    placeload: {
      size: '10',
    },
    chevron: {
      size: '10',
      innerSize: '4',
    },
  },
  lg: {
    text: 'sm',
    icon: {
      size: '12',
      innerSize: '5',
    },
    placeload: {
      size: '12',
    },
    chevron: {
      size: '12',
      innerSize: '4',
    },
  },
  rounded: {
    default: 'md',
    smooth: 'lg',
    curved: 'xl',
    full: {
      button: 'full',
      option: 'xl',
    },
  },
  default: {
    bg: 'white',
    bgDark: 'muted-900',
    border: 'muted-300',
    borderDark: 'muted-700',
    borderFocus: 'muted-300',
    borderFocusDark: 'muted-700',
    shadowFocus: 'muted-300/50',
    shadowFocusDark: 'muted-800/50',
    text: 'muted-600',
    textDark: 'muted-200',
    textPlaceholder: 'muted-300',
    textPlaceholderDark: 'muted-500',
    chevron: {
      border: 'muted-200',
      borderDark: 'muted-700',
    },
    option: {
      border: 'muted-200',
      borderDark: 'muted-600',
      bg: 'white',
      bgDark: 'muted-700',
    },
  },
  defaultContrast: {
    bg: 'white',
    bgDark: 'muted-950',
    border: 'muted-300',
    borderDark: 'muted-800',
    borderFocus: 'muted-300',
    borderFocusDark: 'muted-700',
    shadowFocus: 'muted-300/50',
    shadowFocusDark: 'muted-800/50',
    text: 'muted-600',
    textDark: 'muted-200',
    textPlaceholder: 'muted-300',
    textPlaceholderDark: 'muted-600',
    chevron: {
      border: 'muted-300',
      borderDark: 'muted-800',
    },
    option: {
      border: 'muted-200',
      borderDark: 'muted-800',
      bg: 'white',
      bgDark: 'muted-950',
    },
  },
  muted: {
    bg: 'muted-100',
    bgDark: 'muted-900',
    border: 'muted-300',
    borderDark: 'muted-700',
    borderFocus: 'muted-300',
    borderFocusDark: 'muted-700',
    shadowFocus: 'muted-300/50',
    shadowFocusDark: 'muted-800/50',
    text: 'muted-600',
    textDark: 'muted-200',
    textPlaceholder: 'muted-300',
    textPlaceholderDark: 'muted-500',
    chevron: {
      border: 'muted-300',
      borderDark: 'muted-700',
    },
    option: {
      border: 'muted-200',
      borderDark: 'muted-600',
      bg: 'white',
      bgDark: 'muted-700',
    },
  },
  mutedContrast: {
    bg: 'muted-100',
    bgDark: 'muted-950',
    border: 'muted-300',
    borderDark: 'muted-800',
    borderFocus: 'muted-300',
    borderFocusDark: 'muted-700',
    shadowFocus: 'muted-300/50',
    shadowFocusDark: 'muted-800/50',
    text: 'muted-600',
    textDark: 'muted-200',
    textPlaceholder: 'muted-300',
    textPlaceholderDark: 'muted-500',
    chevron: {
      border: 'muted-300',
      borderDark: 'muted-800',
    },
    option: {
      border: 'muted-200',
      borderDark: 'muted-800',
      bg: 'white',
      bgDark: 'muted-950',
    },
  },
  notLoading: {
    text: 'muted-300',
    textDark: 'muted-600',
  },
  error: {
    border: 'danger-500',
    borderDark: 'danger-500',
    icon: {
      text: 'danger-500',
    },
  },
  hasNotIcon: {
    text: {
      sm: 'xs',
      md: 'sm',
      lg: 'sm',
    },
    labelFloat: {
      sm: {
        text: 'xs',
        focusVisible: {
          textColor: 'primary-500',
        },
      },
      md: {
        text: 'xs',
        focusVisible: {
          text: 'xs',
          textColor: 'primary-500',
        },
        button: {
          text: '[0.825rem]',
        },
      },
      lg: {
        text: 'xs',
        focusVisible: {
          text: 'xs',
          textColor: 'primary-500',
        },
        button: {
          text: '[0.825rem]',
        },
      },
    },
  },
  hasIcon: {
    text: {
      sm: 'xs',
      md: 'sm',
      lg: 'base',
    },
    labelFloat: {
      sm: {
        text: 'xs',
        focusVisible: {
          textColor: 'primary-500',
        },
      },
      md: {
        text: 'xs',
        focusVisible: {
          text: 'xs',
          textColor: 'primary-500',
        },
        button: {
          text: '[0.825rem]',
        },
      },
      lg: {
        text: 'xs',
        focusVisible: {
          text: 'xs',
          textColor: 'primary-500',
        },
        button: {
          text: '[0.825rem]',
        },
      },
    },
  },
}

export type ListboxConfig = typeof defaultConfig
export interface ListboxPluginConfig {
  [key]: ListboxConfig
}
