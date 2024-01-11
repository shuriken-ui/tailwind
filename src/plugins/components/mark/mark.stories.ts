import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import type { MarkAttrs } from './mark.types'
import { Mark } from './mark.component'

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Shuriken UI/Utility/Mark',
  // tags: ['autodocs'],
  render: (args) => Mark(args),
  argTypes: {},
} satisfies Meta<MarkAttrs>

export default meta
type Story = StoryObj<MarkAttrs>

// first export is the Primary story

// #region Main
export const Main: Story = {
  name: 'Main example',
  args: {},
}
// #endregion
