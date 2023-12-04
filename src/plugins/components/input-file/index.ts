import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption, defaultPluginOptions } from '../../options'
import { type InputFileConfig, defaultConfig, key } from './input-file.config'

export default plugin.withOptions(
  function (options: PluginOption) {
    let { prefix } = defu(options, defaultPluginOptions)

    if (prefix) {
      prefix = `${prefix}-`
    }

    return function ({ addComponents, theme }) {
      const config = theme(`shurikenUi.${key}`) satisfies InputFileConfig

      addComponents({
        [`.${prefix}input-file`]: {
          [`@apply relative block ${prefix}focus`]: {},

          [`&.${prefix}input-file-drop`]: {
            [`@apply relative h-${config.drop.size} border-dashed border-2 border-${config.drop.border} dark:border-${config.drop.borderDark} hover:border-${config.drop.borderHover} dark:hover:border-${config.drop.borderHoverDark} bg-${config.drop.bg} dark:bg-${config.drop.bgDark} flex justify-center items-center transition-colors duration-${config.drop.duration}`]:
              {},
            [`.${prefix}drop-area-inner`]: {
              [`@apply absolute z-10`]: {},
            },
            [`.${prefix}drop-zone`]: {
              [`@apply flex flex-col items-center font-${config.drop.zone.font} text-${config.drop.zone.text}`]:
                {},
            },
            [`.${prefix}drop-zone-icon`]: {
              [`@apply w-${config.drop.zoneIcon.size} h-${config.drop.zoneIcon.size} mb-2 transition-colors duration-${config.drop.zoneIcon.duration}`]:
                {},
            },
            [`.${prefix}drop-zone-text`]: {
              [`@apply block font-${config.drop.zoneText.font} font-${config.drop.zoneText.fontWeight} text-${config.drop.zoneText.text}`]:
                {},
            },
            [`.${prefix}drop-zone-separator`]: {
              [`@apply block font-${config.drop.zoneSeparator.font} font-${config.drop.zoneSeparator.fontWeight} text-${config.drop.zoneSeparator.text} leading-none py-1`]:
                {},
            },
            [`.${prefix}drop-zone-input`]: {
              [`@apply absolute top-0 left-0 h-${config.drop.zoneInput.size} w-${config.drop.zoneInput.size} opacity-0 file:cursor-pointer z-20`]:
                {},
            },
            [`&:hover`]: {
              [`.${prefix}drop-zone-icon`]: {
                [`@apply text-${config.drop.hover.text}`]: {},
              },
            },
          },
          [`&.${prefix}input-file-button`]: {
            [`@apply w-64 max-w-full flex flex-col items-center px-4 py-8 bg-${config.button.bg} dark:bg-${config.button.bgDark} text-${config.button.text} tracking-wide border-2 dark:border-${config.button.borderDark} cursor-pointer hover:border-${config.button.borderHover} dark:hover:border-${config.button.borderHoverDark} hover:text-${config.button.textHover} transition-colors duration-${config.button.duration}`]:
              {},

            [`.${prefix}upload-button-icon`]: {
              [`@apply w-${config.button.icon.size} h-${config.button.icon.size}`]:
                {},
            },
            [`.${prefix}upload-button-label`]: {
              [`@apply block font-${config.button.label.font} mt-2 text-${config.button.label.text} leading-normal`]:
                {},
            },
          },
          [`&.${prefix}input-file-combo`]: {
            [`@apply block font-${config.combo.font} border border-${config.combo.border} dark:border-${config.combo.borderDark} p-${config.combo.space} bg-${config.combo.bg} dark:bg-${config.combo.bgDark}`]:
              {},

            [`.${prefix}combo-label-text`]: {
              [`@apply font-${config.combo.label.font} sr-only text-${config.combo.label.text}`]:
                {},
            },
            [`.${prefix}combo-input`]: {
              [`@apply outline-none block w-${config.combo.input.size} text-${config.combo.input.textSize} text-${config.combo.input.text} dark:text-${config.combo.input.textDark} file:me-4 file:py-2 file:px-4 file:border-0 file:cursor-pointer file:text-${config.combo.input.textFileSize} file:transition-colors file:bg-${config.combo.input.bgFile} file:text-${config.combo.input.textFile} hover:file:bg-${config.combo.input.bgFileHover}`]:
                {},
            },
          },
          [`&.${prefix}input-file-rounded`]: {
            [`&.${prefix}input-file-drop, &.${prefix}input-file-button`]: {
              [`@apply rounded-${config.rounded.default}`]: {},
            },
            [`&.${prefix}input-file-combo`]: {
              [`@apply rounded-${config.rounded.default}`]: {},
            },
            [`&.${prefix}input-file-combo .${prefix}combo-input`]: {
              [`@apply file:rounded-${config.rounded.default}`]: {},
            },
          },
          [`&.${prefix}input-file-smooth`]: {
            [`&.${prefix}input-file-drop, &.${prefix}input-file-button`]: {
              [`@apply rounded-${config.rounded.smooth}`]: {},
            },
            [`&.${prefix}input-file-combo`]: {
              [`@apply rounded-${config.rounded.smooth}`]: {},
            },
            [`&.${prefix}input-file-combo .${prefix}combo-input`]: {
              [`@apply file:rounded-${config.rounded.smooth}`]: {},
            },
          },
          [`&.${prefix}input-file-curved`]: {
            [`&.${prefix}input-file-drop, &.${prefix}input-file-button`]: {
              [`@apply rounded-${config.rounded.curved}`]: {},
            },
            [`&.${prefix}input-file-combo`]: {
              [`@apply rounded-${config.rounded.curved}`]: {},
            },
            [`&.${prefix}input-file-combo .${prefix}combo-input`]: {
              [`@apply file:rounded-${config.rounded.curved}`]: {},
            },
          },
          [`&.${prefix}input-file-full`]: {
            [`&.${prefix}input-file-drop, &.${prefix}input-file-button`]: {
              [`@apply rounded-${config.rounded.full}`]: {},
            },
            [`&.${prefix}input-file-combo`]: {
              [`@apply rounded-${config.rounded.full}`]: {},
            },
            [`&.${prefix}input-file-combo .${prefix}combo-input`]: {
              [`@apply file:rounded-${config.rounded.full}`]: {},
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
