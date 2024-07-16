export const key = 'inputFileRegular' as const

export const defaultConfig = {
  font: {
    color: {
      light: 'muted-400',
      dark: 'muted-400',
    },
  },
  rounded: {
    sm: 'rounded-md',
    md: 'rounded-lg',
    lg: 'rounded-xl',
    full: 'rounded-full',
  },
  inner: {
    width: 'full',
    font: {
      family: 'sans',
    },
    transition: {
      property: 'colors',
      duration: '300',
    },
  },
  placeholder: {
    font: {
      family: 'sans',
      size: 'xs',
      color: {
        light: 'muted-400',
        dark: 'muted-400',
      },
    },
  },
  hover: {
    border: {
      light: 'primary-500',
      dark: 'primary-500',
    },
    font: {
      color: {
        light: 'primary-500',
        dark: 'primary-500',
      },
    },
  },
  focus: {
    border: {
      light: 'primary-500',
      dark: 'primary-500',
    },
    font: {
      color: {
        light: 'primary-500',
        dark: 'primary-500',
      },
    },
  },
  error: {
    font: {
      family: 'sans',
      size: '[0.65rem]',
      weight: 'medium',
      color: {
        light: 'danger-600',
        dark: 'danger-600',
      },
    },
    border: {
      light: 'danger-500',
      dark: 'danger-500',
    },
  },
  color: {
    default: {
      inner: {
        background: {
          light: 'white',
          dark: 'muted-800',
        },
        border: {
          light: 'muted-300',
          dark: 'muted-700',
        },
        font: {
          color: {
            light: 'muted-600',
            dark: 'muted-200',
          },
        },
        placeholder: {
          light: 'muted-300',
          dark: 'muted-500',
        },
      },
      addon: {
        background: {
          light: 'muted-50',
          dark: 'muted-800',
        },
        border: {
          light: 'muted-300',
          dark: 'muted-700',
        },
        font: {
          color: {
            light: 'muted-400',
            dark: 'muted-400',
          },
        },
      },
    },
    defaultContrast: {
      inner: {
        background: {
          light: 'white',
          dark: 'muted-950',
        },
        border: {
          light: 'muted-300',
          dark: 'muted-800',
        },
        font: {
          color: {
            light: 'muted-600',
            dark: 'muted-200',
          },
        },
        placeholder: {
          light: 'muted-300',
          dark: 'muted-600',
        },
      },
      addon: {
        background: {
          light: 'muted-50',
          dark: 'muted-950',
        },
        border: {
          light: 'muted-300',
          dark: 'muted-800',
        },
        font: {
          color: {
            light: 'muted-400',
            dark: 'muted-400',
          },
        },
      },
    },
  },
  icon: {
    disabled: {
      sm: {
        font: {
          size: 'xs',
        },
      },
      md: {
        font: {
          size: '[0.825rem]',
        },
      },
      lg: {
        font: {
          size: 'sm',
        },
      },
      xl: {
        font: {
          size: 'sm',
        },
      },
    },
    enabled: {
      sm: {
        font: {
          size: 'xs',
        },
        icon: {
          size: '3',
        },
      },
      md: {
        font: {
          size: '[0.825rem]',
        },
        icon: {
          size: '4',
        },
      },
      lg: {
        font: {
          size: 'sm',
        },
        icon: {
          size: '5',
        },
      },
      xl: {
        font: {
          size: 'sm',
        },
        icon: {
          size: '6',
        },
      },
    },
  },
}

export type InputFileRegularConfig = typeof defaultConfig
export interface InputFileRegularPluginConfig {
  [key]: InputFileRegularConfig
}
