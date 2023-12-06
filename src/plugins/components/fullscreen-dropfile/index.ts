import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption, defaultPluginOptions } from '../../options'
import {
  type FullscreenDropfileConfig,
  defaultConfig,
  key,
} from './fullscreen-dropfile.config'

export default plugin.withOptions(
  function (options: PluginOption) {
    let { prefix } = defu(options, defaultPluginOptions)

    if (prefix) {
      prefix = `${prefix}-`
    }

    return function ({ addComponents, theme }) {
      const config = theme(
        `shurikenUi.${key}`,
      ) satisfies FullscreenDropfileConfig

      addComponents({
        //Wrapper
        [`.${prefix}fullscreen-dropfile`]: {
          //Dropfile:outer
          [`.${prefix}fullscreen-dropfile-outer`]: {
            [`@apply bg-muted-100/50 dark:bg-muted-800/20 fixed inset-0 z-40 backdrop-blur-sm transition-all hover:backdrop-blur-none`]:
              {},
          },
          //Dropfile:inner
          [`.${prefix}fullscreen-dropfile-inner`]: {
            [`@apply fixed inset-0 z-50`]: {},
            //Dropfile:container
            [`.${prefix}fullscreen-dropfile-container`]: {
              [`@apply flex h-full flex-1 items-center justify-center`]: {},
              //Dropfile:content
              [`.${prefix}fullscreen-dropfile-content`]: {
                [`@apply h-${config.height} w-${config.width} mx-auto flex flex-col items-center justify-center gap-6 drop-shadow-sm`]:
                  {},
                //Background
                [`@apply bg-muted-100 dark:bg-muted-800`]: {},
                //Border
                [`@apply ${config.rounded} border-2 border-dashed border-${config.border.light} dark:border-${config.border.dark}`]:
                  {},
                //Icon
                [`.${prefix}fullscreen-dropfile-icon`]: {
                  [`@apply h-${config.icon.size} w-${config.icon.size} text-${config.icon.font.color.light} dark:text-${config.icon.font.color.dark}`]:
                    {},
                },
                //Label
                [`.${prefix}fullscreen-dropfile-label`]: {
                  [`@apply text-${config.label.font.size} text-muted-500 dark:text-muted-400`]:
                    {},
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
          [key]: defaultConfig,
        },
      },
    }
  },
)
