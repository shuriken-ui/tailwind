import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption, defaultPluginOptions } from '../options'

const defaultFullscreenDropfileConfig = {
  border: 'primary-500',
  height: '[230px]',
  width: '[500px]',
  icon: {
    text: 'primary-500',
    textSize: '6xl',
  },
  labelTextSize: '2xl',
}

export default plugin.withOptions(
  function (options: PluginOption) {
    const { prefix } = defu(options, defaultPluginOptions)

    return function ({ addComponents, theme }) {
      const config = theme(
        'shurikenUi.fullscreenDropfile'
      ) satisfies typeof defaultFullscreenDropfileConfig

      addComponents({
        [`.${prefix}-fullscreen-dropfile`]: {
          [`.${prefix}-fullscreen-dropfile-outer`]: {
            [`@apply ${prefix}-bg-400/20 fixed inset-0 z-40 backdrop-blur-sm transition-all hover:backdrop-blur-none`]:
              {},
          },
          [`.${prefix}-fullscreen-dropfile-inner`]: {
            [`@apply fixed inset-0 z-50`]: {},

            [`.${prefix}-fullscreen-dropfile-container`]: {
              [`@apply flex h-full flex-1 items-center justify-center`]: {},

              [`.${prefix}-fullscreen-dropfile-content`]: {
                [`@apply border-primary-500 ${prefix}-bg-200 mx-auto flex h-[230px] w-[500px] flex-col items-center justify-center gap-6 rounded border drop-shadow-sm`]:
                  {},

                [`.${prefix}-fullscreen-dropfile-icon`]: {
                  [`@apply text-primary-500 text-6xl`]: {},
                },
                [`.${prefix}-fullscreen-dropfile-label`]: {
                  [`@apply text-2xl`]: {},
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
  }
)
