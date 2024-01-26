import plugin from 'tailwindcss/plugin'
import { defaultConfig, key } from './button-group.config'

const config = {
  theme: {
    nui: {
      [key]: defaultConfig,
    },
  },
}

export default plugin(
  ({ addComponents }) =>
    addComponents({
      '.nui-button-group': {
        '@apply flex': {},

        // Button
        '.nui-button:not(:only-child), .nui-button-action:not(:only-child), .nui-button-icon:not(:only-child)':
          {
            '@apply !border-e-0': {},
            '&:focus': {
              '@apply !z-10 relative': {},
            },
            '&:not(:first-child):not(:last-child)': {
              '@apply !rounded-none': {},
            },
            '&:first-child': {
              '@apply !rounded-e-none': {},
            },
            '&:last-child': {
              '@apply !border-e !rounded-s-none': {},
            },
          },

        // Input
        '.nui-input-wrapper:not(:first-child):not(:last-child)': {
          '.nui-input': {
            '@apply !border-e-0 !rounded-none': {},

            '&:focus': {
              '@apply !z-10 relative': {},
            },
          },
        },

        '.nui-input-wrapper:first-child:not(:last-child)': {
          '.nui-input': {
            '@apply !border-e-0 !rounded-e-none': {},

            '&:focus': {
              '@apply !z-10 relative': {},
            },
          },
        },

        '.nui-input-wrapper:last-child:not(:first-child)': {
          '.nui-input': {
            '@apply !border-e !rounded-s-none': {},

            '&:focus': {
              '@apply !z-10 relative': {},
            },
          },
        },

        // InputNumber
        '.nui-input-number-wrapper:not(:first-child):not(:last-child)': {
          '.nui-input-number': {
            '@apply !border-e-0 !rounded-none': {},

            '&:focus': {
              '@apply !z-10 relative': {},
            },
          },
        },

        '.nui-input-number-wrapper:first-child:not(:last-child)': {
          '.nui-input-number': {
            '@apply !border-e-0 !rounded-e-none': {},

            '&:focus': {
              '@apply !z-10 relative': {},
            },
          },
        },

        '.nui-input-number-wrapper:last-child:not(:first-child)': {
          '.nui-input-number': {
            '@apply !border-e !rounded-s-none': {},

            '&:focus': {
              '@apply !z-10 relative': {},
            },
          },
        },

        // InputFileRegular
        '.nui-input-file-regular:not(:first-child):not(:last-child)': {
          '.nui-input-file-inner': {
            '@apply !border-e-0 !rounded-none': {},

            '&:focus': {
              '@apply !z-10 relative': {},
            },
          },
        },

        '.nui-input-file-regular:first-child:not(:last-child)': {
          '.nui-input-file-inner': {
            '@apply !border-e-0 !rounded-e-none': {},

            '&:focus': {
              '@apply !z-10 relative': {},
            },
          },
        },

        '.nui-input-file-regular:last-child:not(:first-child)': {
          '.nui-input-file-inner': {
            '@apply !border-e !rounded-s-none': {},

            '&:focus': {
              '@apply !z-10 relative': {},
            },
          },
        },

        // Select
        '.nui-select-wrapper:not(:first-child):not(:last-child)': {
          '.nui-select': {
            '@apply !border-e-0 !rounded-none': {},

            '&:focus': {
              '@apply !z-10 relative': {},
            },
          },
        },

        '.nui-select-wrapper:first-child:not(:last-child)': {
          '.nui-select': {
            '@apply !border-e-0 !rounded-e-none': {},

            '&:focus': {
              '@apply !z-10 relative': {},
            },
          },
        },

        // Autocomplete
        '.nui-autocomplete:not(:first-child):not(:last-child)': {
          '.nui-autocomplete-input': {
            '@apply !border-e-0 !rounded-none': {},

            '&:focus': {
              '@apply !z-10 relative': {},
            },
          },
        },

        '.nui-autocomplete:first-child:not(:last-child)': {
          '.nui-autocomplete-input': {
            '@apply !border-e-0 !rounded-e-none': {},

            '&:focus': {
              '@apply !z-10 relative': {},
            },
          },
        },

        '.nui-autocomplete:last-child:not(:first-child)': {
          '.nui-autocomplete-input': {
            '@apply !border-e !rounded-s-none': {},

            '&:focus': {
              '@apply !z-10 relative': {},
            },
          },
        },

        // Dropdown
        '.nui-dropdown:not(:first-child):not(:last-child)': {
          '.nui-button': {
            '@apply !border-e-0 !rounded-none': {},

            '&:focus': {
              '@apply !z-10 relative': {},
            },
          },
        },

        '.nui-dropdown:first-child:not(:last-child)': {
          '.nui-button': {
            '@apply !border-e-0 !rounded-e-none': {},

            '&:focus': {
              '@apply !z-10 relative': {},
            },
          },
        },

        '.nui-dropdown:last-child:not(:first-child)': {
          '.nui-button': {
            '@apply !border-e !rounded-s-none': {},

            '&:focus': {
              '@apply !z-10 relative': {},
            },
          },
        },

        // Listbox
        '.nui-listbox:not(:first-child):not(:last-child)': {
          '.nui-listbox-button': {
            '@apply !border-e-0 !rounded-none': {},

            '&:focus': {
              '@apply !z-10 relative': {},
            },
          },
        },

        '.nui-listbox:first-child:not(:last-child)': {
          '.nui-listbox-button': {
            '@apply !border-e-0 !rounded-e-none': {},

            '&:focus': {
              '@apply !z-10 relative': {},
            },
          },
        },

        '.nui-listbox:last-child:not(:first-child)': {
          '.nui-listbox-button': {
            '@apply !border-e !rounded-s-none': {},

            '&:focus': {
              '@apply !z-10 relative': {},
            },
          },
        },
      },
    }),
  config,
)
