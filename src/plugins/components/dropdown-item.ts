import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption, defaultPluginOptions } from '../options'

const defaultDropdownItemConfig = {
  itemRounded: 'md',
  textPosition: 'left',
  textSize: 'sm',
  duration: '300',
  notActive: {
    text: 'muted-500',
  },
  default: {
    bg: 'muted-100',
    bgDark: 'muted-700',
    text: 'primary-500',
  },
  contrast: {
    bg: 'muted-100',
    bgDark: 'muted-900',
    text: 'primary-500',
  },
  rounded: {
    default: 'md',
    smooth: 'lg',
    curved: 'xl',
  },
}

export default plugin.withOptions(
  function (options: PluginOption) {
    let { prefix } = defu(options, defaultPluginOptions)

    if (prefix) {
      prefix = `${prefix}-`
    }

    return function ({ addComponents, theme }) {
      const config = theme(
        'shurikenUi.dropdownItem',
      ) satisfies typeof defaultDropdownItemConfig

      addComponents({
        [`.${prefix}dropdown-item`]: {
          [`@apply flex w-full items-center justify-start gap-2 rounded-${config.itemRounded} px-3 py-2 text-${config.textPosition} text-${config.textSize} cursor-pointer transition-colors duration-${config.duration}`]:
            {},

          [`.${prefix}item-content`]: {
            [`@apply grow`]: {},
          },
          [`&:not(.${prefix}active)`]: {
            [`@apply text-${config.notActive.text}`]: {},
          },
          [`&.${prefix}item-default`]: {
            [`&.${prefix}active, &:hover`]: {
              [`@apply bg-${config.default.bg} dark:bg-${config.default.bgDark} text-${config.default.text}`]:
                {},
            },
          },
          [`&.${prefix}item-contrast`]: {
            [`&.${prefix}active, &:hover`]: {
              [`@apply bg-${config.contrast.bg} dark:bg-${config.contrast.bgDark} text-${config.contrast.text}`]:
                {},
            },
          },
          [`&.${prefix}item-rounded`]: {
            [`@apply rounded-${config.rounded.default}`]: {},
          },
          [`&.${prefix}item-smooth`]: {
            [`@apply rounded-${config.rounded.smooth}`]: {},
          },
          [`&.${prefix}item-curved`]: {
            [`@apply rounded-${config.rounded.curved}`]: {},
          },
        },
      })
    }
  },
  function () {
    return {
      theme: {
        shurikenUi: {
          dropdownItem: defaultDropdownItemConfig,
        },
      },
    }
  },
)
