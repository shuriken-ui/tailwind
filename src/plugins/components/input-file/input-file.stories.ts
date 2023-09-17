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
    shape: {
      control: { type: 'select' },
      options: ['straight', 'rounded', 'smooth', 'curved', 'full'],
      defaultValue: 'straight',
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
    classes: 'max-w-sm',
  },
}
// #endregion

// #region Combo shapes
export const ComboStraight: Story = {
  name: 'Combo: rounded',
  args: {
    shape: 'straight',
    classes: 'min-w-[380px]',
  },
}

export const ComboRounded: Story = {
  name: 'Combo: rounded',
  args: {
    shape: 'rounded',
    classes: 'min-w-[380px]',
  },
}

export const ComboSmooth: Story = {
  name: 'Combo: smooth',
  args: {
    shape: 'smooth',
    classes: 'min-w-[380px]',
  },
}

export const ComboCurved: Story = {
  name: 'Combo: curved',
  args: {
    shape: 'curved',
    classes: 'min-w-[380px]',
  },
}

export const ComboFull: Story = {
  name: 'Combo: full',
  args: {
    shape: 'full',
    classes: 'min-w-[380px]',
  },
}
// #endregion

// #region Dropzone
export const Dropzone: Story = {
  name: 'Type: Dropzone',
  args: {
    type: 'dropzone',
    classes: 'min-w-[580px]',
  },
}
// #endregion

// #region Button
export const Button: Story = {
  name: 'Type: Button',
  args: {
    type: 'button',
    classes: 'min-w-[280px]',
  },
}
// #endregion
