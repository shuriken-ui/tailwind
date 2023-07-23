import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption } from '../options'
import avatarGroup from './avatar-group'
import autocomplete from './autocomplete'
import avatar from './avatar'
import checkbox from './checkbox'
import buttonAction from './button-action'
import buttonClose from './button-close'
import buttonIcon from './button-icon'
import buttonGroup from './button-group'
import dropdown from './dropdown'
import inputFile from './input-file'
import focus from './focus'
import heading from './heading'
import input from './input'
import inputFileRegular from './input-file-regular'
import label from './label'
import link from './link'
import listbox from './listbox'
import mark from './mark'
import mask from './mask'
import paragraph from './paragraph'
import message from './message'
import placeload from './placeload'
import snack from './snack'
import placeholderPage from './placeholder-page'
import select from './select'
import radio from './radio'
import progressCircle from './progress-circle'
import slimscroll from './slimscroll'
import switchThin from './switch-thin'
import switchBall from './switch-ball'
import textarea from './textarea'
import tooltip from './tooltip'
import breadcrumb from './breadcrumb'

const components = [
  breadcrumb,
  avatarGroup,
  autocomplete,
  avatar,
  checkbox,
  buttonAction,
  buttonClose,
  buttonIcon,
  buttonGroup,
  dropdown,
  inputFile,
  focus,
  heading,
  input,
  inputFileRegular,
  label,
  link,
  listbox,
  mark,
  mask,
  paragraph,
  message,
  placeload,
  placeholderPage,
  select,
  radio,
  progressCircle,
  slimscroll,
  switchThin,
  switchBall,
  snack,
  textarea,
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
