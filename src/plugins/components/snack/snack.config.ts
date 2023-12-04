export const key = 'snack' as const

export const defaultConfig = {
  rounded: 'full',
  icon: {
    border: 'muted-200',
    rounded: 'full',
    bg: 'white',
  },
  image: {
    rounded: 'full',
  },
  imageInner: {
    rounded: 'full',
  },
  text: {
    text: 'muted-600',
    textDark: 'muted-300',
    font: 'sans',
    textSize: 'sm',
  },
  snackSM: {
    size: '8',
    icon: {
      size: '8',
    },
    iconsInner: {
      size: '4',
    },
    imageAndImageInner: {
      size: '8',
    },
  },
  snackMD: {
    size: '10',
    icon: {
      size: '10',
    },
    iconsInner: {
      size: '5',
    },
    imageAndImageInner: {
      size: '10',
    },
  },
  default: {
    bg: 'white',
    bgDark: 'muted-700',
    border: 'muted-300',
    borderDark: 'muted-600',
  },
  muted: {
    bg: 'muted-200',
    bgDark: 'muted-700',
  },
}

export type SnackConfig = typeof defaultConfig
export interface SnackConfigPluginConfig {
  [key]: SnackConfig
}
