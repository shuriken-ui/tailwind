import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption, defaultPluginOptions } from '../../options'
import { type MessageConfig, defaultConfig, key } from './message.config'

export default plugin.withOptions(
  function (options: PluginOption) {
    let { prefix } = defu(options, defaultPluginOptions)

    if (prefix) {
      prefix = `${prefix}-`
    }

    return function ({ addComponents, theme }) {
      const config = theme(`shurikenUi.${key}`) satisfies MessageConfig

      addComponents({
        //Wrapper
        [`.${prefix}message`]: {
          [`@apply flex min-h-[3rem] items-center border p-1 pe-2`]: {},
          //Icon:outer
          [`.${prefix}message-icon-outer`]: {
            [`@apply flex h-${config.icon.outer.size} w-${config.icon.outer.size} shrink-0 items-center justify-center`]:
              {},
            //Icon:inner
            [`.${prefix}message-icon`]: {
              //Base
              [`@apply h-${config.icon.inner.size} w-${config.icon.inner.size}`]:
                {},
              //color
              [`@apply text-${config.icon.inner.color.light} dark:text-${config.icon.inner.color.dark}`]:
                {},
            },
          },
          //Inner:text
          [`.${prefix}message-inner-text`]: {
            //Base
            [`@apply px-3 block`]: {},
            //Font
            [`@apply font-${config.inner.font.family} text-${config.inner.font.size}`]:
              {},
            //Color
            [`@apply text-${config.inner.font.color.light} dark:text-${config.inner.font.color.dark}`]:
              {},
          },
          //Meesage:close
          [`.${prefix}message-close`]: {
            [`@apply ${prefix}focus me-2 ms-auto flex cursor-pointer items-center justify-center p-${config.close.padding} ${config.close.rounded}`]:
              {},
            //Color
            [`@apply text-${config.close.color.light} dark:text-${config.close.color.dark}`]:
              {},
            //Transition
            [`@apply transition-${config.close.transition.property} duration-${config.close.transition.duration}`]:
              {},
            //Close:icon
            [`.${prefix}close-icon`]: {
              [`@apply h-${config.close.icon.size} w-${config.close.icon.size}`]:
                {},
            },
          },
          //Rounded:sm
          [`&.${prefix}message-rounded`]: {
            [`@apply ${config.rounded.sm}`]: {},

            [`.${prefix}message-icon-outer`]: {
              [`@apply ${config.rounded.sm}`]: {},
            },
          },
          //Rounded:md
          [`&.${prefix}message-smooth`]: {
            [`@apply ${config.rounded.md}`]: {},

            [`.${prefix}message-icon-outer`]: {
              [`@apply ${config.rounded.md}`]: {},
            },
          },
          //Rounded:lg
          [`&.${prefix}message-curved`]: {
            [`@apply ${config.rounded.lg}`]: {},

            [`.${prefix}message-icon-outer`]: {
              [`@apply ${config.rounded.lg}`]: {},
            },
          },
          //Rounded:full
          [`&.${prefix}message-full`]: {
            [`@apply ${config.rounded.full}`]: {},

            [`.${prefix}message-icon-outer`]: {
              [`@apply ${config.rounded.full}`]: {},
            },
          },
          //Color:default
          [`&.${prefix}message-default`]: {
            //Border
            [`@apply border-${config.color.default.border.light} dark:border-${config.color.default.border.dark}`]:
              {},
            //Background
            [`@apply bg-${config.color.default.background.light} dark:bg-${config.color.default.background.dark}`]:
              {},
            //Icon:outer
            [`.${prefix}message-icon-outer`]: {
              //Color
              [`@apply text-${config.color.default.outer.color.light} dark:text-${config.color.default.outer.color.dark}`]:
                {},
              //Background
              [`@apply bg-${config.color.default.outer.background.light} dark:bg-${config.color.default.outer.background.dark}`]:
                {},
            },
            //Inner:text
            [`.${prefix}message-inner-text`]: {
              [`@apply text-${config.color.default.inner.color.light} dark:text-${config.color.default.inner.color.dark}`]:
                {},
            },
            //Message:close
            [`.${prefix}message-close`]: {
              //Color
              [`@apply text-${config.color.default.close.color.light} dark:text-${config.color.default.close.color.dark}`]:
                {},
              //Background:hover
              [`@apply hover:enabled:bg-${config.color.default.close.background.hover.light} dark:hover:enabled:bg-${config.color.default.close.background.hover.dark}`]:
                {},
              //Background:focus
              [`@apply focus-visible:bg-${config.color.default.close.background.focus.light} dark:focus-visible:bg-${config.color.default.close.background.focus.dark}`]:
                {},
              //Background:active
              [`@apply active:enabled:bg-${config.color.default.close.background.active.light} dark:active:enabled:bg-${config.color.default.close.background.active.dark}`]:
                {},
            },
          },
          //Color:muted
          [`&.${prefix}message-muted`]: {
            //Border
            [`@apply border-${config.color.muted.border.light} dark:border-${config.color.muted.border.dark}`]:
              {},
            //Background
            [`@apply bg-${config.color.muted.background.light} dark:bg-${config.color.muted.background.dark}`]:
              {},
            //Icon:outer
            [`.${prefix}message-icon-outer`]: {
              //Color
              [`@apply text-${config.color.muted.outer.color.light} dark:text-${config.color.muted.outer.color.dark}`]:
                {},
              //Background
              [`@apply bg-${config.color.muted.outer.background.light} dark:bg-${config.color.muted.outer.background.dark}`]:
                {},
            },
            //Inner:text
            [`.${prefix}message-inner-text`]: {
              [`@apply text-${config.color.muted.inner.color.light} dark:text-${config.color.muted.inner.color.dark}`]:
                {},
            },
            //Message:close
            [`.${prefix}message-close`]: {
              //Color
              [`@apply text-${config.color.muted.close.color.light} dark:text-${config.color.muted.close.color.dark}`]:
                {},
              //Background:hover
              [`@apply hover:enabled:bg-${config.color.muted.close.background.hover.light} dark:hover:enabled:bg-${config.color.muted.close.background.hover.dark}`]:
                {},
              //Background:focus
              [`@apply focus-visible:bg-${config.color.muted.close.background.focus.light} dark:focus-visible:bg-${config.color.muted.close.background.focus.dark}`]:
                {},
              //Background:active
              [`@apply active:enabled:bg-${config.color.muted.close.background.active.light} dark:active:enabled:bg-${config.color.muted.close.background.active.dark}`]:
                {},
            },
          },
          //Color:primary
          [`&.${prefix}message-primary`]: {
            //Border
            [`@apply border-${config.color.primary.border.light} dark:border-${config.color.primary.border.dark}`]:
              {},
            //Background
            [`@apply bg-${config.color.primary.background.light} dark:bg-${config.color.primary.background.dark}`]:
              {},
            //Icon:outer
            [`.${prefix}message-icon-outer`]: {
              //Color
              [`@apply text-${config.color.primary.outer.color.light} dark:text-${config.color.primary.outer.color.dark}`]:
                {},
              //Background
              [`@apply bg-${config.color.primary.outer.background.light} dark:bg-${config.color.primary.outer.background.dark}`]:
                {},
            },
            //Inner:text
            [`.${prefix}message-inner-text`]: {
              [`@apply text-${config.color.primary.inner.color.light} dark:text-${config.color.primary.inner.color.dark}`]:
                {},
            },
            //Message:close
            [`.${prefix}message-close`]: {
              //Color
              [`@apply text-${config.color.primary.close.color.light} dark:text-${config.color.primary.close.color.dark}`]:
                {},
              //Background:hover
              [`@apply hover:enabled:bg-${config.color.primary.close.background.hover.light} dark:hover:enabled:bg-${config.color.primary.close.background.hover.dark}`]:
                {},
              //Background:focus
              [`@apply focus-visible:bg-${config.color.primary.close.background.focus.light} dark:focus-visible:bg-${config.color.primary.close.background.focus.dark}`]:
                {},
              //Background:active
              [`@apply active:enabled:bg-${config.color.primary.close.background.active.light} dark:active:enabled:bg-${config.color.primary.close.background.active.dark}`]:
                {},
            },
          },
          //Color:info
          [`&.${prefix}message-info`]: {
            //Border
            [`@apply border-${config.color.info.border.light} dark:border-${config.color.info.border.dark}`]:
              {},
            //Background
            [`@apply bg-${config.color.info.background.light} dark:bg-${config.color.info.background.dark}`]:
              {},
            //Icon:outer
            [`.${prefix}message-icon-outer`]: {
              //Color
              [`@apply text-${config.color.info.outer.color.light} dark:text-${config.color.info.outer.color.dark}`]:
                {},
              //Background
              [`@apply bg-${config.color.info.outer.background.light} dark:bg-${config.color.info.outer.background.dark}`]:
                {},
            },
            //Inner:text
            [`.${prefix}message-inner-text`]: {
              [`@apply text-${config.color.info.inner.color.light} dark:text-${config.color.info.inner.color.dark}`]:
                {},
            },
            //Message:close
            [`.${prefix}message-close`]: {
              //Color
              [`@apply text-${config.color.info.close.color.light} dark:text-${config.color.info.close.color.dark}`]:
                {},
              //Background:hover
              [`@apply hover:enabled:bg-${config.color.info.close.background.hover.light} dark:hover:enabled:bg-${config.color.info.close.background.hover.dark}`]:
                {},
              //Background:focus
              [`@apply focus-visible:bg-${config.color.info.close.background.focus.light} dark:focus-visible:bg-${config.color.info.close.background.focus.dark}`]:
                {},
              //Background:active
              [`@apply active:enabled:bg-${config.color.info.close.background.active.light} dark:active:enabled:bg-${config.color.info.close.background.active.dark}`]:
                {},
            },
          },
          //Color:success
          [`&.${prefix}message-success`]: {
            //Border
            [`@apply border-${config.color.success.border.light} dark:border-${config.color.success.border.dark}`]:
              {},
            //Background
            [`@apply bg-${config.color.success.background.light} dark:bg-${config.color.success.background.dark}`]:
              {},
            //Icon:outer
            [`.${prefix}message-icon-outer`]: {
              //Color
              [`@apply text-${config.color.success.outer.color.light} dark:text-${config.color.success.outer.color.dark}`]:
                {},
              //Background
              [`@apply bg-${config.color.success.outer.background.light} dark:bg-${config.color.success.outer.background.dark}`]:
                {},
            },
            //Inner:text
            [`.${prefix}message-inner-text`]: {
              [`@apply text-${config.color.success.inner.color.light} dark:text-${config.color.success.inner.color.dark}`]:
                {},
            },
            //Message:close
            [`.${prefix}message-close`]: {
              //Color
              [`@apply text-${config.color.success.close.color.light} dark:text-${config.color.success.close.color.dark}`]:
                {},
              //Background:hover
              [`@apply hover:enabled:bg-${config.color.success.close.background.hover.light} dark:hover:enabled:bg-${config.color.success.close.background.hover.dark}`]:
                {},
              //Background:focus
              [`@apply focus-visible:bg-${config.color.success.close.background.focus.light} dark:focus-visible:bg-${config.color.success.close.background.focus.dark}`]:
                {},
              //Background:active
              [`@apply active:enabled:bg-${config.color.success.close.background.active.light} dark:active:enabled:bg-${config.color.success.close.background.active.dark}`]:
                {},
            },
          },
          //Color:warning
          [`&.${prefix}message-warning`]: {
            //Border
            [`@apply border-${config.color.warning.border.light} dark:border-${config.color.warning.border.dark}`]:
              {},
            //Background
            [`@apply bg-${config.color.warning.background.light} dark:bg-${config.color.warning.background.dark}`]:
              {},
            //Icon:outer
            [`.${prefix}message-icon-outer`]: {
              //Color
              [`@apply text-${config.color.warning.outer.color.light} dark:text-${config.color.warning.outer.color.dark}`]:
                {},
              //Background
              [`@apply bg-${config.color.warning.outer.background.light} dark:bg-${config.color.warning.outer.background.dark}`]:
                {},
            },
            //Inner:text
            [`.${prefix}message-inner-text`]: {
              [`@apply text-${config.color.warning.inner.color.light} dark:text-${config.color.warning.inner.color.dark}`]:
                {},
            },
            //Message:close
            [`.${prefix}message-close`]: {
              //Color
              [`@apply text-${config.color.warning.close.color.light} dark:text-${config.color.warning.close.color.dark}`]:
                {},
              //Background:hover
              [`@apply hover:enabled:bg-${config.color.warning.close.background.hover.light} dark:hover:enabled:bg-${config.color.warning.close.background.hover.dark}`]:
                {},
              //Background:focus
              [`@apply focus-visible:bg-${config.color.warning.close.background.focus.light} dark:focus-visible:bg-${config.color.warning.close.background.focus.dark}`]:
                {},
              //Background:active
              [`@apply active:enabled:bg-${config.color.warning.close.background.active.light} dark:active:enabled:bg-${config.color.warning.close.background.active.dark}`]:
                {},
            },
          },
          //Color:danger
          [`&.${prefix}message-danger`]: {
            //Border
            [`@apply border-${config.color.danger.border.light} dark:border-${config.color.danger.border.dark}`]:
              {},
            //Background
            [`@apply bg-${config.color.danger.background.light} dark:bg-${config.color.danger.background.dark}`]:
              {},
            //Icon:outer
            [`.${prefix}message-icon-outer`]: {
              //Color
              [`@apply text-${config.color.danger.outer.color.light} dark:text-${config.color.danger.outer.color.dark}`]:
                {},
              //Background
              [`@apply bg-${config.color.danger.outer.background.light} dark:bg-${config.color.danger.outer.background.dark}`]:
                {},
            },
            //Inner:text
            [`.${prefix}message-inner-text`]: {
              [`@apply text-${config.color.danger.inner.color.light} dark:text-${config.color.danger.inner.color.dark}`]:
                {},
            },
            //Message:close
            [`.${prefix}message-close`]: {
              //Color
              [`@apply text-${config.color.danger.close.color.light} dark:text-${config.color.danger.close.color.dark}`]:
                {},
              //Background:hover
              [`@apply hover:enabled:bg-${config.color.danger.close.background.hover.light} dark:hover:enabled:bg-${config.color.danger.close.background.hover.dark}`]:
                {},
              //Background:focus
              [`@apply focus-visible:bg-${config.color.danger.close.background.focus.light} dark:focus-visible:bg-${config.color.danger.close.background.focus.dark}`]:
                {},
              //Background:active
              [`@apply active:enabled:bg-${config.color.danger.close.background.active.light} dark:active:enabled:bg-${config.color.danger.close.background.active.dark}`]:
                {},
            },
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
