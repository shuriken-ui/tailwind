import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import type { FocusAttrs } from './focus.types'
import { Focus } from './focus.component'

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Shuriken UI/Utility/Focus',
  // tags: ['autodocs'],
  render: (args) => Focus(args),
  argTypes: {},
} satisfies Meta<FocusAttrs>

export default meta
type Story = StoryObj<FocusAttrs>

// first export is the Primary story

// #region Main
export const Main: Story = {
  name: 'Main example',
  args: {},
}
// #endregion
