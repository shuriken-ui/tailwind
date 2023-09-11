import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import type { SwitchThinAttrs } from './switch-thin.types'
import { SwitchThin } from './switch-thin.component'

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Shuriken UI/Form/Switch Thin',
  // tags: ['autodocs'],
  render: (args) => SwitchThin(args),
  argTypes: {
    id: {
      name: 'id',
      control: { type: 'text' },
      defaultValue: 'switch-thin-main',
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
} satisfies Meta<SwitchThinAttrs>

export default meta
type Story = StoryObj<SwitchThinAttrs>

// first export is the Primary story

// #region Main
export const Main: Story = {
  name: 'Main example',
  args: {
    label: 'Thin switch',
    color: 'primary',
    id: 'switch-thin-main',
    checked: 'true',
  },
}
// #endregion

// #region Colors
export const ColorPrimary: Story = {
  name: 'Color: primary',
  args: {
    label: 'Thin switch',
    color: 'primary',
    id: 'switch-thin-primary',
    checked: 'true',
  },
}

export const ColorInfo: Story = {
  name: 'Color: info',
  args: {
    label: 'Thin switch',
    color: 'info',
    id: 'switch-thin-info',
    checked: 'true',
  },
}

export const ColorSuccess: Story = {
  name: 'Color: success',
  args: {
    label: 'Thin switch',
    color: 'success',
    id: 'switch-thin-success',
    checked: 'true',
  },
}

export const ColorWarning: Story = {
  name: 'Color: warning',
  args: {
    label: 'Thin switch',
    color: 'warning',
    id: 'switch-thin-warning',
    checked: 'true',
  },
}

export const ColorDanger: Story = {
  name: 'Color: danger',
  args: {
    label: 'Thin switch',
    color: 'danger',
    id: 'switch-thin-danger',
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
    id: 'switch-thin-sublabel',
  },
}
// #endregion

// #region State: disabled
export const DisabledPrimary: Story = {
  name: 'Disabled: primary',
  args: {
    label: 'Thin switch',
    color: 'primary',
    id: 'switch-thin-primary',
    checked: 'true',
    '?disabled': 'true',
  },
}

export const DisabledInfo: Story = {
  name: 'Disabled: info',
  args: {
    label: 'Thin switch',
    color: 'info',
    id: 'switch-thin-info',
    checked: 'true',
    '?disabled': 'true',
  },
}

export const DisabledSuccess: Story = {
  name: 'Disabled: success',
  args: {
    label: 'Thin switch',
    color: 'success',
    id: 'switch-thin-success',
    checked: 'true',
    '?disabled': 'true',
  },
}

export const DisabledWarning: Story = {
  name: 'Disabled: warning',
  args: {
    label: 'Thin switch',
    color: 'warning',
    id: 'switch-thin-warning',
    checked: 'true',
    '?disabled': 'true',
  },
}

export const DisabledDanger: Story = {
  name: 'Disabled: danger',
  args: {
    label: 'Thin switch',
    color: 'danger',
    id: 'switch-thin-danger',
    checked: 'true',
    '?disabled': 'true',
  },
}
// #endregion
