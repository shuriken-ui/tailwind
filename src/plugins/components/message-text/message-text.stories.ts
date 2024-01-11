import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import type { MessageTextAttrs } from './message-text.types'
import { MessageText } from './message-text.component'

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Shuriken UI/Base/Message Text',
  // tags: ['autodocs'],
  render: (args) => MessageText(args),
  argTypes: {
    title: {
      control: { type: 'text' },
      defaultValue: '',
    },
    text: {
      control: { type: 'text' },
      defaultValue: '',
    },
    color: {
      control: { type: 'select' },
      options: [
        'default',
        'light',
        'primary',
        'info',
        'success',
        'warning',
        'danger',
        'none',
      ],
      defaultValue: 'default',
    },
    rounded: {
      control: { type: 'select' },
      options: ['none', 'sm', 'md', 'lg'],
      defaultValue: 'none',
    },
    contrast: {
      control: { type: 'select' },
      options: ['white', 'contrast'],
      defaultValue: 'white',
    },
  },
} satisfies Meta<MessageTextAttrs>

export default meta
type Story = StoryObj<MessageTextAttrs>

// first export is the Primary story

// #region Main
export const Solid: Story = {
  name: 'Main example',
  args: {
    // set default values used for UI preview
    title: 'Message title',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Haec dicuntur inconstantissime. Quamquam te quidem video minime esse deterritum.',
    style: 'max-width: 440px;',
  },
}
// #endregion

// #region Rounded
export const Straight: Story = {
  name: 'Rounded: none',
  args: {
    rounded: 'none',
    title: 'Message title',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Haec dicuntur inconstantissime. Quamquam te quidem video minime esse deterritum.',
  },
}

export const Rounded: Story = {
  name: 'Rounded: sm',
  args: {
    rounded: 'sm',
    title: 'Message title',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Haec dicuntur inconstantissime. Quamquam te quidem video minime esse deterritum.',
    style: 'max-width: 440px;',
  },
}

export const Smooth: Story = {
  name: 'Rounded: md',
  args: {
    rounded: 'md',
    title: 'Message title',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Haec dicuntur inconstantissime. Quamquam te quidem video minime esse deterritum.',
    style: 'max-width: 440px;',
  },
}

export const Curved: Story = {
  name: 'Rounded: lg',
  args: {
    rounded: 'lg',
    title: 'Message title',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Haec dicuntur inconstantissime. Quamquam te quidem video minime esse deterritum.',
    style: 'max-width: 440px;',
  },
}
// #endregion

// #region Colors
export const Primary: Story = {
  name: 'Color: primary',
  args: {
    color: 'primary',
    title: 'Message title',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Haec dicuntur inconstantissime. Quamquam te quidem video minime esse deterritum.',
    style: 'max-width: 440px;',
  },
}

export const Info: Story = {
  name: 'Color: info',
  args: {
    color: 'info',
    title: 'Message title',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Haec dicuntur inconstantissime. Quamquam te quidem video minime esse deterritum.',
    style: 'max-width: 440px;',
  },
}

export const Success: Story = {
  name: 'Color: success',
  args: {
    color: 'success',
    title: 'Message title',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Haec dicuntur inconstantissime. Quamquam te quidem video minime esse deterritum.',
    style: 'max-width: 440px;',
  },
}

export const Warning: Story = {
  name: 'Color: warning',
  args: {
    color: 'warning',
    title: 'Message title',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Haec dicuntur inconstantissime. Quamquam te quidem video minime esse deterritum.',
    style: 'max-width: 440px;',
  },
}

export const Danger: Story = {
  name: 'Color: danger',
  args: {
    color: 'danger',
    title: 'Message title',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Haec dicuntur inconstantissime. Quamquam te quidem video minime esse deterritum.',
    style: 'max-width: 440px;',
  },
}
// #endregion
