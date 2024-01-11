export const key = 'breadcrumb' as const

export const defaultConfig = {
  item: {
    text: {
      font: {
        family: 'sans',
        size: '[0.85rem]',
        color: {
          light: 'muted-500',
          dark: 'muted-400',
        },
      },
      padding: {
        x: '2',
      },
    },
    icon: {
      size: '4',
    },
    dot: {
      font: {
        size: 'xl',
      },
    },
    link: {
      font: {
        color: {
          hover: 'primary-500',
          focus: 'primary-500',
        },
      },
    },
    transition: {
      property: 'colors',
      duration: '300',
    },
  },
}

export type BreadcrumbConfig = typeof defaultConfig
export interface BreadcrumbPluginConfig {
  [key]: BreadcrumbConfig
}
