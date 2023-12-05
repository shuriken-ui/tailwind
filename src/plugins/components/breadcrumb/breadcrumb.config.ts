export const key = 'breadcrumb' as const

export const config = {
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
