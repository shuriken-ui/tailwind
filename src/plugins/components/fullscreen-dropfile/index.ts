import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption, defaultPluginOptions } from '../../options'

export const defaultFullscreenDropfileConfig = {
  border: 'primary-500',
  height: '[230px]',
  width: '[500px]',
  icon: {
    text: 'primary-500',
    textSize: '6xl',
  },
  labelTextSize: 'base',
}

export default plugin.withOptions(
  function (options: PluginOption) {
    let { prefix } = defu(options, defaultPluginOptions)

    if (prefix) {
      prefix = `${prefix}-`
    }

    return function ({ addComponents, theme }) {
      const config = theme(
        'shurikenUi.fullscreenDropfile',
      ) satisfies typeof defaultFullscreenDropfileConfig

      addComponents({
        [`.${prefix}fullscreen-dropfile`]: {
          [`.${prefix}fullscreen-dropfile-outer`]: {
            [`@apply bg-muted-200/20 dark:bg-muted-800/20 fixed inset-0 z-40 backdrop-blur-sm transition-all hover:backdrop-blur-none`]:
              {},
          },
          [`.${prefix}fullscreen-dropfile-inner`]: {
            [`@apply fixed inset-0 z-50`]: {},

            [`.${prefix}fullscreen-dropfile-container`]: {
              [`@apply flex h-full flex-1 items-center justify-center`]: {},

              [`.${prefix}fullscreen-dropfile-content`]: {
                [`@apply border-${config.border} bg-muted-200 dark:bg-muted-800 mx-auto flex h-${config.height} w-${config.width} flex-col items-center justify-center gap-6 rounded border drop-shadow-sm`]:
                  {},

                [`.${prefix}fullscreen-dropfile-icon`]: {
                  [`@apply text-${config.icon.text} text-${config.icon.textSize}`]:
                    {},
                },
                [`.${prefix}fullscreen-dropfile-label`]: {
                  [`@apply text-${config.labelTextSize}`]: {},
                },
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
          fullscreenDropfile: defaultFullscreenDropfileConfig,
        },
      },
    }
  },
)
