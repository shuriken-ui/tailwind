// .storybook/theme.ts

import { create } from '@storybook/theming/create'

export default create({
  base: 'light',
  brandTitle: 'Shuriken UI',
  brandUrl: 'https://cssninja.io',
  brandImage:
    'https://github.com/shuriken-ui/.github/assets/86636408/06f9d8e2-38aa-45b2-b91e-1c891a20e271',
  brandTarget: '_self',
  // Typography
  fontBase: '"Inter", sans-serif',
  fontCode: 'monospace',
  colorPrimary: '#8b5cf6',
  colorSecondary: '#8b5cf6',
  // Toolbar default and active colors
  barTextColor: '#9E9E9E',
  barSelectedColor: '#585C6D',
  barBg: '#ffffff',
  // UI
  appBg: '#f8fafc',
  appContentBg: '#f8fafc',
  appBorderColor: '#e2e8f0',
  appBorderRadius: 6,
})
