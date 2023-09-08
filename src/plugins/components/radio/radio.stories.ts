import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import type { RadioAttrs } from './radio.types'
import { Radio } from './radio.component'

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Shuriken UI/Form/Radio',
  // tags: ['autodocs'],
  render: (args) => Radio(args),
  argTypes: {
    id: {
      name: 'id',
      control: { type: 'text' },
      defaultValue: 'radio-main',
    },
    label: {
      name: 'label',
      control: { type: 'text' },
      defaultValue: '',
    },
    color: {
      control: { type: 'select' },
      options: [
        'default',
        'light',
        'muted',
        'primary',
        'info',
        'success',
        'warning',
        'danger',
      ],
      defaultValue: 'straight',
    },
    '?disabled': {
      name: 'disabled',
      control: { type: 'boolean' },
      defaultValue: false,
    },
    error: {
      name: 'error',
      control: { type: 'text' },
      defaultValue: '',
    },
  },
} satisfies Meta<RadioAttrs>

export default meta
type Story = StoryObj<RadioAttrs>

// first export is the Primary story

// #region Main
export const Main: Story = {
  name: 'Main example',
  args: {
    label: 'Radio',
    color: 'primary',
    id: 'radio-main',
  },
}
// #endregion

// #region Color: default
export const ColorDefaultOne: Story = {
  name: 'Color: default',
  args: {
    label: 'Radio',
    color: 'default',
    id: 'radio-default-one',
    name: 'radio-default',
    checked: 'true',
  },
}

export const ColorDefaultTwo: Story = {
  name: 'Color: default',
  args: {
    label: 'Radio',
    color: 'default',
    id: 'radio-default-two',
    name: 'radio-default',
  },
}

export const ColorDefaultThree: Story = {
  name: 'Color: default',
  args: {
    label: 'Radio',
    color: 'default',
    id: 'radio-default-three',
    name: 'radio-default',
  },
}

export const ColorDefaultFour: Story = {
  name: 'Color: default',
  args: {
    label: 'Radio',
    color: 'default',
    id: 'radio-default-four',
    name: 'radio-default',
  },
}
// #endregion

// #region Color: muted
export const ColorMutedOne: Story = {
  name: 'Color: muted',
  args: {
    label: 'Radio',
    color: 'muted',
    id: 'radio-muted-one',
    name: 'radio-muted',
    checked: 'true',
  },
}

export const ColorMutedTwo: Story = {
  name: 'Color: muted',
  args: {
    label: 'Radio',
    color: 'muted',
    id: 'radio-muted-two',
    name: 'radio-muted',
  },
}

export const ColorMutedThree: Story = {
  name: 'Color: muted',
  args: {
    label: 'Radio',
    color: 'muted',
    id: 'radio-muted-three',
    name: 'radio-muted',
  },
}

export const ColorMutedFour: Story = {
  name: 'Color: muted',
  args: {
    label: 'Radio',
    color: 'muted',
    id: 'radio-muted-four',
    name: 'radio-muted',
  },
}
// #endregion

// #region Color: primary
export const ColorPrimaryOne: Story = {
  name: 'Color: primary',
  args: {
    label: 'Radio',
    color: 'primary',
    id: 'radio-primary-one',
    name: 'radio-primary',
    checked: 'true',
  },
}

export const ColorPrimaryTwo: Story = {
  name: 'Color: primary',
  args: {
    label: 'Radio',
    color: 'primary',
    id: 'radio-primary-two',
    name: 'radio-primary',
  },
}

export const ColorPrimaryThree: Story = {
  name: 'Color: primary',
  args: {
    label: 'Radio',
    color: 'primary',
    id: 'radio-primary-three',
    name: 'radio-primary',
  },
}

export const ColorPrimaryFour: Story = {
  name: 'Color: primary',
  args: {
    label: 'Radio',
    color: 'primary',
    id: 'radio-primary-four',
    name: 'radio-primary',
  },
}
// #endregion

// #region Color: info
export const ColorInfoOne: Story = {
  name: 'Color: info',
  args: {
    label: 'Radio',
    color: 'info',
    id: 'radio-info-one',
    name: 'radio-info',
    checked: 'true',
  },
}

