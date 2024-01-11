export const key = 'textarea' as const

export const defaultConfig = {
  rounded: {
    none: 'none',
    sm: 'md',
    md: 'lg',
    lg: 'xl',
    full: 'full',
  },
  label: {
    float: {
      height: '5',
      font: {
        family: 'sans',
        color: 'primary-500',
        lead: 'none',
      },
      transition: {
        property: 'all',
        duration: '300',
      },
    },
  },
  textarea: {
    width: 'full',
    font: {
      family: 'sans',
    },
    focus: {
      label: {
        float: {
          font: {
            color: {
              light: 'primary-500',
              dark: 'primary-500',
            },
          },
        },
      },
      border: {
        color: {
          light: 'primary-500',
          dark: 'primary-500',
        },
      },
    },
    placeload: {
      size: 'full',
      space: '2',
    },
    addon: {
      size: '12',
      padding: '2',
      border: {
        light: 'muted-300',
        dark: 'muted-700',
      },
      background: {
        light: 'muted-50',
        dark: 'muted-900/50',
      },
    },
    transition: {
      property: 'colors',
      duration: '300',
    },
  },
  loaded: {
    font: {
      color: {
        light: 'muted-300',
        dark: 'muted-600',
      },
    },
  },
  size: {
    sm: {
      height: '[2rem]',
      font: {
        size: 'xs',
      },
      label: {
        size: 'xs',
        float: {
          size: 'xs',
        },
      },
    },
    md: {
      height: '[2.5rem]',
      font: {
        size: 'sm',
      },
      label: {
        size: 'sm',
        float: {
          size: {
            base: 'xs',
            focus: 'xs',
            unfocus: '[0.825rem]',
          },
        },
      },
    },
    lg: {
      height: '[3rem]',
      font: {
        size: 'sm',
      },
      label: {
        size: 'sm',
        float: {
          size: {
            base: 'xs',
            focus: 'xs',
            unfocus: '[0.825rem]',
          },
        },
      },
    },
  },
  color: {
    default: {
      background: {
        light: 'white',
        dark: 'muted-900',
      },
      border: {
        base: {
          light: 'muted-300',
          dark: 'muted-700',
        },
        hover: {
          light: 'muted-300',
          dark: 'muted-700',
        },
      },
      color: {
        light: 'muted-600',
        dark: 'muted-200',
      },
      placeholder: {
        light: 'muted-300',
        dark: 'muted-500',
      },
    },
    defaultContrast: {
      background: {
        light: 'white',
        dark: 'muted-950',
      },
      border: {
        base: {
          light: 'muted-300',
          dark: 'muted-800',
        },
        hover: {
          light: 'muted-300',
          dark: 'muted-800',
        },
      },
      color: {
        light: 'muted-600',
        dark: 'muted-200',
      },
      placeholder: {
        light: 'muted-300',
        dark: 'muted-600',
      },
    },
    muted: {
      background: {
        light: 'muted-100',
        dark: 'muted-900',
      },
      border: {
        base: {
          light: 'muted-100',
          dark: 'muted-700',
        },
        hover: {
          light: 'muted-100',
          dark: 'muted-700',
        },
      },
      color: {
        light: 'muted-600',
        dark: 'muted-200',
      },
      placeholder: {
        light: 'muted-300',
        dark: 'muted-500',
      },
    },
    mutedContrast: {
      background: {
        light: 'muted-100',
        dark: 'muted-950',
      },
      border: {
        base: {
          light: 'muted-100',
          dark: 'muted-800',
        },
        hover: {
          light: 'muted-100',
          dark: 'muted-800',
        },
      },
      color: {
        light: 'muted-600',
        dark: 'muted-200',
      },
      placeholder: {
        light: 'muted-300',
        dark: 'muted-600',
      },
    },
  },
  error: {
    textarea: {
      border: {
        light: 'danger-500',
        dark: 'danger-500',
      },
    },
    icon: {
      color: {
        light: 'danger-500',
        dark: 'danger-500',
      },
    },
    font: {
      family: 'sans',
      size: '[0.65rem]',
      weight: 'medium',
      color: {
        light: 'danger-600',
        dark: 'danger-600',
      },
    },
  },
}

export type TextareaConfig = typeof defaultConfig
export interface TextareaPluginConfig {
  [key]: TextareaConfig
}
