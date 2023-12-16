import type { Config } from 'tailwindcss'
import type { AccordionPluginConfig } from './plugins/components/accordion/accordion.config'
import type { AutocompletePluginConfig } from './plugins/components/autocomplete/autocomplete.config'
import type { AvatarPluginConfig } from './plugins/components/avatar/avatar.config'
import type { AvatarGroupPluginConfig } from './plugins/components/avatar-group/avatar-group.config'
import type { BreadcrumbPluginConfig } from './plugins/components/breadcrumb/breadcrumb.config'
import type { ButtonPluginConfig } from './plugins/components/button/button.config'
import type { ButtonActionPluginConfig } from './plugins/components/button-action/button-action.config'
import type { ButtonClosePluginConfig } from './plugins/components/button-close/button-close.config'
import type { ButtonGroupPluginConfig } from './plugins/components/button-group/button-group.config'
import type { ButtonIconPluginConfig } from './plugins/components/button-icon/button-icon.config'
import type { CardPluginConfig } from './plugins/components/card/card.config'
import type { CheckboxPluginConfig } from './plugins/components/checkbox/checkbox.config'
import type { DropdownPluginConfig } from './plugins/components/dropdown/dropdown.config'
import type { DropdownDividerPluginConfig } from './plugins/components/dropdown-divider/dropdown-divider.config'
import type { DropdownItemPluginConfig } from './plugins/components/dropdown-item/dropdown-item.config'
import type { FocusPluginConfig } from './plugins/components/focus/focus.config'
import type { FullscreenDropfilePluginConfig } from './plugins/components/fullscreen-dropfile/fullscreen-dropfile.config'
import type { HeadingPluginConfig } from './plugins/components/heading/heading.config'
import type { IconBoxPluginConfig } from './plugins/components/icon-box/icon-box.config'
import type { InputPluginConfig } from './plugins/components/input/input.config'
import type { InputFilePluginConfig } from './plugins/components/input-file/input-file.config'
import type { InputFileRegularPluginConfig } from './plugins/components/input-file-regular/input-file-regular.config'
import type { InputNumberPluginConfig } from './plugins/components/input-number/input-number.config'
import type { KbdPluginConfig } from './plugins/components/kbd/kbd.config'
import type { LabelPluginConfig } from './plugins/components/label/label.config'
import type { LinkPluginConfig } from './plugins/components/link/link.config'
import type { ListPluginConfig } from './plugins/components/list/list.config'
import type { ListboxPluginConfig } from './plugins/components/listbox/listbox.config'
import type { MarkPluginConfig } from './plugins/components/mark/mark.config'
import type { MaskPluginConfig } from './plugins/components/mask/mask.config'
import type { MessagePluginConfig } from './plugins/components/message/message.config'
import type { MessageTextPluginConfig } from './plugins/components/message-text/message-text.config'
import type { ModalPluginConfig } from './plugins/components/modal/modal.config'
import type { PaginationPluginConfig } from './plugins/components/pagination/pagination.config'
import type { ParagraphPluginConfig } from './plugins/components/paragraph/paragraph.config'
import type { PlaceholderPagePluginConfig } from './plugins/components/placeholder-page/placeholder-page.config'
import type { PlaceloadPluginConfig } from './plugins/components/placeload/placeload.config'
import type { ProgressPluginConfig } from './plugins/components/progress/progress.config'
import type { ProgressCirclePluginConfig } from './plugins/components/progress-circle/progress-circle.config'
import type { ProsePluginConfig } from './plugins/components/prose/prose.config'
import type { RadioPluginConfig } from './plugins/components/radio/radio.config'
import type { SelectPluginConfig } from './plugins/components/select/select.config'
import type { SlimscrollPluginConfig } from './plugins/components/slimscroll/slimscroll.config'
import type { SnackConfigPluginConfig } from './plugins/components/snack/snack.config'
import type { SwitchBallPluginConfig } from './plugins/components/switch-ball/switch-ball.config'
import type { SwitchThinPluginConfig } from './plugins/components/switch-thin/switch-thin.config'
import type { TabSliderPluginConfig } from './plugins/components/tab-slider/tab-slider.config'
import type { TabsPluginConfig } from './plugins/components/tabs/tabs.config'
import type { TagPluginConfig } from './plugins/components/tag/tag.config'
import type { TextPluginConfig } from './plugins/components/text/text.config'
import type { TextareaPluginConfig } from './plugins/components/textarea/textarea.config'
import type { ThemeSwitchPluginConfig } from './plugins/components/theme-switch/theme-switch.config'
import type { ThemeTogglePluginConfig } from './plugins/components/theme-toggle/theme-toggle.config'
import type { ToastPluginConfig } from './plugins/components/toast/toast.config'
import type { TooltipPluginConfig } from './plugins/components/tooltip/tooltip.config'

type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>
    }
  : T

type ShurikenUIPlugins = AccordionPluginConfig &
  AutocompletePluginConfig &
  AvatarPluginConfig &
  AvatarGroupPluginConfig &
  BreadcrumbPluginConfig &
  ButtonPluginConfig &
  ButtonActionPluginConfig &
  ButtonClosePluginConfig &
  ButtonGroupPluginConfig &
  ButtonIconPluginConfig &
  CardPluginConfig &
  CheckboxPluginConfig &
  DropdownPluginConfig &
  DropdownDividerPluginConfig &
  DropdownItemPluginConfig &
  FocusPluginConfig &
  FullscreenDropfilePluginConfig &
  HeadingPluginConfig &
  IconBoxPluginConfig &
  InputPluginConfig &
  InputFilePluginConfig &
  InputFileRegularPluginConfig &
  InputNumberPluginConfig &
  KbdPluginConfig &
  LabelPluginConfig &
  LinkPluginConfig &
  ListPluginConfig &
  ListboxPluginConfig &
  MarkPluginConfig &
  MaskPluginConfig &
  MessagePluginConfig &
  MessageTextPluginConfig &
  ModalPluginConfig &
  PaginationPluginConfig &
  ParagraphPluginConfig &
  PlaceholderPagePluginConfig &
  PlaceloadPluginConfig &
  ProgressPluginConfig &
  ProgressCirclePluginConfig &
  ProsePluginConfig &
  RadioPluginConfig &
  SelectPluginConfig &
  SlimscrollPluginConfig &
  SnackConfigPluginConfig &
  SwitchBallPluginConfig &
  SwitchThinPluginConfig &
  TabSliderPluginConfig &
  TabsPluginConfig &
  TagPluginConfig &
  TextPluginConfig &
  TextareaPluginConfig &
  ThemeSwitchPluginConfig &
  ThemeTogglePluginConfig &
  ToastPluginConfig &
  TooltipPluginConfig

type BaseTheme = Config['theme']
type ShurikenUITheme = BaseTheme &
  DeepPartial<{
    shurikenUi: ShurikenUIPlugins
  }>

export type ShurikenUIConfig = Config & {
  theme?: ShurikenUITheme & { extend?: ShurikenUITheme }
}
