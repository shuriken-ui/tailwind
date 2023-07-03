import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption } from '../options'
import accordion from './accordion'
import avatar from './avatar'
import buttonClose from './button-close'
import buttonIcon from './button-icon'
import card from './card'
import dropdown from './dropdown'
import focus from './focus'
import label from './label'
import mark from './mark'
import mask from './mask'
import placeload from './placeload'
import prose from './prose'
import slimscroll from './slimscroll'
import tag from './tag'
import themeSwitch from './theme-switch'
import themeToggle from './theme-toggle'
import tooltip from './tooltip'

const components = [
  accordion,
  avatar,
  buttonClose,
  buttonIcon,
  card,
  dropdown,
  focus,
  label,
  mark,
  mask,
  placeload,
  prose,
  slimscroll,
  tag,
  themeSwitch,
  themeToggle,
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
