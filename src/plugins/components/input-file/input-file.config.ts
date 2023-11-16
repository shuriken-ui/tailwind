export const key = 'inputFile' as const

export const defaultConfig = {
  drop: {
    size: '64',
    border: 'muted-200',
    borderDark: 'muted-600',
    borderHover: 'muted-400',
    borderHoverDark: 'muted-400',
    duration: '300',
    bg: 'white',
    bgDark: 'muted-700',
    zone: {
      font: 'sans',
      text: 'muted-400',
    },
    zoneIcon: {
      size: '10',
      duration: '300',
    },
    zoneText: {
      font: 'sans',
      fontWeight: 'normal',
      text: 'sm',
    },
    zoneSeparator: {
      font: 'sans',
      fontWeight: 'semibold',
      text: 'xs',
    },
    zoneInput: {
      size: 'full',
    },
    hover: {
      text: 'primary-500',
    },
  },
  button: {
    bg: 'white',
    bgDark: 'muted-700',
    text: 'muted-400',
    borderDark: 'muted-600',
    borderHover: 'primary-500',
    borderHoverDark: 'primary-500',
    textHover: 'primary-500',
    duration: '300',
    icon: {
      size: '8',
    },
    label: {
      font: 'sans',
      text: 'sm',
    },
  },
  combo: {
    font: 'sans',
    border: 'muted-200',
    borderDark: 'muted-600',
    space: '1',
    bg: 'white',
    bgDark: 'muted-700',
    label: {
      font: 'sans',
      text: 'sm',
    },
    input: {
      size: 'full',
      textSize: 'sm',
      text: 'muted-500',
      textDark: 'muted-400',
      textFile: 'primary-700',
      textFileSize: 'sm',
      bgFile: 'primary-500/10',
      bgFileHover: 'primary-500/20',
    },
  },
  rounded: {
    default: 'md',
    smooth: 'lg',
    curved: 'xl',
    full: 'full',
  },
}

export type InputFileConfig = typeof defaultConfig
export interface InputFilePluginConfig {
  [key]: InputFileConfig
}
