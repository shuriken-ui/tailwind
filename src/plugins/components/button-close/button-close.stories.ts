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
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg'],
      defaultValue: 'md',
    },
    color: {
      control: { type: 'select' },
      options: [
        'default',
        'default-contrast',
        'muted',
        'muted-contrast',
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
      options: ['none', 'sm', 'md', 'lg', 'full'],
      defaultValue: 'none',
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
    rounded: 'full',
  },
}
// #endregion

// #region Sizes
export const SizeXs: Story = {
  name: 'Size: xs',
  args: {
    color: 'muted',
    size: 'xs',
    rounded: 'md',
  },
}

export const SizeSm: Story = {
  name: 'Size: sm',
  args: {
    color: 'muted',
    size: 'sm',
    rounded: 'md',
  },
}

export const SizeMd: Story = {
  name: 'Size: md',
  args: {
    color: 'muted',
    size: 'md',
    rounded: 'md',
  },
}

export const SizeLg: Story = {
  name: 'Size: lg',
  args: {
    color: 'muted',
    size: 'lg',
    rounded: 'md',
  },
}
// #endregion

// #region Color: default
export const DefaultStraight: Story = {
  name: 'Default: none',
  args: {
    color: 'default',
    rounded: 'none',
  },
}

export const DefaultRounded: Story = {
  name: 'Default: sm',
  args: {
    color: 'default',
    rounded: 'sm',
  },
}

export const DefaultSmooth: Story = {
  name: 'Default: md',
  args: {
    color: 'default',
    rounded: 'md',
  },
}

export const DefaultCurved: Story = {
  name: 'Default: lg',
  args: {
    color: 'default',
    rounded: 'lg',
  },
}

export const DefaultFull: Story = {
  name: 'Default: full',
  args: {
    color: 'default',
    rounded: 'full',
  },
}
// #endregion

// #region Color: muted
export const MutedStraight: Story = {
  name: 'Muted: none',
  args: {
    color: 'muted',
    rounded: 'none',
  },
}

export const MutedRounded: Story = {
  name: 'Muted: sm',
  args: {
    color: 'muted',
    rounded: 'sm',
  },
}

export const MutedSmooth: Story = {
  name: 'Muted: md',
  args: {
    color: 'muted',
    rounded: 'md',
  },
}

export const MutedCurved: Story = {
  name: 'Muted: lg',
  args: {
    color: 'muted',
    rounded: 'lg',
  },
}

export const MutedFull: Story = {
  name: 'Muted: full',
  args: {
    color: 'muted',
    rounded: 'full',
  },
}
// #endregion

// #region Color: primary
export const PrimaryStraight: Story = {
  name: 'Primary: none',
  args: {
    color: 'primary',
    rounded: 'none',
  },
}

export const PrimaryRounded: Story = {
  name: 'Primary: sm',
  args: {
    color: 'primary',
    rounded: 'sm',
  },
}

export const PrimarySmooth: Story = {
  name: 'Primary: md',
  args: {
    color: 'primary',
    rounded: 'md',
  },
}

export const PrimaryCurved: Story = {
  name: 'Primary: lg',
  args: {
    color: 'primary',
    rounded: 'lg',
  },
}

export const PrimaryFull: Story = {
  name: 'Primary: full',
  args: {
    color: 'primary',
    rounded: 'full',
  },
}
// #endregion

// #region Color: info
export const InfoStraight: Story = {
  name: 'Info: none',
  args: {
    color: 'info',
    rounded: 'none',
  },
}

export const InfoRounded: Story = {
  name: 'Info: sm',
  args: {
    color: 'info',
    rounded: 'sm',
  },
}

export const InfoSmooth: Story = {
  name: 'Info: md',
  args: {
    color: 'info',
    rounded: 'md',
  },
}

export const InfoCurved: Story = {
  name: 'Info: lg',
  args: {
    color: 'info',
    rounded: 'lg',
  },
}

export const InfoFull: Story = {
  name: 'Info: full',
  args: {
    color: 'info',
    rounded: 'full',
  },
}
// #endregion

// #region Color: success
export const SuccessStraight: Story = {
  name: 'Success: none',
  args: {
    color: 'success',
    rounded: 'none',
  },
}

export const SuccessRounded: Story = {
  name: 'Success: sm',
  args: {
    color: 'success',
    rounded: 'sm',
  },
}

export const SuccessSmooth: Story = {
  name: 'Success: md',
  args: {
    color: 'success',
    rounded: 'md',
  },
}

export const SuccessCurved: Story = {
  name: 'Success: lg',
  args: {
    color: 'success',
    rounded: 'lg',
  },
}

export const SuccessFull: Story = {
  name: 'Success: full',
  args: {
    color: 'success',
    rounded: 'full',
  },
}
// #endregion

// #region Color: warning
export const WarningStraight: Story = {
  name: 'Warning: none',
  args: {
    color: 'warning',
    rounded: 'none',
  },
}

export const WarningRounded: Story = {
  name: 'Warning: sm',
  args: {
    color: 'warning',
    rounded: 'sm',
  },
}

export const WarningSmooth: Story = {
  name: 'Warning: md',
  args: {
    color: 'warning',
    rounded: 'md',
  },
}

export const WarningCurved: Story = {
  name: 'Warning: lg',
  args: {
    color: 'warning',
    rounded: 'lg',
  },
}

export const WarningFull: Story = {
  name: 'Warning: full',
  args: {
    color: 'warning',
    rounded: 'full',
  },
}
// #endregion

// #region Color: danger
export const DangerStraight: Story = {
  name: 'Danger: none',
  args: {
    color: 'danger',
    rounded: 'none',
  },
}

export const DangerRounded: Story = {
  name: 'Danger: sm',
  args: {
    color: 'danger',
    rounded: 'sm',
  },
}

export const DangerSmooth: Story = {
  name: 'Danger: md',
  args: {
    color: 'danger',
    rounded: 'md',
  },
}

export const DangerCurved: Story = {
  name: 'Danger: lg',
  args: {
    color: 'danger',
    rounded: 'lg',
  },
}

export const DangerFull: Story = {
  name: 'Danger: full',
  args: {
    color: 'danger',
    rounded: 'full',
  },
}
// #endregion
