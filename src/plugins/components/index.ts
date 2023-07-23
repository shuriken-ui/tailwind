import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption } from '../options'
import accordion from './accordion'
import card from './card'
import avatarGroup from './avatar-group'
import autocomplete from './autocomplete'
import avatar from './avatar'
import checkbox from './checkbox'
import buttonAction from './button-action'
import buttonClose from './button-close'
import buttonIcon from './button-icon'
import buttonGroup from './button-group'
import dropdown from './dropdown'
import dropdownItem from './dropdown-item'
import dropdownDivider from './dropdown-divider'
import inputFile from './input-file'
import focus from './focus'
import heading from './heading'
import input from './input'
import inputFileRegular from './input-file-regular'
import label from './label'
import list from './list'
import link from './link'
import listbox from './listbox'
import mark from './mark'
import mask from './mask'
import pagination from './pagination'
import modal from './modal'
import paragraph from './paragraph'
import message from './message'
import placeload from './placeload'
import progress from './progress'
import snack from './snack'
import placeholderPage from './placeholder-page'
import select from './select'
import radio from './radio'
import progressCircle from './progress-circle'
import slimscroll from './slimscroll'
import toast from './toast'
import tabs from './tabs'
import text from './text'
import switchThin from './switch-thin'
import switchBall from './switch-ball'
import textarea from './textarea'
import tooltip from './tooltip'
import tag from './tag'
import breadcrumb from './breadcrumb'

const components = [
  accordion,
  card,
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
  dropdownItem,
  dropdownDivider,
  inputFile,
  focus,
  heading,
  input,
  inputFileRegular,
  label,
  list,
  link,
  listbox,
  mark,
  mask,
  pagination,
  modal,
  paragraph,
  message,
  placeload,
  progress,
  placeholderPage,
  select,
  radio,
  progressCircle,
  slimscroll,
  toast,
  tabs,
  tag,
  text,
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
