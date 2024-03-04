import plugin from 'tailwindcss/plugin'
import { type InputFileConfig, defaultConfig, key } from './input-file.config'

const config = {
  theme: {
    nui: {
      [key]: defaultConfig,
    },
  },
}

export default plugin(({ addComponents, theme }) => {
  const config = theme(`nui.${key}`) satisfies InputFileConfig

  addComponents({
    //Wrapper
    '.nui-input-file': {
      '@apply relative block nui-focus': {},
      //Variant:drop
      '&.nui-input-file-drop': {
        [`@apply relative h-${config.drop.height} flex justify-center items-center`]:
          {},
        //Background
        [`@apply bg-${config.drop.background.light} dark:bg-${config.drop.background.dark}`]:
          {},
        //Border
        [`@apply border-2 border-dashed border-${config.drop.border.base.light} dark:border-${config.drop.border.base.light}`]:
          {},
        //Border:hover
        [`@apply hover:border-${config.drop.border.hover.light} dark:hover:border-${config.drop.border.hover.dark}`]:
          {},
        //Transition
        [`@apply transition-${config.drop.transition.property} duration-${config.drop.transition.duration}`]:
          {},
        //Drop:inner
        '.nui-drop-area-inner': {
          '@apply absolute z-10': {},
        },
        //Drop:zone
        '.nui-drop-zone': {
          [`@apply flex flex-col items-center font-${config.drop.zone.font.family} text-${config.drop.zone.font.size}`]:
            {},
        },
        //Zone:icon
        '.nui-drop-zone-icon': {
          //Base
          [`@apply w-${config.drop.zone.icon.size} h-${config.drop.zone.icon.size} mb-2`]:
            {},
          //Transition
          [`@apply transition-${config.drop.zone.icon.transition.property} duration-${config.drop.zone.icon.transition.duration}`]:
            {},
        },
        //Zone:text
        '.nui-drop-zone-text': {
          //Base
          [`@apply block font-${config.drop.zone.font.family} font-${config.drop.zone.font.weight}`]:
            {},
        },
        //Zone:separator
        '.nui-drop-zone-separator': {
          //Base
          [`@apply block font-${config.drop.zone.separator.font.family} font-${config.drop.zone.separator.font.weight} leading-none py-1`]:
            {},
        },
        //Zone:input
        '.nui-drop-zone-input': {
          [`@apply absolute top-0 left-0 h-${config.drop.zone.input.size} w-${config.drop.zone.input.size} opacity-0 file:cursor-pointer z-20`]:
            {},
        },
        //Color:primary
        '&.nui-input-file-primary': {
          //Zone:icon
          '.nui-drop-zone-icon': {
            //Color
            [`@apply text-${config.drop.zone.font.color.primary.base.light} dark:text-${config.drop.zone.font.color.primary.base.dark}`]:
              {},
          },
          //Zone:text
          '.nui-drop-zone-text': {
            //Color
            [`@apply text-${config.drop.zone.font.color.primary.base.light} dark:text-${config.drop.zone.font.color.primary.base.dark}`]:
              {},
          },
          //Zone:separator
          '.nui-drop-zone-separator': {
            //Color
            [`@apply text-${config.drop.zone.font.color.primary.base.light} dark:text-${config.drop.zone.font.color.primary.base.dark}`]:
              {},
          },
          //Zone:hover
          '&:hover': {
            '.nui-drop-zone-icon': {
              [`@apply text-${config.drop.zone.font.color.primary.hover.light} dark:text-${config.drop.zone.font.color.primary.hover.dark}`]:
                {},
            },
          },
        },
        //Color:dark
        '&.nui-input-file-dark': {
          //Zone:icon
          '.nui-drop-zone-icon': {
            //Color
            [`@apply text-${config.drop.zone.font.color.dark.base.light} dark:text-${config.drop.zone.font.color.dark.base.dark}`]:
              {},
          },
          //Zone:text
          '.nui-drop-zone-text': {
            //Color
            [`@apply text-${config.drop.zone.font.color.dark.base.light} dark:text-${config.drop.zone.font.color.dark.base.dark}`]:
              {},
          },
          //Zone:separator
          '.nui-drop-zone-separator': {
            //Color
            [`@apply text-${config.drop.zone.font.color.dark.base.light} dark:text-${config.drop.zone.font.color.dark.base.dark}`]:
              {},
          },
          //Zone:hover
          '&:hover': {
            '.nui-drop-zone-icon': {
              [`@apply text-${config.drop.zone.font.color.dark.hover.light} dark:text-${config.drop.zone.font.color.dark.hover.dark}`]:
                {},
            },
          },
        },
        //Color:black
        '&.nui-input-file-black': {
          //Zone:icon
          '.nui-drop-zone-icon': {
            //Color
            [`@apply text-${config.drop.zone.font.color.black.base.light} dark:text-${config.drop.zone.font.color.black.base.dark}`]:
              {},
          },
          //Zone:text
          '.nui-drop-zone-text': {
            //Color
            [`@apply text-${config.drop.zone.font.color.black.base.light} dark:text-${config.drop.zone.font.color.black.base.dark}`]:
              {},
          },
          //Zone:separator
          '.nui-drop-zone-separator': {
            //Color
            [`@apply text-${config.drop.zone.font.color.black.base.light} dark:text-${config.drop.zone.font.color.black.base.dark}`]:
              {},
          },
          //Zone:hover
          '&:hover': {
            '.nui-drop-zone-icon': {
              [`@apply text-${config.drop.zone.font.color.black.hover.light} dark:text-${config.drop.zone.font.color.black.hover.dark}`]:
                {},
            },
          },
        },
      },
      //Variant:button
      '&.nui-input-file-button': {
        //Base
        '@apply w-64 max-w-full flex flex-col items-center px-4 py-8 tracking-wide cursor-pointer':
          {},
        //Background
        [`@apply bg-${config.button.background.light} dark:bg-${config.button.background.dark}`]:
          {},
        //Transition
        [`@apply transition-${config.button.transition.property} duration-${config.button.transition.duration}`]:
          {},
        //Button:icon
        '.nui-upload-button-icon': {
          [`@apply w-${config.button.icon.size} h-${config.button.icon.size}`]:
            {},
        },
        //Button:label
        '.nui-upload-button-label': {
          //Base
          '@apply block mt-2 leading-normal': {},
          //Font
          [`@apply font-${config.button.label.font.family} text-${config.button.label.font.size}`]:
            {},
        },
        //Color:primary
        '&.nui-input-file-primary': {
          //Font
          [`@apply text-${config.button.font.color.primary.base.light} dark:text-${config.button.font.color.primary.base.dark}`]:
            {},
          //Font:hover
          [`@apply hover:text-${config.button.font.color.primary.hover.light} dark:hover:text-${config.button.font.color.primary.hover.dark}`]:
            {},
          //Border
          [`@apply border-2 border-${config.button.border.primary.base.light} dark:border-${config.button.border.primary.base.dark}`]:
            {},
          //Border:hover
          [`@apply hover:border-${config.button.border.primary.hover.light} dark:hover:border-${config.button.border.primary.hover.dark}`]:
            {},
        },
        //Color:dark
        '&.nui-input-file-dark': {
          //Font
          [`@apply text-${config.button.font.color.dark.base.light} dark:text-${config.button.font.color.dark.base.dark}`]:
            {},
          //Font:hover
          [`@apply hover:text-${config.button.font.color.dark.hover.light} dark:hover:text-${config.button.font.color.dark.hover.dark}`]:
            {},
          //Border
          [`@apply border-2 border-${config.button.border.dark.base.light} dark:border-${config.button.border.dark.base.dark}`]:
            {},
          //Border:hover
          [`@apply hover:border-${config.button.border.dark.hover.light} dark:hover:border-${config.button.border.dark.hover.dark}`]:
            {},
        },
        //Color:black
        '&.nui-input-file-black': {
          //Font
          [`@apply text-${config.button.font.color.black.base.light} dark:text-${config.button.font.color.black.base.dark}`]:
            {},
          //Font:hover
          [`@apply hover:text-${config.button.font.color.black.hover.light} dark:hover:text-${config.button.font.color.black.hover.dark}`]:
            {},
          //Border
          [`@apply border-2 border-${config.button.border.black.base.light} dark:border-${config.button.border.black.base.dark}`]:
            {},
          //Border:hover
          [`@apply hover:border-${config.button.border.black.hover.light} dark:hover:border-${config.button.border.black.hover.dark}`]:
            {},
        },
      },
      //Variant:combo
      '&.nui-input-file-combo': {
        //Base
        [`@apply block font-${config.combo.font.family} p-${config.combo.padding}`]:
          {},
        //Background
        [`@apply bg-${config.combo.background.light} dark:bg-${config.combo.background.dark}`]:
          {},
        //Border
        [`@apply border border-${config.combo.border.light} dark:border-${config.combo.border.dark}`]:
          {},
        //Combo:label
        '.nui-combo-label-text': {
          [`@apply font-${config.combo.label.font.family} sr-only text-${config.combo.label.font.size}`]:
            {},
        },
        //Combo:input
        '.nui-combo-input': {
          [`@apply outline-none block w-${config.combo.input.width} file:me-4 file:py-2 file:px-4 file:border-0 file:cursor-pointer file:transition-colors file:duration-300`]:
            {},
          //Font
          [`@apply text-${config.combo.input.font.size} text-${config.combo.input.font.color.light} dark:text-${config.combo.input.font.color.dark}`]:
            {},
          //File
          [`@apply file:text-${config.combo.input.file.font.size}`]: {},
        },
        //Color:primary
        '&.nui-input-file-primary': {
          '.nui-combo-input': {
            //Background
            [`@apply file:bg-${config.combo.input.file.background.primary.base.light} dark:file:bg-${config.combo.input.file.background.primary.base.dark}`]:
              {},
            //Background:hover
            [`@apply file:hover:bg-${config.combo.input.file.background.primary.hover.light} dark:file:hover:bg-${config.combo.input.file.background.primary.hover.dark}`]:
              {},
            //File color
            [`@apply file:text-${config.combo.input.file.font.color.primary.light} dark:file:text-${config.combo.input.file.font.color.primary.dark}`]:
              {},
          },
        },
        //Color:dark
        '&.nui-input-file-dark': {
          '.nui-combo-input': {
            //Background
            [`@apply file:bg-${config.combo.input.file.background.dark.base.light} dark:file:bg-${config.combo.input.file.background.dark.base.dark}`]:
              {},
            //Background:hover
            [`@apply file:hover:bg-${config.combo.input.file.background.dark.hover.light} dark:file:hover:bg-${config.combo.input.file.background.dark.hover.dark}`]:
              {},
            //File color
            [`@apply file:text-${config.combo.input.file.font.color.dark.light} dark:file:text-${config.combo.input.file.font.color.dark.dark}`]:
              {},
          },
        },
        //Color:black
        '&.nui-input-file-black': {
          '.nui-combo-input': {
            //Background
            [`@apply file:bg-${config.combo.input.file.background.black.base.light} dark:file:bg-${config.combo.input.file.background.black.base.dark}`]:
              {},
            //Background:hover
            [`@apply file:hover:bg-${config.combo.input.file.background.black.hover.light} dark:file:hover:bg-${config.combo.input.file.background.black.hover.dark}`]:
              {},
            //File color
            [`@apply file:text-${config.combo.input.file.font.color.black.light} dark:file:text-${config.combo.input.file.font.color.black.dark}`]:
              {},
          },
        },
      },
      //Rounded:sm
      '&.nui-input-file-rounded-sm': {
        '&.nui-input-file-drop, &.nui-input-file-button': {
          [`@apply ${config.rounded.sm}`]: {},
        },
        '&.nui-input-file-combo': {
          [`@apply ${config.rounded.sm}`]: {},
        },
        '&.nui-input-file-combo .nui-combo-input': {
          [`@apply file:${config.rounded.sm}`]: {},
        },
      },
      //Rounded:md
      '&.nui-input-file-rounded-md': {
        '&.nui-input-file-drop, &.nui-input-file-button': {
          [`@apply ${config.rounded.md}`]: {},
        },
        '&.nui-input-file-combo': {
          [`@apply ${config.rounded.md}`]: {},
        },
        '&.nui-input-file-combo .nui-combo-input': {
          [`@apply file:${config.rounded.md}`]: {},
        },
      },
      //Rounded:lg
      '&.nui-input-file-rounded-lg': {
        '&.nui-input-file-drop, &.nui-input-file-button': {
          [`@apply ${config.rounded.lg}`]: {},
        },
        '&.nui-input-file-combo': {
          [`@apply ${config.rounded.lg}`]: {},
        },
        '&.nui-input-file-combo .nui-combo-input': {
          [`@apply file:${config.rounded.lg}`]: {},
        },
      },
      //Rounded:full
      '&.nui-input-file-rounded-full': {
        '&.nui-input-file-drop, &.nui-input-file-button': {
          [`@apply ${config.rounded.full}`]: {},
        },
        '&.nui-input-file-combo': {
          [`@apply ${config.rounded.full}`]: {},
        },
        '&.nui-input-file-combo .nui-combo-input': {
          [`@apply file:${config.rounded.full}`]: {},
        },
      },
    },
  })
}, config)
