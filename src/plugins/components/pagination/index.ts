import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption, defaultPluginOptions } from '../../options'
import { type PaginationConfig, defaultConfig, key } from './pagination.config'

export default plugin.withOptions(
  function (options: PluginOption) {
    let { prefix } = defu(options, defaultPluginOptions)

    if (prefix) {
      prefix = `${prefix}-`
    }

    return function ({ addComponents, theme }) {
      const config = theme(`shurikenUi.${key}`) satisfies PaginationConfig

      addComponents({
        //Wrapper
        [`.${prefix}pagination`]: {
          [`@apply inline-flex w-${config.width} flex-col md:flex-row md:justify-between`]:
            {},
          //Pagination:list
          [`.${prefix}pagination-list`]: {
            //Base
            [`@apply inline-flex flex-wrap gap-2 md:gap-1 p-${config.padding} mb-4 md:mb-0`]:
              {},
            //Background
            [`@apply bg-${config.list.background.light} dark:bg-${config.list.background.dark}`]:
              {},
            //Border
            [`@apply border border-${config.list.border.light} dark:border-${config.list.border.dark}`]:
              {},
          },
          //Pagination:buttons
          [`.${prefix}pagination-buttons`]: {
            //Base
            [`@apply flex items-center justify-end gap-1 border p-${config.buttons.padding}`]:
              {},
            //Background
            [`@apply bg-${config.buttons.background.light} dark:bg-${config.buttons.background.dark}`]:
              {},
            //Border
            [`@apply border-${config.buttons.border.light} dark:border-${config.buttons.border.dark}`]:
              {},
            //Buttons:button
            [`.${prefix}pagination-button`]: {
              //Base
              [`@apply flex h-10 w-full items-center justify-center md:w-10`]:
                {},
              //Font
              [`@apply font-${config.buttons.button.font.family} text-${config.buttons.button.font.size}`]:
                {},
              //Color
              [`@apply text-${config.buttons.button.font.color.base.light} dark:text-${config.buttons.button.font.color.base.dark}`]:
                {},
              //Color:hover
              [`@apply hover:text-${config.buttons.button.font.color.hover.light} dark:hover:text-${config.buttons.button.font.color.hover.dark}`]:
                {},
              //Background
              [`@apply bg-${config.buttons.button.background.base.light} dark:bg-${config.buttons.button.background.base.dark}`]:
                {},
              //Background:hover
              [`@apply hover:bg-${config.buttons.button.background.hover.light} dark:hover:bg-${config.buttons.button.background.hover.dark}`]:
                {},
              //Border
              [`@apply border-${config.buttons.button.border.light} dark:border-${config.buttons.button.border.dark}`]:
                {},
              //Transition
              [`@apply transition-${config.buttons.button.transition.property} duration-${config.buttons.button.transition.duration}`]:
                {},
              //Button:icon
              [`.${prefix}pagination-button-icon`]: {
                [`@apply block h-${config.buttons.button.icon.size} w-${config.buttons.button.icon.size}`]:
                  {},
              },
            },
          },
          //Pagination:link
          [`.${prefix}pagination-link`]: {
            //Base
            [`@apply flex items-center justify-center mb-4 md:mb-0 inline-flex flex-wrap gap-2 md:gap-1`]:
              {},
            //Size
            [`@apply h-${config.link.size} w-${config.link.size} p-${config.link.padding}`]:
              {},
            //Font
            [`@apply font-${config.link.font.family} text-${config.link.font.size}`]:
              {},
            //Background
            [`@apply bg-${config.link.background.base.light} dark:bg-${config.link.background.base.dark}`]:
              {},
            //Border
            [`@apply border border-${config.link.border.base.light} dark:border-${config.link.border.base.dark}`]:
              {},
            //Link:not-active
            [`&:not(.${prefix}active)`]: {
              //Color:inactive:base
              [`@apply text-${config.link.font.color.inactive.base.light} dark:text-${config.link.font.color.inactive.base.dark}`]:
                {},
              //Color:inactive:hover
              [`@apply hover:text-${config.link.font.color.inactive.hover.light} dark:hover:text-${config.link.font.color.inactive.hover.dark}`]:
                {},
              //Background:inactive:base
              [`@apply bg-${config.link.background.inactive.base.light} dark:bg-${config.link.background.inactive.base.dark}`]:
                {},
              //Background:inactive:hover
              [`@apply hover:bg-${config.link.background.inactive.hover.light} dark:hover:bg-${config.link.background.inactive.hover.dark}`]:
                {},
              //Border:inactive
              [`@apply border-${config.link.border.inactive.light} dark:border-${config.link.border.inactive.dark}`]:
                {},
            },
            //Link:active
            [`&.${prefix}active`]: {
              //Color
              [`@apply text-${config.link.font.color.active.light} dark:text-${config.link.font.color.active.dark}`]:
                {},
              //Background
              [`@apply bg-${config.link.background.active.light} dark:bg-${config.link.background.active.dark}`]:
                {},
              //Border:active
              [`@apply border-${config.link.border.active.light} dark:border-${config.link.border.active.dark}`]:
                {},
              //Shadow:active
              [`@apply shadow-${config.link.shadow.active.size} shadow-${config.link.shadow.active.light} dark:shadow-${config.link.shadow.active.dark}`]:
                {},
            },
          },
          //Pagination:ellipsis
          [`.${prefix}pagination-ellipsis`]: {
            //Base
            [`@apply flex h-${config.ellipsis.size} w-${config.ellipsis.size} items-center justify-center`]:
              {},
            //Font
            [`@apply font-${config.ellipsis.font.family} text-${config.ellipsis.font.size}`]:
              {},
            //Color
            [`@apply text-${config.ellipsis.font.color.light} dark:text-${config.ellipsis.font.color.dark}`]:
              {},
            //Background
            [`@apply bg-${config.ellipsis.background.light} dark:bg-${config.ellipsis.background.dark}`]:
              {},
            //Border
            [`@apply border-${config.ellipsis.border.light} dark:border-${config.ellipsis.border.dark}`]:
              {},
          },
          //Rounded:sm
          [`&.${prefix}pagination-rounded .${prefix}pagination-list, &.${prefix}pagination-rounded .${prefix}pagination-buttons, &.${prefix}pagination-rounded .${prefix}pagination-buttons .${prefix}pagination-button,  &.${prefix}pagination-rounded .${prefix}pagination-link, &.${prefix}pagination-rounded .${prefix}pagination-ellipsis`]:
            {
              [`@apply ${config.rounded.sm}`]: {},
            },
          //Rounded:md
          [`&.${prefix}pagination-smooth .${prefix}pagination-list, &.${prefix}pagination-smooth .${prefix}pagination-buttons, &.${prefix}pagination-smooth .${prefix}pagination-buttons .${prefix}pagination-button,  &.${prefix}pagination-smooth .${prefix}pagination-link, &.${prefix}pagination-smooth .${prefix}pagination-ellipsis`]:
            {
              [`@apply ${config.rounded.md}`]: {},
            },
          //Rounded:lg
          [`&.${prefix}pagination-curved .${prefix}pagination-list, &.${prefix}pagination-curved .${prefix}pagination-buttons, &.${prefix}pagination-curved .${prefix}pagination-buttons .${prefix}pagination-button,  &.${prefix}pagination-curved .${prefix}pagination-link, &.${prefix}pagination-curved .${prefix}pagination-ellipsis`]:
            {
              [`@apply ${config.rounded.lg}`]: {},
            },
          //Rounded:full
          [`&.${prefix}pagination-full .${prefix}pagination-list, &.${prefix}pagination-full .${prefix}pagination-buttons, &.${prefix}pagination-full .${prefix}pagination-buttons .${prefix}pagination-button,  &.${prefix}pagination-full .${prefix}pagination-link, &.${prefix}pagination-full .${prefix}pagination-ellipsis`]:
            {
              [`@apply ${config.rounded.full}`]: {},
            },
        },
      })
    }
  },
  function () {
    return {
      theme: {
        shurikenUi: {
          [key]: defaultConfig,
        },
      },
    }
  },
)
