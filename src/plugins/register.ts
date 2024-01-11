import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'

type Plugin = ReturnType<typeof plugin>

export function mergePlugins(plugins: Plugin[]) {
  return plugin(
    (api) => {
      for (const utility of plugins) {
        utility.handler(api)
      }
    },
    () => {
      let config = {}

      for (const utility of plugins) {
        config = defu(config, utility.config)
      }

      return config
    },
  )
}
