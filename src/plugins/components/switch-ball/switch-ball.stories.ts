import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import type { SwitchBallAttrs } from './switch-ball.types'
import { SwitchBall } from './switch-ball.component'

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Shuriken UI/Form/Switch Ball',
  // tags: ['autodocs'],
  render: (args) => SwitchBall(args),
  argTypes: {
    id: {
      name: 'id',
      control: { type: 'text' },
      defaultValue: 'switch-ball-main',
    },
    label: {
      name: 'label',
      control: { type: 'text' },
      defaultValue: '',
    },
    sublabel: {
      name: 'label',
      control: { type: 'text' },
      defaultValue: '',
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'info', 'success', 'warning', 'danger'],
      defaultValue: 'primary',
    },
    '?disabled': {
      name: 'disabled',
      control: { type: 'boolean' },
      defaultValue: false,
    },
  },
} satisfies Meta<SwitchBallAttrs>

export default meta
type Story = StoryObj<SwitchBallAttrs>

// first export is the Primary story

// #region Main
export const Main: Story = {
  name: 'Main example',
  args: {
    label: 'Ball switch',
    color: 'primary',
    id: 'switch-ball-main',
    checked: 'true',
  },
}
// #endregion

// #region Colors
export const ColorPrimary: Story = {
  name: 'Color: primary',
  args: {
    label: 'Ball switch',
    color: 'primary',
    id: 'switch-ball-primary',
    checked: 'true',
  },
}

export const ColorInfo: Story = {
  name: 'Color: info',
  args: {
    label: 'Ball switch',
    color: 'info',
    id: 'switch-ball-info',
    checked: 'true',
  },
}

export const ColorSuccess: Story = {
  name: 'Color: success',
  args: {
    label: 'Ball switch',
    color: 'success',
    id: 'switch-ball-success',
    checked: 'true',
  },
}

export const ColorWarning: Story = {
  name: 'Color: warning',
  args: {
    label: 'Ball switch',
    color: 'warning',
    id: 'switch-ball-warning',
    checked: 'true',
  },
}

export const ColorDanger: Story = {
  name: 'Color: danger',
  args: {
    label: 'Ball switch',
    color: 'danger',
    id: 'switch-ball-danger',
    checked: 'true',
  },
}
// #endregion

// #region Colors
export const Sublabel: Story = {
  name: 'With: sublabel',
  args: {
    label: 'Autosave',
    sublabel: 'Save changes automatically',
    color: 'primary',
    id: 'switch-ball-sublabel',
  },
}
// #endregion

// #region State: disabled
export const DisabledPrimary: Story = {
  name: 'Disabled: primary',
  args: {
    label: 'Ball switch',
    color: 'primary',
    id: 'switch-ball-primary',
    checked: 'true',
    '?disabled': 'true',
  },
}

export const DisabledInfo: Story = {
  name: 'Disabled: info',
  args: {
    label: 'Ball switch',
    color: 'info',
    id: 'switch-ball-info',
    checked: 'true',
    '?disabled': 'true',
  },
}

export const DisabledSuccess: Story = {
  name: 'Disabled: success',
  args: {
    label: 'Ball switch',
    color: 'success',
    id: 'switch-ball-success',
    checked: 'true',
    '?disabled': 'true',
  },
}

export const DisabledWarning: Story = {
  name: 'Disabled: warning',
  args: {
    label: 'Ball switch',
    color: 'warning',
    id: 'switch-ball-warning',
    checked: 'true',
    '?disabled': 'true',
  },
}

export const DisabledDanger: Story = {
  name: 'Disabled: danger',
  args: {
    label: 'Ball switch',
    color: 'danger',
    id: 'switch-ball-danger',
    checked: 'true',
    '?disabled': 'true',
  },
}
// #endregion
