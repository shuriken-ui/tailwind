import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption } from '../options'
import accordion from './accordion'
import autocomplete from './autocomplete'
import avatar from './avatar'
import avatarGroup from './avatar-group'
import breadcrumb from './breadcrumb'
import buttonAction from './button-action'
import buttonClose from './button-close'
import buttonGroup from './button-group'
import buttonIcon from './button-icon'
import button from './button'
import card from './card'
import checkbox from './checkbox'
import dropdownDivider from './dropdown-divider'
import dropdownItem from './dropdown-item'
import dropdown from './dropdown'
import focus from './focus'
import fullscreenDropfile from './fullscreen-dropfile'
import heading from './heading'
import iconBox from './icon-box'
import inputFileRegular from './input-file-regular'
import inputFile from './input-file'
import input from './input'
import label from './label'
import link from './link'
import list from './list'
import listbox from './listbox'
import mark from './mark'
import mask from './mask'
import messageText from './message-text'
import message from './message'
import modal from './modal'
import pagination from './pagination'
import paragraph from './paragraph'
import placeholderPage from './placeholder-page'
import placeload from './placeload'
import progressCircle from './progress-circle'
import progress from './progress'
import prose from './prose'
import radio from './radio'
import select from './select'
import slimscroll from './slimscroll'
import snack from './snack'
import switchBall from './switch-ball'
import switchThin from './switch-thin'
import tabSlider from './tab-slider'
import tabs from './tabs'
import tag from './tag'
import text from './text'
import textarea from './textarea'
import themeSwitch from './theme-switch'
import themeToggle from './theme-toggle'
import toast from './toast'
import tooltip from './tooltip'

const components = [
  accordion,
  autocomplete,
  avatarGroup,
  avatar,
  breadcrumb,
  buttonAction,
  buttonClose,
  buttonGroup,
  buttonIcon,
  button,
  card,
  checkbox,
  dropdownDivider,
  dropdownItem,
  dropdown,
  focus,
  fullscreenDropfile,
  heading,
  iconBox,
  inputFileRegular,
  inputFile,
  input,
  label,
  link,
  list,
  listbox,
  mark,
  mask,
  messageText,
  message,
  modal,
  pagination,
  paragraph,
  placeholderPage,
  placeload,
  progressCircle,
  progress,
  prose,
  radio,
  select,
  slimscroll,
  snack,
  switchBall,
  switchThin,
  tabSlider,
  tabs,
  tag,
  text,
  textarea,
  themeSwitch,
  themeToggle,
  toast,
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
  },
)
