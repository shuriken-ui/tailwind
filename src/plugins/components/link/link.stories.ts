import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import type { LinkAttrs } from './link.types'
import { Link } from './link.component'

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Shuriken UI/Typography/Link',
  // tags: ['autodocs'],
  render: (args) => Link(args),
  argTypes: {},
} satisfies Meta<LinkAttrs>

export default meta
type Story = StoryObj<LinkAttrs>

// first export is the Primary story

// #region Main
export const Main: Story = {
  name: 'Main example',
  args: {
    // set default values used for UI preview
    href: '#',
    children: html`
      Iam a link
    `,
  },
}
// #endregion
