export const key = 'autocomplete' as const

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
        color: 'primary-500',
      },
      transition: {
        property: 'all',
        duration: '300',
      },
    },
  },
  input: {
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
      icon: {
        color: {
          light: 'primary-500',
          dark: 'primary-500',
        },
      },
      border: {
        color: {
          light: 'primary-500',
          dark: 'primary-500',
        },
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
    transition: {
      property: 'all',
      duration: '300',
    },
  },
  results: {
    font: {
      size: 'base',
    },
    shadow: {
      size: 'lg',
      light: 'muted-300/30',
      dark: 'muted-800/20',
    },
  },
  item: {
    padding: '2',
    icon: {
      color: 'success-500',
      size: '4',
    },
    media: {
      size: '8',
    },
    transition: {
      property: 'colors',
      duration: '300',
    },
  },
  placeholder: {
    font: {
      family: 'sans',
      color: {
        light: 'muted-700',
        dark: 'muted-400',
      },
    },
  },
  clear: {
    inner: {
      size: '4',
    },
    font: {
      color: {
        base: {
          light: 'muted-400',
          dark: 'muted-400',
        },
        hover: {
          light: 'muted-700',
          dark: 'muted-200',
        },
      },
    },
    transition: {
      property: 'colors',
      duration: '300',
    },
  },
  error: {
    input: {
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
  multiple: {
    item: {
      background: {
        light: 'muted-200',
        dark: 'muted-700',
      },
      font: {
        family: 'sans',
        size: 'xs',
        weight: 'medium',
        color: {
          light: 'muted-400',
          dark: 'muted-400',
        },
      },
    },
    icon: {
      size: '3',
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
      clear: {
        size: '8',
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
      clear: {
        size: '10',
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
      clear: {
        size: '12',
      },
    },
    xl: {
      font: {
        size: 'sm',
      },
      icon: {
        size: {
          inner: '5',
          outer: '14',
        },
      },
      placeload: {
        size: '14',
      },
      clear: {
        size: '14',
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
      results: {
        outer: {
          background: {
            light: 'white',
            dark: 'muted-800',
          },
          border: {
            light: 'muted-200',
            dark: 'muted-700',
          },
        },
        inner: {
          background: {
            light: 'muted-100',
            dark: 'muted-700',
          },
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
      results: {
        outer: {
          background: {
            light: 'white',
            dark: 'muted-950',
          },
          border: {
            light: 'muted-200',
            dark: 'muted-800',
          },
        },
        inner: {
          background: {
            light: 'muted-100',
            dark: 'muted-800',
          },
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
      results: {
        outer: {
          background: {
            light: 'white',
            dark: 'muted-800',
          },
          border: {
            light: 'muted-200',
            dark: 'muted-700',
          },
        },
        inner: {
          background: {
            light: 'muted-100',
            dark: 'muted-700',
          },
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
      results: {
        outer: {
          background: {
            light: 'white',
            dark: 'muted-950',
          },
          border: {
            light: 'muted-200',
            dark: 'muted-800',
          },
        },
        inner: {
          background: {
            light: 'muted-100',
            dark: 'muted-800',
          },
        },
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
        xl: {
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
          xl: {
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
            size: 'sm',
          },
        },
        xl: {
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
          xl: {
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

export type AutocompleteConfig = typeof defaultConfig
export interface AutocompletePluginConfig {
  [key]: AutocompleteConfig
}
