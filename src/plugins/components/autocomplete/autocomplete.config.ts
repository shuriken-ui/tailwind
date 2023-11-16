export const key = 'autocomplete' as const

export const defaultConfig = {
  labelFloat: {
    text: 'primary-500',
    size: '5',
    duration: '300',
  },
  multipleList: {
    item: {
      bg: 'muted-200',
      bgDark: 'muted-700',
      text: 'muted-400',
      textSize: 'xs',
      font: 'sans',
      fontWeight: 'medium',
    },
    icon: {
      size: '3',
    },
  },
  icon: {
    text: 'muted-400',
    duration: '300',
  },
  input: {
    size: 'full',
    font: 'sans',
    duration: '300',
    focusVisible: {
      labelFloat: {
        text: 'primary-500',
        textDark: 'primary-500',
      },
      icon: {
        text: 'primary-500',
      },
    },
  },
  clear: {
    text: 'muted-400',
    textHover: 'muted-700',
    textHoverDark: 'muted-200',
    duration: '300',
    inner: {
      size: '4',
    },
  },
  errorText: {
    text: 'danger-600',
    textSize: '[0.65rem]',
    font: 'sans',
    fontWeight: 'medium',
  },
  results: {
    text: 'base',
    shadow: 'muted-500/10',
    shadowDark: 'muted-800/10',
    shadowSize: 'lg',
  },
  itemInner: {
    space: '2',
    duration: '300',
    selectedIcon: {
      text: 'success-500',
      size: '4',
    },
    hasMedia: {
      size: '8',
    },
  },
  placeholder: {
    font: 'sans',
    text: 'muted-700',
    textDark: 'muted-400',
  },
  rounded: {
    default: 'md',
    smooth: 'lg',
    curved: 'xl',
    full: {
      input: 'full',
      inner: 'xl',
    },
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
    clear: {
      size: '8',
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
    clear: {
      size: '10',
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
    clear: {
      size: '12',
    },
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
    results: {
      border: 'muted-200',
      borderDark: 'muted-700',
      bg: 'white',
      bgDark: 'muted-800',
    },
    resultsInner: {
      bg: 'muted-100',
      bgDark: 'muted-700',
    },
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
    results: {
      border: 'muted-200',
      borderDark: 'muted-800',
      bg: 'white',
      bgDark: 'muted-950/75',
    },
    resultsInner: {
      bg: 'muted-100',
      bgDark: 'muted-800',
    },
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
    results: {
      border: 'muted-200',
      borderDark: 'muted-700',
      bg: 'white',
      bgDark: 'muted-800',
    },
    resultsInner: {
      bg: 'white',
      bgDark: 'muted-700',
    },
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
    results: {
      border: 'muted-200',
      borderDark: 'muted-800',
      bg: 'white',
      bgDark: 'muted-950/75',
    },
    resultsInner: {
      bg: 'white',
      bgDark: 'muted-700',
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
      sm: 'xs',
      md: {
        text: 'xs',
        focusVisible: {
          text: 'xs',
        },
        placeholderShown: {
          text: '[0.825rem]',
        },
      },
      lg: {
        text: 'xs',
        focusVisible: {
          text: 'xs',
        },
        placeholderShown: {
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
      sm: 'xs',
      md: {
        text: 'xs',
        focusVisible: {
          text: 'xs',
        },
        placeholderShown: {
          text: '[0.825rem]',
        },
      },
      lg: {
        text: 'xs',
        focusVisible: {
          text: 'xs',
        },
        placeholderShown: {
          text: '[0.825rem]',
        },
      },
    },
  },
}

export type AutocompleteConfig = typeof defaultConfig
export interface AutocompletePluginConfig {
  [key]: AutocompleteConfig
}
