import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption, defaultPluginOptions } from '../../options'

export const defaultAvatarGroupConfig = {
  avatarOuter: {
    bg: 'white',
    bgDark: 'muted-800',
    rounded: 'full',
    duration: '100',
    avatar: {
      bg: 'primary-500/20',
      text: 'primary-500',
    },
  },
  avatarCount: {
    bg: 'white',
    bgDark: 'muted-800',
    rounded: 'full',
    duration: '100',
    inner: {
      bg: 'muted-200',
      bgDark: 'muted-700',
      border: 'white',
      borderDark: 'muted-800',
      size: 'full',
      rounded: 'full',
    },
    text: {
      text: 'muted-500',
      textDark: 'muted-300',
      font: 'normal',
    },
  },
  avatarGroupXXS: {
    outer: {
      size: '6',
    },
    count: {
      size: '6',
      text: 'xs',
    },
  },
  avatarGroupXS: {
    outer: {
      size: '8',
    },
    count: {
      size: '8',
      text: 'sm',
    },
  },
  avatarGroupSM: {
    outer: {
      size: '10',
    },
    count: {
      size: '10',
      text: 'sm',
    },
  },
  avatarGroupMD: {
    outer: {
      size: '12',
    },
    count: {
      size: '12',
      text: 'lg',
    },
  },
  avatarGroupLG: {
    outer: {
      size: '16',
    },
    count: {
      size: '16',
      text: 'xl',
    },
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
        'shurikenUi.avatarGroup',
      ) satisfies typeof defaultAvatarGroupConfig

      addComponents({
        [`.${prefix}avatar-group`]: {
          [`@apply flex`]: {},

          [`.${prefix}avatar-outer`]: {
            [`@apply dark:bg-${config.avatarOuter.bgDark} relative flex shrink-0 items-center justify-center rounded-${config.avatarOuter.rounded} bg-${config.avatarOuter.bg} transition-all duration-${config.avatarOuter.duration} ease-in`]:
              {},
            [`.${prefix}avatar`]: {
              [`@apply bg-${config.avatarOuter.avatar.bg} text-${config.avatarOuter.avatar.text} !scale-90`]:
                {},
            },
          },
          [`.${prefix}avatar-count`]: {
            [`@apply relative dark:bg-${config.avatarCount.bgDark} shrink-0 rounded-${config.avatarCount.rounded} bg-${config.avatarCount.bg} transition-all duration-${config.avatarCount.duration} ease-in`]:
              {},

            [`.${prefix}avatar-count-inner`]: {
              [`@apply bg-${config.avatarCount.inner.bg} dark:border-${config.avatarCount.inner.borderDark} dark:bg-${config.avatarCount.inner.bgDark} relative inline-flex h-${config.avatarCount.inner.size} w-${config.avatarCount.inner.size} scale-90 items-center justify-center rounded-${config.avatarCount.inner.rounded} border-${config.avatarCount.inner.border}`]:
                {},
            },
            [`.${prefix}avatar-count-text`]: {
              [`@apply text-${config.avatarCount.text.text} dark:text-${config.avatarCount.text.textDark} -ms-1 font-sans font-${config.avatarCount.text.font} uppercase`]:
                {},
            },
          },
          [`&.${prefix}avatar-group-xxs`]: {
            [`.${prefix}avatar-outer`]: {
              [`@apply h-${config.avatarGroupXXS.outer.size} w-${config.avatarGroupXXS.outer.size}`]:
                {},

              [`&:first-child`]: {
                [`@apply hover:-ms-2 hover:me-2 focus:-ms-2 focus:me-2`]: {},
              },
              [`&:not(:first-child)`]: {
                [`@apply -ms-2 hover:-ms-4 hover:me-2 focus:-ms-4 focus:me-2`]:
                  {},
              },
            },
            [`.${prefix}avatar-count`]: {
              [`@apply -ms-2 h-${config.avatarGroupXXS.count.size} w-${config.avatarGroupXXS.count.size}`]:
                {},

              [`.${prefix}avatar-count-text`]: {
                [`@apply text-${config.avatarGroupXXS.count.text}`]: {},
              },
            },
          },
          [`&.${prefix}avatar-group-xs`]: {
            [`.${prefix}avatar-outer`]: {
              [`@apply h-${config.avatarGroupXS.outer.size} w-${config.avatarGroupXS.outer.size}`]:
                {},

              [`&:first-child`]: {
                [`@apply hover:-ms-2 hover:me-2 focus:-ms-2 focus:me-2`]: {},
              },
              [`&:not(:first-child)`]: {
                [`@apply -ms-2 hover:-ms-4 hover:me-2 focus:-ms-4 focus:me-2`]:
                  {},
              },
            },
            [`.${prefix}avatar-count`]: {
              [`@apply -ms-2 h-${config.avatarGroupXS.count.size} w-${config.avatarGroupXS.count.size}`]:
                {},

              [`.${prefix}avatar-count-text`]: {
                [`@apply text-${config.avatarGroupXS.count.text}`]: {},
              },
            },
          },
          [`&.${prefix}avatar-group-sm`]: {
            [`.${prefix}avatar-outer`]: {
              [`@apply h-${config.avatarGroupSM.outer.size} w-${config.avatarGroupSM.outer.size}`]:
                {},

              [`&:first-child`]: {
                [`@apply hover:-ms-2 hover:me-2 focus:me-2`]: {},
              },
              [`&:not(:first-child)`]: {
                [`@apply -ms-3 hover:-ms-5 hover:me-2 focus:-ms-5 focus:me-2`]:
                  {},
              },
            },
            [`.${prefix}avatar-count`]: {
              [`@apply -ms-3 h-${config.avatarGroupSM.count.size} w-${config.avatarGroupSM.count.size}`]:
                {},

              [`.${prefix}avatar-count-text`]: {
                [`@apply text-${config.avatarGroupSM.count.text}`]: {},
              },
            },
          },
          [`&.${prefix}avatar-group-md`]: {
            [`.${prefix}avatar-outer`]: {
              [`@apply h-${config.avatarGroupMD.outer.size} w-${config.avatarGroupMD.outer.size}`]:
                {},

              [`&:first-child`]: {
                [`@apply hover:-ms-3 hover:me-3 focus:me-3`]: {},
              },
              [`&:not(:first-child)`]: {
                [`@apply -ms-4 hover:-ms-7 hover:me-3 focus:me-3`]: {},
              },
            },
            [`.${prefix}avatar-count`]: {
              [`@apply -ms-4 h-${config.avatarGroupMD.count.size} w-${config.avatarGroupMD.count.size}`]:
                {},

              [`.${prefix}avatar-count-text`]: {
                [`@apply text-${config.avatarGroupMD.count.text}`]: {},
              },
            },
          },
          [`&.${prefix}avatar-group-lg`]: {
            [`.${prefix}avatar-outer`]: {
              [`@apply h-${config.avatarGroupLG.outer.size} w-${config.avatarGroupLG.outer.size}`]:
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
              [`@apply -ms-5 h-${config.avatarGroupLG.count.size} w-${config.avatarGroupLG.count.size}`]:
                {},

              [`.${prefix}avatar-count-text`]: {
                [`@apply text-${config.avatarGroupLG.count.text}`]: {},
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
          avatarGroup: defaultAvatarGroupConfig,
        },
      },
    }
  },
)
