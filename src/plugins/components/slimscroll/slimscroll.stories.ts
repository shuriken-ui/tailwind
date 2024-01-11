import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import type { SlimscrollAttrs } from './slimscroll.types'
import { Slimscroll } from './slimscroll.component'

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Shuriken UI/Utility/Slimscroll',
  // tags: ['autodocs'],
  render: (args) => Slimscroll(args),
  argTypes: {},
} satisfies Meta<SlimscrollAttrs>

export default meta
type Story = StoryObj<SlimscrollAttrs>

// first export is the Primary story

// #region Main
export const Main: Story = {
  name: 'Main example',
  args: {},
}
// #endregion
