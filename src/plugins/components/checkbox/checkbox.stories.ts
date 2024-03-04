import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import type { CheckboxAttrs } from './checkbox.types'
import { Checkbox } from './checkbox.component'

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Shuriken UI/Form/Checkbox',
  // tags: ['autodocs'],
  render: (args) => Checkbox(args),
  argTypes: {
    id: {
      name: 'id',
      control: { type: 'text' },
      defaultValue: 'checkbox-main',
    },
    label: {
      name: 'label',
      control: { type: 'text' },
      defaultValue: '',
    },
    rounded: {
      control: { type: 'select' },
      options: ['none', 'sm', 'md', 'lg', 'full'],
      defaultValue: 'sm',
    },
    color: {
      control: { type: 'select' },
      options: [
        'default',
        'muted',
        'light',
        'dark',
        'black',
        'primary',
        'info',
        'success',
        'warning',
        'danger',
      ],
      defaultValue: 'default',
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
} satisfies Meta<CheckboxAttrs>

export default meta
type Story = StoryObj<CheckboxAttrs>

// first export is the Primary story

// #region Main
export const Main: Story = {
  name: 'Main example',
  args: {
    label: 'Checkbox',
    rounded: 'sm',
    color: 'primary',
    id: 'checkbox-main',
  },
}
// #endregion

// #region Rounded:none
export const StraightDefault: Story = {
  name: 'Straight: default',
  args: {
    label: 'Checkbox',
    rounded: 'none',
    color: 'default',
    id: 'checkbox-straight-default',
    checked: true,
  },
}

export const StraightMuted: Story = {
  name: 'Straight: muted',
  args: {
    label: 'Checkbox',
    rounded: 'none',
    color: 'muted',
    id: 'checkbox-straight-muted',
    checked: true,
  },
}

export const StraightPrimary: Story = {
  name: 'Straight: primary',
  args: {
    label: 'Checkbox',
    rounded: 'none',
    color: 'primary',
    id: 'checkbox-straight-primary',
    checked: true,
  },
}

export const StraightInfo: Story = {
  name: 'Straight: info',
  args: {
    label: 'Checkbox',
    rounded: 'none',
    color: 'info',
    id: 'checkbox-straight-info',
    checked: true,
  },
}

export const StraightSuccess: Story = {
  name: 'Straight: success',
  args: {
    label: 'Checkbox',
    rounded: 'none',
    color: 'success',
    id: 'checkbox-straight-success',
    checked: true,
  },
}

export const StraightWarning: Story = {
  name: 'Straight: warning',
  args: {
    label: 'Checkbox',
    rounded: 'none',
    color: 'warning',
    id: 'checkbox-straight-warning',
    checked: true,
  },
}

export const StraightDanger: Story = {
  name: 'Straight: danger',
  args: {
    label: 'Checkbox',
    rounded: 'none',
    color: 'danger',
    id: 'checkbox-straight-danger',
    checked: true,
  },
}

export const StraightDark: Story = {
  name: 'Straight: dark',
  args: {
    label: 'Checkbox',
    rounded: 'none',
    color: 'dark',
    id: 'checkbox-straight-dark',
    checked: true,
  },
}

export const StraightBlack: Story = {
  name: 'Straight: black',
  args: {
    label: 'Checkbox',
    rounded: 'none',
    color: 'black',
    id: 'checkbox-straight-black',
    checked: true,
  },
}
// #endregion

// #region Rounded:sm
export const RoundedDefault: Story = {
  name: 'Rounded: default',
  args: {
    label: 'Checkbox',
    rounded: 'sm',
    color: 'default',
    id: 'checkbox-rounded-default',
    checked: true,
  },
}

export const RoundedMuted: Story = {
  name: 'Rounded: muted',
  args: {
    label: 'Checkbox',
    rounded: 'sm',
    color: 'muted',
    id: 'checkbox-rounded-muted',
    checked: true,
  },
}

export const RoundedPrimary: Story = {
  name: 'Rounded: primary',
  args: {
    label: 'Checkbox',
    rounded: 'sm',
    color: 'primary',
    id: 'checkbox-rounded-primary',
    checked: true,
  },
}

export const RoundedInfo: Story = {
  name: 'Rounded: info',
  args: {
    label: 'Checkbox',
    rounded: 'sm',
    color: 'info',
    id: 'checkbox-rounded-info',
    checked: true,
  },
}

export const RoundedSuccess: Story = {
  name: 'Rounded: success',
  args: {
    label: 'Checkbox',
    rounded: 'sm',
    color: 'success',
    id: 'checkbox-rounded-success',
    checked: true,
  },
}

export const RoundedWarning: Story = {
  name: 'Rounded: warning',
  args: {
    label: 'Checkbox',
    rounded: 'sm',
    color: 'warning',
    id: 'checkbox-rounded-warning',
    checked: true,
  },
}

export const RoundedDanger: Story = {
  name: 'Rounded: danger',
  args: {
    label: 'Checkbox',
    rounded: 'sm',
    color: 'danger',
    id: 'checkbox-rounded-danger',
    checked: true,
  },
}

export const RoundedDark: Story = {
  name: 'Rounded: dark',
  args: {
    label: 'Checkbox',
    rounded: 'sm',
    color: 'dark',
    id: 'checkbox-rounded-dark',
    checked: true,
  },
}

export const RoundedBlack: Story = {
  name: 'Rounded: black',
  args: {
    label: 'Checkbox',
    rounded: 'sm',
    color: 'black',
    id: 'checkbox-rounded-black',
    checked: true,
  },
}
// #endregion

// #region Rounded:md
export const SmoothDefault: Story = {
  name: 'Smooth: default',
  args: {
    label: 'Checkbox',
    rounded: 'md',
    color: 'default',
    id: 'checkbox-smooth-default',
    checked: true,
  },
}

export const SmoothMuted: Story = {
  name: 'Smooth: muted',
  args: {
    label: 'Checkbox',
    rounded: 'md',
    color: 'muted',
    id: 'checkbox-smooth-muted',
    checked: true,
  },
}

export const SmoothPrimary: Story = {
  name: 'Smooth: primary',
  args: {
    label: 'Checkbox',
    rounded: 'md',
    color: 'primary',
    id: 'checkbox-smooth-primary',
    checked: true,
  },
}

export const SmoothInfo: Story = {
  name: 'Smooth: info',
  args: {
    label: 'Checkbox',
    rounded: 'md',
    color: 'info',
    id: 'checkbox-smooth-info',
    checked: true,
  },
}

export const SmoothSuccess: Story = {
  name: 'Smooth: success',
  args: {
    label: 'Checkbox',
    rounded: 'md',
    color: 'success',
    id: 'checkbox-smooth-success',
    checked: true,
  },
}

export const SmoothWarning: Story = {
  name: 'Smooth: warning',
  args: {
    label: 'Checkbox',
    rounded: 'md',
    color: 'warning',
    id: 'checkbox-smooth-warning',
    checked: true,
  },
}

export const SmoothDanger: Story = {
  name: 'Smooth: danger',
  args: {
    label: 'Checkbox',
    rounded: 'md',
    color: 'danger',
    id: 'checkbox-smooth-danger',
    checked: true,
  },
}

export const SmoothDark: Story = {
  name: 'Smooth: dark',
  args: {
    label: 'Checkbox',
    rounded: 'md',
    color: 'dark',
    id: 'checkbox-smooth-dark',
    checked: true,
  },
}

export const SmoothBlack: Story = {
  name: 'Smooth: black',
  args: {
    label: 'Checkbox',
    rounded: 'md',
    color: 'black',
    id: 'checkbox-smooth-black',
    checked: true,
  },
}
// #endregion

// #region Rounded:lg
export const CurvedDefault: Story = {
  name: 'Curved: default',
  args: {
    label: 'Checkbox',
    rounded: 'lg',
    color: 'default',
    id: 'checkbox-curved-default',
    checked: true,
  },
}

export const CurvedMuted: Story = {
  name: 'Curved: muted',
  args: {
    label: 'Checkbox',
    rounded: 'lg',
    color: 'muted',
    id: 'checkbox-curved-muted',
    checked: true,
  },
}

export const CurvedPrimary: Story = {
  name: 'Curved: primary',
  args: {
    label: 'Checkbox',
    rounded: 'lg',
    color: 'primary',
    id: 'checkbox-curved-primary',
    checked: true,
  },
}

export const CurvedInfo: Story = {
  name: 'Curved: info',
  args: {
    label: 'Checkbox',
    rounded: 'lg',
    color: 'info',
    id: 'checkbox-curved-info',
    checked: true,
  },
}

export const CurvedSuccess: Story = {
  name: 'Curved: success',
  args: {
    label: 'Checkbox',
    rounded: 'lg',
    color: 'success',
    id: 'checkbox-curved-success',
    checked: true,
  },
}

export const CurvedWarning: Story = {
  name: 'Curved: warning',
  args: {
    label: 'Checkbox',
    rounded: 'lg',
    color: 'warning',
    id: 'checkbox-curved-warning',
    checked: true,
  },
}

export const CurvedDanger: Story = {
  name: 'Curved: danger',
  args: {
    label: 'Checkbox',
    rounded: 'lg',
    color: 'danger',
    id: 'checkbox-curved-danger',
    checked: true,
  },
}

export const CurvedDark: Story = {
  name: 'Curved: dark',
  args: {
    label: 'Checkbox',
    rounded: 'lg',
    color: 'dark',
    id: 'checkbox-curved-dark',
    checked: true,
  },
}

export const CurvedBlack: Story = {
  name: 'Curved: black',
  args: {
    label: 'Checkbox',
    rounded: 'lg',
    color: 'black',
    id: 'checkbox-curved-black',
    checked: true,
  },
}
// #endregion

// #region Rounded:full
export const FullDefault: Story = {
  name: 'Full: default',
  args: {
    label: 'Checkbox',
    rounded: 'full',
    color: 'default',
    id: 'checkbox-full-default',
    checked: true,
  },
}

export const FullMuted: Story = {
  name: 'Full: muted',
  args: {
    label: 'Checkbox',
    rounded: 'full',
    color: 'muted',
    id: 'checkbox-full-muted',
    checked: true,
  },
}

export const FullPrimary: Story = {
  name: 'Full: primary',
  args: {
    label: 'Checkbox',
    rounded: 'full',
    color: 'primary',
    id: 'checkbox-full-primary',
    checked: true,
  },
}

export const FullInfo: Story = {
  name: 'Full: info',
  args: {
    label: 'Checkbox',
    rounded: 'full',
    color: 'info',
    id: 'checkbox-full-info',
    checked: true,
  },
}

export const FullSuccess: Story = {
  name: 'Full: success',
  args: {
    label: 'Checkbox',
    rounded: 'full',
    color: 'success',
    id: 'checkbox-full-success',
    checked: true,
  },
}

export const FullWarning: Story = {
  name: 'Full: warning',
  args: {
    label: 'Checkbox',
    rounded: 'full',
    color: 'warning',
    id: 'checkbox-full-warning',
    checked: true,
  },
}

export const FullDanger: Story = {
  name: 'Full: danger',
  args: {
    label: 'Checkbox',
    rounded: 'full',
    color: 'danger',
    id: 'checkbox-full-danger',
    checked: true,
  },
}

export const FullDark: Story = {
  name: 'Full: dark',
  args: {
    label: 'Checkbox',
    rounded: 'full',
    color: 'dark',
    id: 'checkbox-full-dark',
    checked: true,
  },
}

export const FullBlack: Story = {
  name: 'Full: black',
  args: {
    label: 'Checkbox',
    rounded: 'full',
    color: 'black',
    id: 'checkbox-full-black',
    checked: true,
  },
}
// #endregion

// #region State: disabled
export const StraightDisabled: Story = {
  name: 'Straight: disabled',
  args: {
    label: 'Checkbox',
    rounded: 'none',
    color: 'default',
    id: 'checkbox-disabled-straight',
    checked: true,
    '?disabled': true,
  },
}

export const RoundedDisabled: Story = {
  name: 'Rounded: disabled',
  args: {
    label: 'Checkbox',
    rounded: 'sm',
    color: 'default',
    id: 'checkbox-disabled-rounded',
    checked: true,
    '?disabled': true,
  },
}

export const SmoothDisabled: Story = {
  name: 'Smooth: disabled',
  args: {
    label: 'Checkbox',
    rounded: 'md',
    color: 'default',
    id: 'checkbox-disabled-smooth',
    checked: true,
    '?disabled': true,
  },
}

export const CurvedDisabled: Story = {
  name: 'Curved: disabled',
  args: {
    label: 'Checkbox',
    rounded: 'lg',
    color: 'default',
    id: 'checkbox-disabled-curved',
    checked: true,
    '?disabled': true,
  },
}

export const FullDisabled: Story = {
  name: 'Full: disabled',
  args: {
    label: 'Checkbox',
    rounded: 'full',
    color: 'default',
    id: 'checkbox-disabled-full',
    checked: true,
    '?disabled': true,
  },
}
// #endregion
