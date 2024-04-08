export const key = 'inputFile' as const

export const defaultConfig = {
  drop: {
    height: '64',
    border: {
      base: {
        light: 'muted-200',
        dark: 'muted-600',
      },
      hover: {
        light: 'muted-400',
        dark: 'muted-400',
      },
    },
    background: {
      light: 'white',
      dark: 'muted-700',
    },
    transition: {
      property: 'colors',
      duration: '300',
    },
    zone: {
      font: {
        family: 'sans',
        weight: 'normal',
        size: 'sm',
        color: {
          primary: {
            base: {
              light: 'muted-400',
              dark: 'muted-400',
            },
            hover: {
              light: 'primary-500',
              dark: 'primary-500',
            },
          },
          dark: {
            base: {
              light: 'muted-400',
              dark: 'muted-400',
            },
            hover: {
              light: 'muted-900',
              dark: 'muted-100',
            },
          },
          black: {
            base: {
              light: 'muted-400',
              dark: 'muted-400',
            },
            hover: {
              light: 'black',
              dark: 'white',
            },
          },
        },
      },
      icon: {
        size: '10',
        transition: {
          property: 'colors',
          duration: '300',
        },
      },
      separator: {
        font: {
          family: 'sans',
          weight: 'semibold',
          size: 'xs',
        },
      },
      input: {
        size: 'full',
      },
    },
  },
  button: {
    background: {
      light: 'white',
      dark: 'muted-700',
    },
    border: {
      primary: {
        base: {
          light: 'muted-200',
          dark: 'muted-600',
        },
        hover: {
          light: 'primary-500',
          dark: 'primary-500',
        },
      },
      dark: {
        base: {
          light: 'muted-200',
          dark: 'muted-600',
        },
        hover: {
          light: 'muted-900',
          dark: 'muted-100',
        },
      },
      black: {
        base: {
          light: 'muted-200',
          dark: 'muted-600',
        },
        hover: {
          light: 'black',
          dark: 'white',
        },
      },
    },
    font: {
      color: {
        primary: {
          base: {
            light: 'muted-400',
            dark: 'muted-400',
          },
          hover: {
            light: 'primary-500',
            dark: 'primary-500',
          },
        },
        dark: {
          base: {
            light: 'muted-400',
            dark: 'muted-400',
          },
          hover: {
            light: 'muted-900',
            dark: 'muted-100',
          },
        },
        black: {
          base: {
            light: 'muted-400',
            dark: 'muted-400',
          },
          hover: {
            light: 'black',
            dark: 'white',
          },
        },
      },
    },
    icon: {
      size: '8',
    },
    label: {
      font: {
        family: 'sans',
        size: 'sm',
      },
    },
    transition: {
      property: 'colors',
      duration: '300',
    },
  },
  combo: {
    padding: '1',
    font: {
      family: 'sans',
    },
    background: {
      light: 'white',
      dark: 'muted-700',
    },
    border: {
      light: 'muted-200',
      dark: 'muted-600',
    },
    label: {
      font: {
        family: 'sans',
        size: 'sm',
      },
    },
    input: {
      width: 'full',
      font: {
        size: 'sm',
        color: {
          light: 'muted-500',
          dark: 'muted-400',
        },
      },
      file: {
        font: {
          size: 'sm',
          color: {
            primary: {
              light: 'primary-700',
              dark: 'primary-700',
            },
            dark: {
              light: 'muted-900',
              dark: 'muted-100',
            },
            black: {
              light: 'black',
              dark: 'white',
            },
          },
        },
        background: {
          primary: {
            base: {
              light: 'primary-500/10',
              dark: 'primary-500/10',
            },
            hover: {
              light: 'primary-500/20',
              dark: 'primary-500/20',
            },
          },
          dark: {
            base: {
              light: 'muted-900/10',
              dark: 'muted-100/10',
            },
            hover: {
              light: 'muted-900/20',
              dark: 'muted-100/20',
            },
          },
          black: {
            base: {
              light: 'black/10',
              dark: 'white/10',
            },
            hover: {
              light: 'black/20',
              dark: 'white/20',
            },
          },
        },
      },
    },
  },
  rounded: {
    sm: 'rounded-md',
    md: 'rounded-lg',
    lg: 'rounded-xl',
    full: 'rounded-full',
  },
}

export type InputFileConfig = typeof defaultConfig
export interface InputFilePluginConfig {
  [key]: InputFileConfig
}
