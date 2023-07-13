import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption, defaultPluginOptions } from '../options'

const defaultPlaceloaderPageConfig = {
  minSize: '[400px]',
  innerSize: 'full',
  maxContentSize: 'sm',
  maxSizeXS: 'xs',
  maxSizeSM: 'sm',
  maxSizeMD: 'md',
  maxSizeLG: 'lg',
  maxSizeXL: 'xl',
  title: {
    text: 'muted-800',
    textDark: 'white',
  },
  subtitle: {
    text: 'muted-400',
  },
}

export default plugin.withOptions(
  function (options: PluginOption) {
    const { prefix } = defu(options, defaultPluginOptions)

    return function ({ addComponents, theme }) {
      const config = theme(
        'shurikenUi.placeloaderPage'
      ) satisfies typeof defaultPlaceloaderPageConfig

      addComponents({
        [`.${prefix}-placeloader-page`]: {
          [`@apply flex min-h-${config.minSize} items-center justify-center`]:
            {},

          [`.${prefix}-placeholder-page-inner`]: {
            [`@apply mx-auto w-${config.innerSize} text-center`]: {},
          },
          [`.${prefix}-placeholder-page-img`]: {
            [`@apply mx-auto block`]: {},
          },
          [`.${prefix}-placeholder-page-content`]: {
            [`@apply mx-auto max-w-${config.maxContentSize}`]: {},
          },
          [`.${prefix}-placeholder-page-actions`]: {
            [`@apply mt-4 flex justify-center gap-2`]: {},
          },
          [`.${prefix}-placeholder-page-title`]: {
            [`@apply text-${config.title.text} dark:text-${config.title.textDark} mb-1 mt-4`]:
              {},
          },
          [`.${prefix}-placeholder-page-subtitle`]: {
            [`@apply text-${config.subtitle.text}`]: {},
          },
          [`&.${prefix}-placeholder-xs .${prefix}-placeholder-page-img`]: {
            [`@apply max-w-${config.maxSizeXS}`]: {},
          },
          [`&.${prefix}-placeholder-sm .${prefix}-placeholder-page-img`]: {
            [`@apply max-w-${config.maxSizeSM}`]: {},
          },
          [`&.${prefix}-placeholder-md .${prefix}-placeholder-page-img`]: {
            [`@apply max-w-${config.maxSizeMD}`]: {},
          },
          [`&.${prefix}-placeholder-lg .${prefix}-placeholder-page-img`]: {
            [`@apply max-w-${config.maxSizeLG}`]: {},
          },
          [`&.${prefix}-placeholder-xl .${prefix}-placeholder-page-img`]: {
            [`@apply max-w-${config.maxSizeXL}`]: {},
          },
        },
      })
    }
  },
  function () {
    return {
      theme: {
        shurikenUi: {
          placeloaderPage: defaultPlaceloaderPageConfig,
        },
      },
    }
  }
)
