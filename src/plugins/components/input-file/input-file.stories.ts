import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import type { InputFileAttrs } from './input-file.types'
import { InputFile } from './input-file.component'

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Shuriken UI/Form/Input File',
  // tags: ['autodocs'],
  render: (args) => InputFile(args),
  argTypes: {
    color: {
      control: { type: 'select' },
      options: ['primary', 'dark', 'black'],
      defaultValue: 'default',
    },
    rounded: {
      control: { type: 'select' },
      options: ['none', 'sm', 'md', 'lg', 'full'],
      defaultValue: 'none',
    },
    type: {
      control: { type: 'select' },
      options: ['combo', 'dropzone', 'button'],
      defaultValue: 'combo',
    },
  },
} satisfies Meta<InputFileAttrs>

export default meta
type Story = StoryObj<InputFileAttrs>

// first export is the Primary story

// #region Main
export const Solid: Story = {
  name: 'Main example',
  args: {
    // set default values used for UI preview
    classes: {
      wrapper: 'max-w-sm',
    },
  },
}
// #endregion

// #region Combo rounded
export const ComboStraight: Story = {
  name: 'Combo: rounded',
  args: {
    rounded: 'none',
    classes: {
      wrapper: 'min-w-[380px]',
    },
  },
}

export const ComboRounded: Story = {
  name: 'Combo: rounded',
  args: {
    rounded: 'sm',
    classes: {
      wrapper: 'min-w-[380px]',
    },
  },
}

export const ComboSmooth: Story = {
  name: 'Combo: smooth',
  args: {
    rounded: 'md',
    classes: {
      wrapper: 'min-w-[380px]',
    },
  },
}

export const ComboCurved: Story = {
  name: 'Combo: curved',
  args: {
    rounded: 'lg',
    classes: {
      wrapper: 'min-w-[380px]',
    },
  },
}

export const ComboFull: Story = {
  name: 'Combo: full',
  args: {
    rounded: 'full',
    classes: {
      wrapper: 'min-w-[380px]',
    },
  },
}
// #endregion

// #region Dropzone
export const Dropzone: Story = {
  name: 'Type: Dropzone',
  args: {
    type: 'dropzone',
    classes: {
      wrapper: 'min-w-[380px]',
    },
  },
}
// #endregion

// #region Button
export const Button: Story = {
  name: 'Type: Button',
  args: {
    type: 'button',
    classes: {
      wrapper: 'min-w-[380px]',
    },
  },
}
// #endregion
