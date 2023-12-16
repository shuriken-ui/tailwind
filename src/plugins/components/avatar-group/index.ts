import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption, defaultPluginOptions } from '../../options'
import { type AvatarGroup, defaultConfig, key } from './avatar-group.config'

export default plugin.withOptions(
  function (options: PluginOption) {
    let { prefix } = defu(options, defaultPluginOptions)

    if (prefix) {
      prefix = `${prefix}-`
    }

    return function ({ addComponents, theme }) {
      const config = theme(`shurikenUi.${key}`) satisfies AvatarGroup

      addComponents({
        [`.${prefix}avatar-group`]: {
          [`@apply flex`]: {},
          //AvatarGroup:outer
          [`.${prefix}avatar-outer`]: {
            //Base
            [`@apply relative flex shrink-0 items-center justify-center rounded-${config.avatar.rounded}`]:
              {},
            //Background
            [`@apply bg-${config.avatar.outer.background.light} dark:bg-${config.avatar.outer.background.dark}`]:
              {},
            //Transition
            [`@apply transition-${config.avatar.transition.property} duration-${config.avatar.transition.duration} ease-in`]:
              {},
            //AvatarGroup:inner
            [`.${prefix}avatar`]: {
              [`@apply bg-${config.avatar.inner.background.light} text-${config.avatar.inner.background.dark} !scale-90`]:
                {},
            },
          },
          //AvatarGroup:count
          [`.${prefix}avatar-count`]: {
            //Base
            [`@apply relative shrink-0 rounded-${config.count.outer.rounded}`]:
              {},
            //Background
            [`@apply bg-${config.count.outer.background.light} dark:bg-${config.count.outer.background.dark}`]:
              {},
            //Transition
            [`@apply transition-${config.count.transition.property} duration-${config.count.transition.duration} ease-in`]:
              {},
            //Count:inner
            [`.${prefix}avatar-count-inner`]: {
              [`@apply relative scale-90 inline-flex items-center justify-center rounded-${config.count.inner.rounded}`]:
                {},
              //Size
              [`@apply h-${config.count.inner.size} w-${config.count.inner.size}`]:
                {},
              //Background
              [`@apply bg-${config.count.inner.background.light} dark:bg-${config.count.inner.background.dark}`]:
                {},
              //Border
              [`@apply border border-${config.count.inner.border.light} dark:border-${config.count.inner.border.dark}`]:
                {},
            },
            //Count:text
            [`.${prefix}avatar-count-text`]: {
              [`@apply -ms-1 uppercase`]: {},
              //Font
              [`@apply font-${config.count.text.font.family} font-${config.count.text.font.weight}`]:
                {},
              //Font Color
              [`@apply text-${config.count.text.font.color.light} dark:text-${config.count.text.font.color.dark}`]:
                {},
            },
          },
          //Size:xxs
          [`&.${prefix}avatar-group-xxs`]: {
            //outer
            [`.${prefix}avatar-outer`]: {
              [`@apply h-${config.size.xxs.outer.size} w-${config.size.xxs.outer.size}`]:
                {},

              [`&:first-child`]: {
                [`@apply hover:-ms-2 hover:me-2 focus:-ms-2 focus:me-2`]: {},
              },
              [`&:not(:first-child)`]: {
                [`@apply -ms-2 hover:-ms-4 hover:me-2 focus:-ms-4 focus:me-2`]:
                  {},
              },
            },
            //count
            [`.${prefix}avatar-count`]: {
              [`@apply -ms-2 h-${config.size.xxs.count.size} w-${config.size.xxs.count.size}`]:
                {},

              [`.${prefix}avatar-count-text`]: {
                [`@apply text-${config.size.xxs.count.font.size}`]: {},
              },
            },
          },
          //Size:xs
          [`&.${prefix}avatar-group-xs`]: {
            //outer
            [`.${prefix}avatar-outer`]: {
              [`@apply h-${config.size.xs.outer.size} w-${config.size.xs.outer.size}`]:
                {},

              [`&:first-child`]: {
                [`@apply hover:-ms-2 hover:me-2 focus:-ms-2 focus:me-2`]: {},
              },
              [`&:not(:first-child)`]: {
                [`@apply -ms-2 hover:-ms-4 hover:me-2 focus:-ms-4 focus:me-2`]:
                  {},
              },
            },
            //count
            [`.${prefix}avatar-count`]: {
              [`@apply -ms-2 h-${config.size.xs.count.size} w-${config.size.xs.count.size}`]:
                {},

              [`.${prefix}avatar-count-text`]: {
                [`@apply text-${config.size.xs.count.font.size}`]: {},
              },
            },
          },
          //Size:sm
          [`&.${prefix}avatar-group-sm`]: {
            //outer
            [`.${prefix}avatar-outer`]: {
              [`@apply h-${config.size.sm.outer.size} w-${config.size.sm.outer.size}`]:
                {},

              [`&:first-child`]: {
                [`@apply hover:-ms-2 hover:me-2 focus:me-2`]: {},
              },
              [`&:not(:first-child)`]: {
                [`@apply -ms-3 hover:-ms-5 hover:me-2 focus:-ms-5 focus:me-2`]:
                  {},
              },
            },
            //count
            [`.${prefix}avatar-count`]: {
              [`@apply -ms-3 h-${config.size.sm.count.size} w-${config.size.sm.count.size}`]:
                {},

              [`.${prefix}avatar-count-text`]: {
                [`@apply text-${config.size.sm.count.font.size}`]: {},
              },
            },
          },
          //Size:md
          [`&.${prefix}avatar-group-md`]: {
            //outer
            [`.${prefix}avatar-outer`]: {
              [`@apply h-${config.size.md.outer.size} w-${config.size.md.outer.size}`]:
                {},

              [`&:first-child`]: {
                [`@apply hover:-ms-3 hover:me-3 focus:me-3`]: {},
              },
              [`&:not(:first-child)`]: {
                [`@apply -ms-4 hover:-ms-7 hover:me-3 focus:me-3`]: {},
              },
            },
            //count
            [`.${prefix}avatar-count`]: {
              [`@apply -ms-4 h-${config.size.md.count.size} w-${config.size.md.count.size}`]:
                {},

              [`.${prefix}avatar-count-text`]: {
                [`@apply text-${config.size.md.count.font.size}`]: {},
              },
            },
          },
          //Size:lg
          [`&.${prefix}avatar-group-lg`]: {
            [`.${prefix}avatar-outer`]: {
              [`@apply h-${config.size.lg.outer.size} w-${config.size.lg.outer.size}`]:
                {},

              [`&:first-child`]: {
                [`@apply hover:-ms-4 hover:me-4 focus:me-4`]: {},
              },
              [`&:not(:first-child)`]: {
                [`@apply -ms-5 hover:-ms-9 hover:me-4 focus:-ms-9 focus:me-4`]:
                  {},
              },
            },
            [`.${prefix}avatar-count`]: {
              [`@apply -ms-5 h-${config.size.lg.count.size} w-${config.size.lg.count.size}`]:
                {},

              [`.${prefix}avatar-count-text`]: {
                [`@apply text-${config.size.lg.count.font.size}`]: {},
              },
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
