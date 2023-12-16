import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import type { ThemeToggleAttrs } from './theme-toggle.types'
import { ThemeToggle } from './theme-toggle.component'

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Shuriken UI/Base/Theme Toggle',
  // tags: ['autodocs'],
  render: (args) => ThemeToggle(args),
  argTypes: {
    inverted: {
      name: 'Inverted',
      control: { type: 'boolean' },
      defaultValue: false,
    },
  },
} satisfies Meta<ThemeToggleAttrs>

export default meta
type Story = StoryObj<ThemeToggleAttrs>

// first export is the Primary story

// #region Main
export const Main: Story = {
  name: 'Main example',
  args: {},
}
// #endregion

// #region Inverted:false
export const InvertedFalse: Story = {
  name: 'Inverted: false',
  args: {},
}
// #endregion

// #region Inverted:true
export const InvertedTrue: Story = {
  name: 'Inverted: true',
  args: {
    inverted: true,
  },
}
// #endregion
