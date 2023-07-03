import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption, defaultPluginOptions } from '../options'

const defaultAvatarConfig = {
  position: 'center',
}

export default plugin.withOptions(
  function (options: PluginOption) {
    const { prefix } = defu(options, defaultPluginOptions)

    return function ({ addComponents, theme }) {
      const config = theme(
        'shurikenUi.avatar'
      ) satisfies typeof defaultAvatarConfig

      addComponents({
        [`.${prefix}-avatar`]: {
          [`@apply relative inline-flex shrink-0 items-${config.position} justify-${config.position} outline-none`]:
            {},
        },
      })
    }
  },
  function () {
    return {
      theme: {
        shurikenUi: {
          avatar: defaultAvatarConfig,
        },
      },
    }
  }
)
