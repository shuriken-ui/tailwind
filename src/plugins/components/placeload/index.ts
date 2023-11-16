import plugin from 'tailwindcss/plugin'
import { defu } from 'defu'
import { type PluginOption, defaultPluginOptions } from '../../options'
import { type PlaceloadConfig, defaultConfig, key } from './placeload.config'

export default plugin.withOptions(
  function (options: PluginOption) {
    let { prefix } = defu(options, defaultPluginOptions)

    if (prefix) {
      prefix = `${prefix}-`
    }

    return function ({ addComponents, theme }) {
      const config = theme(`shurikenUi.${key}`) satisfies PlaceloadConfig

      addComponents({
        [`.${prefix}placeload`]: {
          position: 'relative',
          background:
            'linear-gradient( to right, rgb(0 0 0 / 7%) 8% ,rgb(0 0 0 / 15%) 18%, rgb(0 0 0 / 7%) 33%)',
          backgroundSize: '1200px 104px',
        },
        [`.dark .${prefix}placeload`]: {
          position: 'relative',
          background:
            'linear-gradient(to right, rgb(255 255 255 / 15%) 8%, rgb(255 255 255 / 24%) 18%, rgb(255 255 255 / 15%) 33%)',
          backgroundSize: '1200px 104px',
        },
      })
    }
  },
  function (options) {
    let { prefix } = defu(options, defaultPluginOptions)

    if (prefix) {
      prefix = `${prefix}-`
    }

    return {
      theme: {
        shurikenUi: {
          [key]: defaultConfig,
        },
        extend: {
          keyframes: {
            [`${prefix}placeload`]: {
              '0%': { 'background-position': '-468px 0' },
              '100%': { 'background-position': '468px 0' },
            },
          },
          animation: {
            [`${prefix}placeload`]: `${prefix}placeload 1s linear infinite forwards`,
          },
        },
      },
    }
  },
)
