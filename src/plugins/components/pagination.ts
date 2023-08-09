import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption, defaultPluginOptions } from '../options'

const defaultPaginationConfig = {
  size: 'full',
  list: {
    border: 'muted-200',
    borderDark: 'muted-600',
    bg: 'muted-100',
    bgDark: 'muted-700',
    space: '1',
  },
  buttons: {
    border: 'muted-200',
    borderDark: 'muted-600',
    bg: 'muted-100',
    bgDark: 'muted-700',
    space: '1',
    button: {
      bg: 'white',
      bgDark: 'muted-800',
      bgHover: 'muted-100',
      bgHoverDark: 'muted-900',
      text: 'muted-500',
      textSize: 'sm',
      textHover: 'muted-700',
      textHoverDark: 'muted-400',
      border: 'muted-200',
      borderDark: 'muted-700',
      font: 'sans',
      duration: '300',
      iconSize: '4',
    },
  },
  link: {
    size: '10',
    font: 'sans',
    text: 'sm',
    border: 'muted-200',
    borderDark: 'muted-600',
    bg: 'muted-100',
    bgDark: 'muted-700',
    space: '1',
    notActive: {
      bg: 'white',
      bgDark: 'primary-500',
      bgHover: 'muted-100',
      bgHoverDark: 'muted-900',
      text: 'muted-500',
      textHover: 'muted-700',
      textHoverDark: 'muted-400',
      border: 'muted-200',
      borderDark: 'muted-700',
    },
    active: {
      bg: 'primary-500',
      text: 'white',
      border: 'primary-500',
      shadow: 'primary-500/50',
      shadowDark: 'primary-500/20',
      shadowSize: 'sm',
    },
  },
  ellipsis: {
    border: 'muted-200',
    borderDark: 'muted-700',
    text: 'muted-500',
    textSize: 'sm',
    bg: 'white',
    bgDark: 'muted-800',
    size: '10',
    font: 'sans',
  },
  rounded: {
    default: 'md',
    smooth: 'lg',
    curved: 'xl',
    full: 'full',
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
        'shurikenUi.pagination'
      ) satisfies typeof defaultPaginationConfig

      addComponents({
        [`.${prefix}pagination`]: {
          [`@apply inline-flex w-${config.size} flex-col md:flex-row md:justify-between`]:
            {},

          [`.${prefix}pagination-list`]: {
            [`@apply border-${config.list.border} bg-${config.list.bg} dark:border-${config.list.borderDark} dark:bg-${config.list.bgDark} mb-4 inline-flex flex-wrap gap-2 border p-${config.list.space} md:mb-0 md:gap-1`]:
              {},
          },
          [`.${prefix}pagination-buttons`]: {
            [`@apply border-${config.buttons.border} bg-${config.buttons.bg} dark:border-${config.buttons.borderDark} dark:bg-${config.buttons.bgDark} flex items-center justify-end gap-1 border p-${config.buttons.space}`]:
              {},
            [`.${prefix}pagination-button`]: {
              [`@apply border-${config.buttons.button.border} text-${config.buttons.button.text} hover:bg-${config.buttons.button.bgHover} hover:text-${config.buttons.button.textHover} dark:border-${config.buttons.button.borderDark} dark:bg-${config.buttons.button.bgDark} dark:hover:bg-${config.buttons.button.bgHoverDark} dark:hover:text-${config.buttons.button.textHoverDark} flex h-10 w-full items-center justify-center bg-${config.buttons.button.bg} font-${config.buttons.button.font} text-${config.buttons.button.textSize} transition-all duration-${config.buttons.button.duration} md:w-10`]:
                {},
              [`.${prefix}pagination-button-icon`]: {
                [`@apply block h-${config.buttons.button.iconSize} w-${config.buttons.button.iconSize}`]:
                  {},
              },
            },
          },
          [`.${prefix}pagination-link`]: {
            [`@apply flex h-${config.link.size} w-${config.link.size} items-center justify-center font-${config.link.font} text-${config.link.text} border-${config.link.border} bg-${config.link.bg} dark:border-${config.link.borderDark} dark:bg-${config.link.bgDark} mb-4 inline-flex flex-wrap gap-2 border p-${config.link.space} md:mb-0 md:gap-1`]:
              {},
            [`&:not(.${prefix}active)`]: {
              [`@apply dark:bg-${config.link.notActive.bgDark} border-${config.link.notActive.border} dark:border-${config.link.notActive.borderDark} hover:bg-${config.link.notActive.bgHover} dark:hover:bg-${config.link.notActive.bgHoverDark} text-${config.link.notActive.text} hover:text-${config.link.notActive.textHover} dark:hover:text-${config.link.notActive.textHoverDark} bg-${config.link.notActive.bg}`]:
                {},
            },
            [`&.${prefix}active`]: {
              [`@apply bg-${config.link.active.bg} border-${config.link.active.border} shadow-${config.link.active.shadow} dark:shadow-${config.link.active.shadowDark} text-${config.link.active.text} shadow-${config.link.active.shadowSize}`]:
                {},
            },
          },
          [`.${prefix}pagination-ellipsis`]: {
            [`@apply border-${config.ellipsis.border} text-${config.ellipsis.text} dark:border-${config.ellipsis.borderDark} dark:bg-${config.ellipsis.bgDark} flex h-${config.ellipsis.size} w-${config.ellipsis.size} items-center justify-center bg-${config.ellipsis.bg} font-${config.ellipsis.font} text-${config.ellipsis.textSize}`]:
              {},
          },
          [`&.${prefix}pagination-rounded .${prefix}pagination-list, &.${prefix}pagination-rounded .${prefix}pagination-buttons, &.${prefix}pagination-rounded .${prefix}pagination-buttons .${prefix}pagination-button,  &.${prefix}pagination-rounded .${prefix}pagination-link, &.${prefix}pagination-rounded .${prefix}pagination-ellipsis`]:
            {
              [`@apply rounded-${config.rounded.default}`]: {},
            },
          [`&.${prefix}pagination-smooth .${prefix}pagination-list, &.${prefix}pagination-smooth .${prefix}pagination-buttons, &.${prefix}pagination-smooth .${prefix}pagination-buttons .${prefix}pagination-button,  &.${prefix}pagination-smooth .${prefix}pagination-link, &.${prefix}pagination-smooth .${prefix}pagination-ellipsis`]:
            {
              [`@apply rounded-${config.rounded.smooth}`]: {},
            },
          [`&.${prefix}pagination-curved .${prefix}pagination-list, &.${prefix}pagination-curved .${prefix}pagination-buttons, &.${prefix}pagination-curved .${prefix}pagination-buttons .${prefix}pagination-button,  &.${prefix}pagination-curved .${prefix}pagination-link, &.${prefix}pagination-curved .${prefix}pagination-ellipsis`]:
            {
              [`@apply rounded-${config.rounded.curved}`]: {},
            },
          [`&.${prefix}pagination-full .${prefix}pagination-list, &.${prefix}pagination-full .${prefix}pagination-buttons, &.${prefix}pagination-full .${prefix}pagination-buttons .${prefix}pagination-button,  &.${prefix}pagination-full .${prefix}pagination-link, &.${prefix}pagination-full .${prefix}pagination-ellipsis`]:
            {
              [`@apply rounded-${config.rounded.full}`]: {},
            },
        },
      })
    }
  },
  function () {
    return {
      theme: {
        shurikenUi: {
          pagination: defaultPaginationConfig,
        },
      },
    }
  }
)
