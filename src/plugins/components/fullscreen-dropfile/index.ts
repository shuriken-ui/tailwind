import plugin from 'tailwindcss/plugin'
import {
  type FullscreenDropfileConfig,
  defaultConfig,
  key,
} from './fullscreen-dropfile.config'

const config = () => ({
  theme: {
    nui: {
      [key]: defaultConfig,
    },
  },
})

export default plugin(({ addComponents, theme }) => {
  const config = theme(`nui.${key}`) satisfies FullscreenDropfileConfig

  addComponents({
    //Wrapper
    '.nui-fullscreen-dropfile': {
      //Dropfile:outer
      '.nui-fullscreen-dropfile-outer': {
        '@apply bg-muted-100/50 dark:bg-muted-800/20 fixed inset-0 z-40 backdrop-blur-sm transition-all hover:backdrop-blur-none':
          {},
      },
      //Dropfile:inner
      '.nui-fullscreen-dropfile-inner': {
        '@apply fixed inset-0 z-50': {},
        //Dropfile:container
        '.nui-fullscreen-dropfile-container': {
          '@apply flex h-full flex-1 items-center justify-center': {},
          //Dropfile:content
          '.nui-fullscreen-dropfile-content': {
            [`@apply h-${config.height} w-${config.width} mx-auto flex flex-col items-center justify-center gap-6 drop-shadow-sm`]:
              {},
            //Background
            '@apply bg-muted-100 dark:bg-muted-800': {},
            //Border
            [`@apply ${config.rounded} border-2 border-dashed border-${config.border.light} dark:border-${config.border.dark}`]:
              {},
            //Icon
            '.nui-fullscreen-dropfile-icon': {
              [`@apply h-${config.icon.size} w-${config.icon.size} text-${config.icon.font.color.light} dark:text-${config.icon.font.color.dark}`]:
                {},
            },
            //Label
            '.nui-fullscreen-dropfile-label': {
              [`@apply text-${config.label.font.size} text-muted-500 dark:text-muted-400`]:
                {},
            },
          },
        },
      },
    },
  })
}, config)
