import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import type { InputHelpTextAttrs } from './input-help-text.types'
import { InputHelpText } from './input-help-text.component'

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Shuriken UI/Base/Input Help Text',
  // tags: ['autodocs'],
  render: (args) => InputHelpText(args),
  argTypes: {
    color: {
      control: { type: 'select' },
      options: [
        'default',
        'default-contrast',
        'muted',
        'muted-contrast',
        'primary',
        'info',
        'success',
        'warning',
        'danger',
        'none',
      ],
      defaultValue: 'default',
    },
  },
} satisfies Meta<InputHelpTextAttrs>

export default meta
type Story = StoryObj<InputHelpTextAttrs>

// first export is the Primary story

// #region Main
export const Main: Story = {
  name: 'Main example',
  args: {
    children: 'Iam an input help text',
  },
}
// #endregion
