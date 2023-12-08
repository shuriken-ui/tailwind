import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import type { PlaceholderPageAttrs } from './placeholder-page.types'
import { PlaceholderPage } from './placeholder-page.component'
import { Button } from '../button/button.component'

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Shuriken UI/Base/Placeholder',
  // tags: ['autodocs'],
  render: (args) => PlaceholderPage(args),
  argTypes: {
    title: {
      name: 'title',
      control: { type: 'text' },
      defaultValue: 'Looks like you are new!',
    },
    subtitle: {
      name: 'subtitle',
      control: { type: 'text' },
      defaultValue:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat enim Polemonis. Duo Reges.',
    },
    imageSize: {
      name: 'Image size',
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      defaultValue: 'default',
    },
  },
} satisfies Meta<PlaceholderPageAttrs>

export default meta
type Story = StoryObj<PlaceholderPageAttrs>

// first export is the Primary story

// #region Main
export const Solid: Story = {
  name: 'Main example',
  args: {
    // set default values used for UI preview
    title: 'Looks like you are new!',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat enim Polemonis. Duo Reges.',
    image: html`
      <img
        src="https://tairo.cssninja.io/img/illustrations/placeholders/people/2.svg"
        alt="placeholder image"
      />
    `,
    children: html`
      <div class="mt-4">
        ${Button({
          color: 'primary',
          children: 'Get started',
          rounded: 'md',
        })}
      </div>
    `,
  },
}
// #endregion
