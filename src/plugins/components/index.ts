import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption } from '../options'
import dropdown from './dropdown'
import focus from './focus'
import heading from './heading'
import label from './label'
import mark from './mark'
import mask from './mask'
import placeload from './placeload'
import slimscroll from './slimscroll'
import tooltip from './tooltip'

const components = [
  dropdown,
  focus,
  heading,
  label,
  mark,
  mask,
  placeload,
  slimscroll,
  tooltip,
]

export default plugin.withOptions(
  function (options: PluginOption) {
    return function (api) {
      for (const component of components) {
        component(options).handler(api)
      }
    }
  },
  function (options) {
    let config = {}

    for (const component of components) {
      config = defu(config, component(options).config)
    }

    return config
  }
)
