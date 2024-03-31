import type { Preview } from '@storybook/web-components'
import { withThemeByClassName } from '@storybook/addon-themes'
import './tailwind.css'

const preview: Preview = {
  parameters: {
    //actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: 'default',
      values: [
        {
          name: 'default',
          value: 'transparent',
        },
        {
          name: 'white',
          value: '#ffffff',
        },
        {
          name: 'slate-50',
          value: '#f8fafc',
        },
        {
          name: 'slate-100',
          value: '#f1f5f9',
        },
        {
          name: 'slate-200',
          value: '#e2e8f0',
        },
        {
          name: 'slate-300',
          value: '#cbd5e1',
        },
        {
          name: 'slate-400',
          value: '#94a3b8',
        },
        {
          name: 'slate-500',
          value: '#64748b',
        },
        {
          name: 'slate-600',
          value: '#475569',
        },
        {
          name: 'slate-700',
          value: '#334155',
        },
        {
          name: 'slate-800',
          value: '#1e293b',
        },
        {
          name: 'slate-900',
          value: '#0f172a',
        },
        {
          name: 'slate-950',
          value: '#020617',
        },
      ],
    },
  },
  decorators: [
    withThemeByClassName({
      themes: {
        light: '',
        dark: 'dark',
      },
      defaultTheme: 'light',
    }),
  ],
}

export default preview
