import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import type { MaskAttrs } from './mask.types'
import { Mask } from './mask.component'

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Shuriken UI/Utility/Mask',
  // tags: ['autodocs'],
  render: (args) => Mask(args),
  argTypes: {},
} satisfies Meta<MaskAttrs>

export default meta
type Story = StoryObj<MaskAttrs>

// first export is the Primary story

// #region Main
export const Main: Story = {
  name: 'Main example',
  args: {},
}
// #endregion
