import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption } from '../options'
import bg from './bg'
import text from './text'

const utilities = [bg, text]

export default plugin.withOptions(
  function (options: PluginOption) {
    return function (api) {
      for (const utility of utilities) {
        utility(options).handler(api)
      }
    }
  },
  function (options) {
    let config = {}

    for (const utility of utilities) {
      config = defu(config, utility(options).config)
    }

    return config
  },
)
