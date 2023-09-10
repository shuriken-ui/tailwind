import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption, defaultPluginOptions } from '../../options'

export const defaultCardConfig = {
  size: 'full',
  duration: '300',
  cardWhite: {
    bg: 'white',
    bgDark: 'muted-800',
    border: 'muted-200',
    borderDark: 'muted-700',
  },
  cardWhiteContrast: {
    bg: 'white',
    bgDark: 'muted-950',
    border: 'muted-200',
    borderDark: 'muted-800',
  },
  cardMuted: {
    bg: 'muted-100',
    bgDark: 'muted-800',
    border: 'muted-200',
    borderDark: 'muted-700',
  },
  cardMutedContrast: {
    bg: 'muted-100',
    bgDark: 'muted-950',
    border: 'muted-200',
    borderDark: 'muted-800',
  },
  cardPrimary: {
    bg: 'primary-500/10',
    border: 'primary-500',
  },
  cardInfo: {
    bg: 'info-500/10',
    border: 'info-500',
  },
  cardSuccess: {
    bg: 'success-500/10',
    border: 'success-500',
  },
  cardWarning: {
    bg: 'warning-500/10',
    border: 'warning-500',
  },
  cardDanger: {
    bg: 'danger-500/10',
    border: 'danger-500',
  },
  rounded: {
    default: 'md',
    smooth: 'lg',
    curved: 'xl',
  },
  cardSadow: {
    color: 'muted-300/30',
    colorDark: 'muted-800/30',
    size: 'xl',
  },
  cardSadowHover: {
    color: 'muted-300/30',
    colorDark: 'muted-800/30',
    size: 'xl',
  },
}

export default plugin.withOptions(
  function (options: PluginOption) {
    let { prefix } = defu(options, defaultPluginOptions)

    if (prefix) {
      prefix = `${prefix}-`
    }

    return function ({ addComponents, theme }) {
      const config = theme('shurikenUi.card') satisfies typeof defaultCardConfig

      addComponents({
        [`.${prefix}card`]: {
          [`@apply relative w-${config.size} transition-all duration-${config.duration}`]:
            {},

          [`&.${prefix}card-white`]: {
            [`@apply border bg-${config.cardWhite.bg} border-${config.cardWhite.border} dark:border-${config.cardWhite.borderDark} dark:bg-${config.cardWhite.bgDark}`]:
              {},
          },
          [`&.${prefix}card-white-contrast`]: {
            [`@apply border bg-${config.cardWhiteContrast.bg} border-${config.cardWhiteContrast.border} dark:border-${config.cardWhiteContrast.borderDark} dark:bg-${config.cardWhiteContrast.bgDark}`]:
              {},
          },
          [`&.${prefix}card-muted`]: {
            [`@apply border bg-${config.cardMuted.bg} border-${config.cardMuted.border} dark:border-${config.cardMuted.borderDark} dark:bg-${config.cardMuted.bgDark}`]:
              {},
          },
          [`&.${prefix}card-muted-contrast`]: {
            [`@apply border bg-${config.cardMutedContrast.bg} border-${config.cardMutedContrast.border} dark:border-${config.cardMutedContrast.borderDark} dark:bg-${config.cardMutedContrast.bgDark}`]:
              {},
          },
          [`&.${prefix}card-primary`]: {
            [`@apply border bg-${config.cardPrimary.bg} border-${config.cardPrimary.border}`]:
              {},
          },
          [`&.${prefix}card-info`]: {
            [`@apply border bg-${config.cardInfo.bg} border-${config.cardInfo.border}`]:
              {},
          },
          [`&.${prefix}card-success`]: {
            [`@apply border bg-${config.cardSuccess.bg} border-${config.cardSuccess.border}`]:
              {},
          },
          [`&.${prefix}card-warning`]: {
            [`@apply border bg-${config.cardWarning.bg} border-${config.cardWarning.border}`]:
              {},
          },
          [`&.${prefix}card-danger`]: {
            [`@apply border bg-${config.cardDanger.bg} border-${config.cardDanger.border}`]:
              {},
          },
          [`&.${prefix}card-rounded`]: {
            [`@apply rounded-${config.rounded.default}`]: {},
          },
          [`&.${prefix}card-smooth`]: {
            [`@apply rounded-${config.rounded.smooth}`]: {},
          },
          [`&.${prefix}card-curved`]: {
            [`@apply rounded-${config.rounded.curved}`]: {},
          },

          [`&:not(.${prefix}card-primary):not(.${prefix}card-info):not(.${prefix}card-success):not(.${prefix}card-warning):not(.${prefix}card-danger)`]:
            {
              [`&.${prefix}card-shadow`]: {
                [`@apply shadow-${config.cardSadow.color} dark:shadow-${config.cardSadow.colorDark} shadow-${config.cardSadow.size}`]:
                  {},
              },
              [`&.${prefix}card-shadow-hover`]: {
                [`@apply hover:shadow-${config.cardSadowHover.color} dark:hover:shadow-${config.cardSadowHover.colorDark} hover:shadow-${config.cardSadowHover.size}`]:
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
          card: defaultCardConfig,
        },
      },
    }
  },
)
