import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import type { LabelAttrs } from './label.types'
import { Label } from './label.component'

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Shuriken UI/Base/Label',
  // tags: ['autodocs'],
  render: (args) => Label(args),
  argTypes: {},
} satisfies Meta<LabelAttrs>

export default meta
type Story = StoryObj<LabelAttrs>

// first export is the Primary story

// #region Main
export const Main: Story = {
  name: 'Main example',
  args: {
    // set default values used for UI preview
    children: html`
      A label component
    `,
  },
}
// #endregion
