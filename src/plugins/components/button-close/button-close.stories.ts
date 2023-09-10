import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import type { ButtonCloseAttrs } from './button-close.types'
import { ButtonClose } from './button-close.component'

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Shuriken UI/Base/Button Close',
  // tags: ['autodocs'],
  render: (args) => ButtonClose(args),
  argTypes: {
    color: {
      control: { type: 'select' },
      options: [
        'default',
        'muted',
        'primary',
        'info',
        'success',
        'warning',
        'danger',
        'none',
      ],
      defaultValue: 'default',
    },
    shape: {
      control: { type: 'select' },
      options: ['straight', 'rounded', 'smooth', 'curved', 'full'],
      defaultValue: 'straight',
    },
    onClick: { action: 'onClick' },
  },
} satisfies Meta<ButtonCloseAttrs>

export default meta
type Story = StoryObj<ButtonCloseAttrs>

// first export is the Primary story

// #region Main
export const Main: Story = {
  name: 'Main example',
  args: {
    // set default values used for UI preview
    color: 'muted',
    shape: 'full',
  },
}
// #endregion

// #region Color: default
export const DefaultStraight: Story = {
  name: 'Default: straight',
  args: {
    color: 'default',
    shape: 'straight',
  },
}

export const DefaultRounded: Story = {
  name: 'Default: rounded',
  args: {
    color: 'default',
    shape: 'rounded',
  },
}

export const DefaultSmooth: Story = {
  name: 'Default: smooth',
  args: {
    color: 'default',
    shape: 'smooth',
  },
}

export const DefaultCurved: Story = {
  name: 'Default: curved',
  args: {
    color: 'default',
    shape: 'curved',
  },
}

export const DefaultFull: Story = {
  name: 'Default: full',
  args: {
    color: 'default',
    shape: 'full',
  },
}
// #endregion

// #region Color: muted
export const MutedStraight: Story = {
  name: 'Muted: straight',
  args: {
    color: 'muted',
    shape: 'straight',
  },
}

export const MutedRounded: Story = {
  name: 'Muted: rounded',
  args: {
    color: 'muted',
    shape: 'rounded',
  },
}

export const MutedSmooth: Story = {
  name: 'Muted: smooth',
  args: {
    color: 'muted',
    shape: 'smooth',
  },
}

export const MutedCurved: Story = {
  name: 'Muted: curved',
  args: {
    color: 'muted',
    shape: 'curved',
  },
}

export const MutedFull: Story = {
  name: 'Muted: full',
  args: {
    color: 'muted',
    shape: 'full',
  },
}
// #endregion

// #region Color: primary
export const PrimaryStraight: Story = {
  name: 'Primary: straight',
  args: {
    color: 'primary',
    shape: 'straight',
  },
}

export const PrimaryRounded: Story = {
  name: 'Primary: rounded',
  args: {
    color: 'primary',
    shape: 'rounded',
  },
}

export const PrimarySmooth: Story = {
  name: 'Primary: smooth',
  args: {
    color: 'primary',
    shape: 'smooth',
  },
}

export const PrimaryCurved: Story = {
  name: 'Primary: curved',
  args: {
    color: 'primary',
    shape: 'curved',
  },
}

export const PrimaryFull: Story = {
  name: 'Primary: full',
  args: {
    color: 'primary',
    shape: 'full',
  },
}
// #endregion

// #region Color: info
export const InfoStraight: Story = {
  name: 'Info: straight',
  args: {
    color: 'info',
    shape: 'straight',
  },
}

export const InfoRounded: Story = {
  name: 'Info: rounded',
  args: {
    color: 'info',
    shape: 'rounded',
  },
}

export const InfoSmooth: Story = {
  name: 'Info: smooth',
  args: {
    color: 'info',
    shape: 'smooth',
  },
}

export const InfoCurved: Story = {
  name: 'Info: curved',
  args: {
    color: 'info',
    shape: 'curved',
  },
}

export const InfoFull: Story = {
  name: 'Info: full',
  args: {
    color: 'info',
    shape: 'full',
  },
}
// #endregion

// #region Color: success
export const SuccessStraight: Story = {
  name: 'Success: straight',
  args: {
    color: 'success',
    shape: 'straight',
  },
}

export const SuccessRounded: Story = {
  name: 'Success: rounded',
  args: {
    color: 'success',
    shape: 'rounded',
  },
}

export const SuccessSmooth: Story = {
  name: 'Success: smooth',
  args: {
    color: 'success',
    shape: 'smooth',
  },
}

export const SuccessCurved: Story = {
  name: 'Success: curved',
  args: {
    color: 'success',
    shape: 'curved',
  },
}

export const SuccessFull: Story = {
  name: 'Success: full',
  args: {
    color: 'success',
    shape: 'full',
  },
}
// #endregion

// #region Color: warning
export const WarningStraight: Story = {
  name: 'Warning: straight',
  args: {
    color: 'warning',
    shape: 'straight',
  },
}

export const WarningRounded: Story = {
  name: 'Warning: rounded',
  args: {
    color: 'warning',
    shape: 'rounded',
  },
}

export const WarningSmooth: Story = {
  name: 'Warning: smooth',
  args: {
    color: 'warning',
    shape: 'smooth',
  },
}

export const WarningCurved: Story = {
  name: 'Warning: curved',
  args: {
    color: 'warning',
    shape: 'curved',
  },
}

export const WarningFull: Story = {
  name: 'Warning: full',
  args: {
    color: 'warning',
    shape: 'full',
  },
}
// #endregion

// #region Color: danger
export const DangerStraight: Story = {
  name: 'Danger: straight',
  args: {
    color: 'danger',
    shape: 'straight',
  },
}

export const DangerRounded: Story = {
  name: 'Danger: rounded',
  args: {
    color: 'danger',
    shape: 'rounded',
  },
}

export const DangerSmooth: Story = {
  name: 'Danger: smooth',
  args: {
    color: 'danger',
    shape: 'smooth',
  },
}

export const DangerCurved: Story = {
  name: 'Danger: curved',
  args: {
    color: 'danger',
    shape: 'curved',
  },
}

export const DangerFull: Story = {
  name: 'Danger: full',
  args: {
    color: 'danger',
    shape: 'full',
  },
}
// #endregion
