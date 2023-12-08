export const key = 'listbox' as const

export const defaultConfig = {
  rounded: {
    none: 'rounded-none',
    sm: 'rounded-md',
    md: 'rounded-lg',
    lg: 'rounded-xl',
    full: 'rounded-full',
  },
  label: {
    float: {
      height: '5',
      font: {
        color: 'primary-500',
      },
      transition: {
        property: 'all',
        duration: '300',
      },
    },
  },
  button: {
    size: 'full',
    font: {
      family: 'sans',
      size: 'sm',
      align: 'start',
    },
    iconBox: {
      margin: {
        x: '2',
      },
      outer: {
        size: '6',
      },
      inner: {
        size: '4',
      },
    },
    placeholder: {
      font: {
        color: {
          light: 'muted-300',
          dark: 'muted-500',
        },
        align: 'start',
      },
    },
    icon: {
      color: {
        light: 'muted-400',
        dark: 'muted-400',
      },
      transition: {
        property: 'colors',
        duration: '300',
      },
    },
  },
  chevron: {
    inner: {
      size: '4',
      color: {
        light: 'muted-400',
        dark: 'muted-400',
      },
      transition: {
        property: 'transform',
        duration: '300',
      },
    },
  },
  options: {
    ring: {
      focus: {
        light: 'primary-500/50',
        dark: 'primary-500/50',
      },
    },
    padding: '2',
    font: {
      size: 'base',
    },
    shadow: {
      size: 'lg',
      light: 'muted-300/30',
      dark: 'muted-800/20',
    },
  },
  option: {
    transition: {
      property: 'colors',
      duration: '300',
    },
    iconBox: {
      color: {
        light: 'muted-200',
        dark: 'muted-400',
      },
      inner: {
        size: '5',
      },
    },
    inner: {
      heading: {
        font: {
          color: {
            light: 'muted-800',
            dark: 'muted-100',
          },
        },
      },
      font: {
        color: {
          light: 'muted-400',
          dark: 'muted-400',
        },
      },
    },
    icon: {
      color: {
        light: 'primary-600',
        dark: 'primary-600',
      },
      inner: {
        size: '4',
      },
    },
    activeHover: {
      font: {
        color: {
          light: 'primary-600',
          dark: 'primary-400',
        },
      },
      background: {
        light: 'primary-500/10',
        dark: 'primary-500/10',
      },
    },
  },
  error: {
    button: {
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
  size: {
    sm: {
      font: {
        size: 'xs',
      },
      icon: {
        size: {
          inner: '4',
          outer: '8',
        },
      },
      placeload: {
        size: '8',
      },
      chevron: {
        outer: {
          size: '8',
        },
        inner: {
          size: '3',
        },
      },
    },
    md: {
      font: {
        size: '[0.825rem]',
      },
      icon: {
        size: {
          inner: '[1.15rem]',
          outer: '10',
        },
      },
      placeload: {
        size: '10',
      },
      chevron: {
        outer: {
          size: '10',
        },
        inner: {
          size: '4',
        },
      },
    },
    lg: {
      font: {
        size: 'sm',
      },
      icon: {
        size: {
          inner: '5',
          outer: '12',
        },
      },
      placeload: {
        size: '12',
      },
      chevron: {
        outer: {
          size: '12',
        },
        inner: {
          size: '4',
        },
      },
    },
  },
  color: {
    default: {
      base: {
        background: {
          light: 'white',
          dark: 'muted-900',
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
          color: {
            light: 'muted-300',
            dark: 'muted-500',
          },
        },
      },
      shadow: {
        focus: {
          light: 'muted-300/30',
          dark: 'muted-800/20',
        },
      },
      chevron: {
        color: {
          light: 'muted-200',
          dark: 'muted-700',
        },
      },
      option: {
        border: {
          light: 'muted-200',
          dark: 'muted-600',
        },
        background: {
          light: 'white',
          dark: 'muted-700',
        },
      },
    },
    defaultContrast: {
      base: {
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
          color: {
            light: 'muted-300',
            dark: 'muted-600',
          },
        },
      },
      shadow: {
        focus: {
          light: 'muted-300/30',
          dark: 'muted-800/20',
        },
      },
      chevron: {
        color: {
          light: 'muted-300',
          dark: 'muted-800',
        },
      },
      option: {
        border: {
          light: 'muted-200',
          dark: 'muted-800',
        },
        background: {
          light: 'white',
          dark: 'muted-950',
        },
      },
    },
    muted: {
      base: {
        background: {
          light: 'muted-100',
          dark: 'muted-900',
        },
        border: {
          light: 'muted-200',
          dark: 'muted-700',
        },
        font: {
          color: {
            light: 'muted-600',
            dark: 'muted-200',
          },
        },
        placeholder: {
          color: {
            light: 'muted-300',
            dark: 'muted-500',
          },
        },
      },
      shadow: {
        focus: {
          light: 'muted-300/30',
          dark: 'muted-800/20',
        },
      },
      chevron: {
        color: {
          light: 'muted-200',
          dark: 'muted-700',
        },
      },
      option: {
        border: {
          light: 'muted-200',
          dark: 'muted-600',
        },
        background: {
          light: 'white',
          dark: 'muted-700',
        },
      },
    },
    mutedContrast: {
      base: {
        background: {
          light: 'muted-100',
          dark: 'muted-950',
        },
        border: {
          light: 'muted-100',
          dark: 'muted-800',
        },
        font: {
          color: {
            light: 'muted-600',
            dark: 'muted-200',
          },
        },
        placeholder: {
          color: {
            light: 'muted-300',
            dark: 'muted-600',
          },
        },
      },
      shadow: {
        focus: {
          light: 'muted-300/30',
          dark: 'muted-800/20',
        },
      },
      chevron: {
        color: {
          light: 'muted-300',
          dark: 'muted-800',
        },
      },
      option: {
        border: {
          light: 'muted-200',
          dark: 'muted-800',
        },
        background: {
          light: 'white',
          dark: 'muted-950',
        },
      },
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
  icon: {
    disabled: {
      input: {
        sm: {
          font: {
            size: 'xs',
          },
        },
        md: {
          font: {
            size: 'sm',
          },
        },
        lg: {
          font: {
            size: 'sm',
          },
        },
      },
      label: {
        float: {
          sm: {
            font: {
              size: 'xs',
            },
          },
          md: {
            font: {
              size: {
                base: 'xs',
                focus: 'xs',
                unfocus: '[0.825rem]',
              },
            },
          },
          lg: {
            font: {
              size: {
                base: 'xs',
                focus: 'xs',
                unfocus: '[0.825rem]',
              },
            },
          },
        },
      },
    },
    enabled: {
      input: {
        sm: {
          font: {
            size: 'xs',
          },
        },
        md: {
          font: {
            size: 'sm',
          },
        },
        lg: {
          font: {
            size: 'base',
          },
        },
      },
      label: {
        float: {
          sm: {
            font: {
              size: 'xs',
            },
          },
          md: {
            font: {
              size: {
                base: 'xs',
                focus: 'xs',
                unfocus: '[0.825rem]',
              },
            },
          },
          lg: {
            font: {
              size: {
                base: 'xs',
                focus: 'xs',
                unfocus: '[0.825rem]',
              },
            },
          },
        },
      },
    },
  },
}

export type ListboxConfig = typeof defaultConfig
export interface ListboxPluginConfig {
  [key]: ListboxConfig
}
