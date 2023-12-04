export const key = 'breadcrumb' as const

export const defaultConfig = {
  list: {
    font: 'sans',
    text: '[0.85rem]',
    itemInner: {
      text: 'muted-500',
      duration: '300',
      icon: {
        size: '4',
        dot: {
          text: 'xl',
        },
      },
      link: {
        textHover: 'primary-500',
        texFocus: 'primary-500',
      },
      itemText: {
        text: 'muted-500',
        space: '2',
      },
    },
  },
}

export type BreadcrumbConfig = typeof defaultConfig
export interface BreadcrumbPluginConfig {
  [key]: BreadcrumbConfig
}