export const ColorInfoTwo: Story = {
  name: 'Color: info',
  args: {
    label: 'Radio',
    color: 'info',
    id: 'radio-info-two',
    name: 'radio-info',
  },
}

export const ColorInfoThree: Story = {
  name: 'Color: info',
  args: {
    label: 'Radio',
    color: 'info',
    id: 'radio-info-three',
    name: 'radio-info',
  },
}

export const ColorInfoFour: Story = {
  name: 'Color: info',
  args: {
    label: 'Radio',
    color: 'info',
    id: 'radio-info-four',
    name: 'radio-info',
  },
}
// #endregion

// #region Color: success
export const ColorSuccessOne: Story = {
  name: 'Color: success',
  args: {
    label: 'Radio',
    color: 'success',
    id: 'radio-success-one',
    name: 'radio-success',
    checked: 'true',
  },
}

export const ColorSuccessTwo: Story = {
  name: 'Color: success',
  args: {
    label: 'Radio',
    color: 'success',
    id: 'radio-success-two',
    name: 'radio-success',
  },
}

export const ColorSuccessThree: Story = {
  name: 'Color: success',
  args: {
    label: 'Radio',
    color: 'success',
    id: 'radio-success-three',
    name: 'radio-success',
  },
}

export const ColorSuccessFour: Story = {
  name: 'Color: success',
  args: {
    label: 'Radio',
    color: 'success',
    id: 'radio-success-four',
    name: 'radio-success',
  },
}
// #endregion

// #region Color: warning
export const ColorWarningOne: Story = {
  name: 'Color: warning',
  args: {
    label: 'Radio',
    color: 'warning',
    id: 'radio-warning-one',
    name: 'radio-warning',
    checked: 'true',
  },
}

export const ColorWarningTwo: Story = {
  name: 'Color: warning',
  args: {
    label: 'Radio',
    color: 'warning',
    id: 'radio-warning-two',
    name: 'radio-warning',
  },
}

export const ColorWarningThree: Story = {
  name: 'Color: warning',
  args: {
    label: 'Radio',
    color: 'warning',
    id: 'radio-warning-three',
    name: 'radio-warning',
  },
}

export const ColorWarningFour: Story = {
  name: 'Color: warning',
  args: {
    label: 'Radio',
    color: 'warning',
    id: 'radio-warning-four',
    name: 'radio-warning',
  },
}
// #endregion

// #region Color: danger
export const ColorDangerOne: Story = {
  name: 'Color: danger',
  args: {
    label: 'Radio',
    color: 'danger',
    id: 'radio-danger-one',
    name: 'radio-danger',
    checked: 'true',
  },
}

export const ColorDangerTwo: Story = {
  name: 'Color: danger',
  args: {
    label: 'Radio',
    color: 'danger',
    id: 'radio-danger-two',
    name: 'radio-danger',
  },
}

export const ColorDangerThree: Story = {
  name: 'Color: danger',
  args: {
    label: 'Radio',
    color: 'danger',
    id: 'radio-danger-three',
    name: 'radio-danger',
  },
}

export const ColorDangerFour: Story = {
  name: 'Color: danger',
  args: {
    label: 'Radio',
    color: 'danger',
    id: 'radio-danger-four',
    name: 'radio-danger',
  },
}
// #endregion

// #region State: disabled
export const DisabledOne: Story = {
  name: 'Disabled: default',
  args: {
    label: 'Radio',
    color: 'default',
    id: 'radio-disabled-one',
    name: 'radio-disabled',
    checked: 'true',
    '?disabled': 'true',
  },
}

export const DisabledTwo: Story = {
  name: 'Disabled: default',
  args: {
    label: 'Radio',
    color: 'default',
    id: 'radio-disabled-two',
    name: 'radio-disabled',
    '?disabled': 'true',
  },
}

export const DisabledThree: Story = {
  name: 'Disabled: default',
  args: {
    label: 'Radio',
    color: 'default',
    id: 'radio-disabled-three',
    name: 'radio-disabled',
    '?disabled': 'true',
  },
}

export const DisabledFour: Story = {
  name: 'Disabled: default',
  args: {
    label: 'Radio',
    color: 'default',
    id: 'radio-disabled-four',
    name: 'radio-disabled',
    '?disabled': 'true',
  },
}
// #endregion
