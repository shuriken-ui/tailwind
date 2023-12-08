export const key = 'select' as const

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
  select: {
    width: 'full',
    font: {
      family: 'sans',
    },
    icon: {
      color: {
        base: {
          light: 'muted-400',
          dark: 'muted-400',
        },
        focus: {
          light: 'primary-500',
          dark: 'primary-500',
        },
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
    chevron: {
      color: {
        light: 'muted-400',
        dark: 'muted-400',
      },
      transition: {
        property: 'transform',
        duration: '300',
      },
    },
    multiple: {
      padding: '2',
      size: '32',
    },
  },
  size: {
    sm: {
      padding: '8',
      chevron: {
        outer: {
          size: '8',
        },
        inner: {
          size: '4',
        },
      },
      label: {
        font: {
          size: 'xs',
        },
      },
      icon: {
        outer: {
          size: '8',
        },
        inner: {
          size: '4',
        },
      },
      placeload: {
        size: '8',
      },
    },
    md: {
      padding: '10',
      chevron: {
        outer: {
          size: '10',
        },
        inner: {
          size: '[1.15rem]',
        },
      },
      label: {
        font: {
          size: '[0.825rem]',
        },
      },
      icon: {
        outer: {
          size: '10',
        },
        inner: {
          size: '[1.15rem]',
        },
      },
      placeload: {
        size: '10',
      },
    },
    lg: {
      padding: '12',
      chevron: {
        outer: {
          size: '12',
        },
        inner: {
          size: '5',
        },
      },
      label: {
        font: {
          size: 'sm',
        },
      },
      icon: {
        outer: {
          size: '12',
        },
        inner: {
          size: '5',
        },
      },
      placeload: {
        size: '12',
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
    select: {
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
  icon: {
    disabled: {
      select: {
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
      select: {
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

export type SelectConfig = typeof defaultConfig
export interface SelectPluginConfig {
  [key]: SelectConfig
}
