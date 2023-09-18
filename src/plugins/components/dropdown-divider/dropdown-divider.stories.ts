import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import type { DropdownDividerAttrs } from './dropdown-divider.types'
import { DropdownDivider } from './dropdown-divider.component'

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Shuriken UI/Base/Dropdown Divider',
  // tags: ['autodocs'],
  render: (args) => DropdownDivider(args),
  argTypes: {},
} satisfies Meta<DropdownDividerAttrs>

export default meta
type Story = StoryObj<DropdownDividerAttrs>

// first export is the Primary story

// #region Main
export const Main: Story = {
  name: 'Main example',
  args: {},
}
// #endregion
